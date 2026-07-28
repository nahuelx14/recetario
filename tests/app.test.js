const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const projectRoot = path.resolve(__dirname, "..");
const recipesSource = fs.readFileSync(path.join(projectRoot, "js", "recipes.js"), "utf8");
const sweetRecipesSource = fs.readFileSync(path.join(projectRoot, "js", "sweet-recipes.js"), "utf8");
const grossSweetSources = [
  "gross-tortas-y-masitas.js",
  "gross-budines-y-hojaldres.js",
  "gross-leudados-y-postres.js",
].map((filename) => fs.readFileSync(path.join(projectRoot, "js", filename), "utf8"));
const completeSweetRecipesSource = [sweetRecipesSource, ...grossSweetSources].join("\n");
const appSource = fs.readFileSync(path.join(projectRoot, "js", "app.js"), "utf8");
const sweetHtmlSource = fs.readFileSync(path.join(projectRoot, "dulces.html"), "utf8");

class ClassList {
  constructor() {
    this.values = new Set();
  }

  add(value) {
    this.values.add(value);
  }

  remove(value) {
    this.values.delete(value);
  }

  toggle(value, force) {
    if (force) this.add(value);
    else this.remove(value);
  }
}

class Element {
  constructor(id = "") {
    this.id = id;
    this.textContent = "";
    this.className = "";
    this.classList = new ClassList();
    this.children = [];
    this.listeners = new Map();
    this.attributes = new Map();
    this.dataset = {};
    this.disabled = id === "favorite";
    this.hidden = false;
  }

  addEventListener(type, listener) {
    this.listeners.set(type, listener);
  }

  appendChild(child) {
    this.children.push(child);
  }

  append(...children) {
    this.children.push(...children);
  }

  replaceChildren(...children) {
    this.children = [...children];
  }

  setAttribute(name, value) {
    this.attributes.set(name, value);
  }

  removeAttribute(name) {
    this.attributes.delete(name);
    if (name === "src") this.src = "";
  }

  remove() {}

  scrollIntoView() {}

  click() {
    if (!this.disabled) this.listeners.get("click")?.();
  }
}

function createStorage() {
  const values = new Map();

  return {
    getItem(key) {
      return values.has(key) ? values.get(key) : null;
    },
    setItem(key, value) {
      values.set(key, String(value));
    },
  };
}

function loadApplication(localStorage, catalogSource = recipesSource) {
  const ids = [
    "one", "two", "category", "time", "title", "note", "source", "announcement", "recipe",
    "recipeVisual", "recipeImage", "visualPlaceholder", "visualNumber", "visualLabel",
    "recipeTotalIntro", "recipeTotalCatalog", "recipeTotalFooter",
    "ingredients", "prepBlock", "prep", "steps", "tipBlock", "tip",
    "pick", "another", "favorite", "remaining", "favoriteCount", "history",
    "favorites", "catalogFilters", "grid", "toast",
  ];
  const elements = Object.fromEntries(ids.map((id) => [id, new Element(id)]));
  const context = vm.createContext({
    document: {
      getElementById: (id) => elements[id],
      createElement: () => new Element(),
    },
    localStorage,
    window: { scrollTo() {} },
    setTimeout,
    clearTimeout,
    console,
  });

  vm.runInContext(catalogSource, context, { filename: "catalog.js" });
  vm.runInContext(appSource, context, { filename: "app.js" });

  return { context, elements };
}

const storage = createStorage();
const firstLoad = loadApplication(storage);

assert.equal(vm.runInContext("recipes.length", firstLoad.context), 112, "Debe cargar el catálogo salado ampliado");
assert.equal(vm.runInContext("new Set(recipes.map((recipe) => recipe.id)).size", firstLoad.context), 112, "Cada receta salada debe tener un ID único");
assert.equal(firstLoad.elements.grid.children.length, 112, "Debe mostrar todas las recetas saladas");
assert.equal(firstLoad.elements.remaining.textContent, 112, "El mazo debe comenzar completo");
assert.equal(firstLoad.elements.recipeTotalCatalog.textContent, 112, "El total visible debe salir del catálogo real");
assert.equal(
  vm.runInContext("recipes.every((recipe) => recipe.ingredients.length && recipe.steps.length >= 3 && recipe.prep && recipe.tip && categoryTone(recipe.category) !== 'idle')", firstLoad.context),
  true,
  "Cada receta salada debe incluir guía completa y una categoría visual válida",
);
assert.equal(
  vm.runInContext("recipes.filter((recipe) => recipe.category === 'Entradas y picadas').length", firstLoad.context),
  24,
  "Debe separar las entradas y picadas",
);

const starterFilter = firstLoad.elements.catalogFilters.children.find((button) => button.textContent.startsWith("Entradas y picadas"));
starterFilter.click();
assert.equal(firstLoad.elements.grid.children.length, 24, "El filtro debe mostrar solo entradas y picadas");
const allFilter = firstLoad.elements.catalogFilters.children.find((button) => button.textContent.startsWith("Todas"));
allFilter.click();
assert.equal(firstLoad.elements.grid.children.length, 112, "El filtro Todas debe restaurar el catálogo completo");

firstLoad.elements.pick.click();
const firstRecipeName = firstLoad.elements.title.textContent;
const onePersonIngredient = firstLoad.elements.ingredients.children[0].textContent;

assert.ok(firstRecipeName, "El sorteo debe mostrar una receta");
assert.match(firstLoad.elements.visualNumber.textContent, /^CENA \d{2,3}$/, "La portada salada debe mostrar el número de receta");
assert.notEqual(firstLoad.elements.recipeVisual.dataset.tone, "idle", "La portada debe adoptar el color de su categoría");
assert.ok(firstLoad.elements.ingredients.children.length > 0, "Debe mostrar ingredientes");
assert.ok(firstLoad.elements.steps.children.length > 0, "Debe mostrar el método");
assert.ok(firstLoad.elements.prep.textContent, "Debe mostrar la preparación previa");
assert.ok(firstLoad.elements.tip.textContent, "Debe mostrar el punto técnico clave");
assert.equal(firstLoad.elements.prepBlock.hidden, false, "La preparación previa debe quedar visible");
assert.equal(firstLoad.elements.tipBlock.hidden, false, "El tip técnico debe quedar visible");
assert.equal(firstLoad.elements.remaining.textContent, 111, "El sorteo debe retirar una receta del mazo");
assert.equal(firstLoad.elements.history.children.length, 1, "El sorteo debe entrar al historial");

firstLoad.elements.two.click();
assert.notEqual(
  firstLoad.elements.ingredients.children[0].textContent,
  onePersonIngredient,
  "Cambiar a dos personas debe actualizar las cantidades",
);
assert.equal(storage.getItem("cenas_portions"), "2", "Las porciones deben persistirse");

firstLoad.elements.favorite.click();
assert.equal(firstLoad.elements.favoriteCount.textContent, 1, "Debe contar la receta guardada");
assert.equal(JSON.parse(storage.getItem("cenas_petrona_favorites")).length, 1, "El favorito debe persistirse");
assert.equal(typeof JSON.parse(storage.getItem("cenas_petrona_favorites"))[0], "string", "Los favoritos deben guardarse con IDs estables");

const historyBeforeCatalog = JSON.parse(storage.getItem("cenas_petrona_history"));
firstLoad.elements.grid.children[0].click();
assert.deepEqual(
  JSON.parse(storage.getItem("cenas_petrona_history")),
  historyBeforeCatalog,
  "Abrir el catálogo no debe contaminar el historial de sorteos",
);

const secondLoad = loadApplication(storage);
assert.equal(secondLoad.elements.remaining.textContent, 111, "El mazo debe sobrevivir a una recarga");
assert.equal(secondLoad.elements.favoriteCount.textContent, 1, "Los favoritos deben sobrevivir a una recarga");
assert.equal(secondLoad.elements.two.attributes.get("aria-pressed"), "true", "Las porciones deben restaurarse");

secondLoad.elements.another.click();
assert.notEqual(secondLoad.elements.title.textContent, firstRecipeName, "El mazo no debe repetir recetas");
assert.equal(secondLoad.elements.remaining.textContent, 110, "El mazo persistido debe continuar");
assert.equal(secondLoad.elements.history.children.length, 2, "El historial debe conservar y sumar sorteos");

const removeFavorite = secondLoad.elements.favorites.children[0].children[1];
removeFavorite.click();
assert.equal(secondLoad.elements.favoriteCount.textContent, 0, "Debe poder quitar un favorito");
assert.deepEqual(JSON.parse(storage.getItem("cenas_petrona_favorites")), [], "La eliminación debe persistirse");

const sweetStorage = createStorage();
const sweetLoad = loadApplication(sweetStorage, completeSweetRecipesSource);
const sweetCount = vm.runInContext("recipes.length", sweetLoad.context);

assert.equal(sweetCount, 82, "Debe cargar las 36 recetas previas y las 46 seleccionadas de Osvaldo Gross");
for (const filename of [
  "gross-tortas-y-masitas.js",
  "gross-budines-y-hojaldres.js",
  "gross-leudados-y-postres.js",
]) {
  assert.ok(sweetHtmlSource.includes(`./js/${filename}`), `La página dulce debe cargar ${filename}`);
  assert.ok(
    sweetHtmlSource.indexOf(`./js/${filename}`) < sweetHtmlSource.indexOf("./js/app.js"),
    `${filename} debe cargarse antes de iniciar la aplicación`,
  );
}
assert.match(sweetHtmlSource, /id="recipeTotalIntro">82</, "El total inicial de la página debe coincidir con el catálogo");
assert.equal(vm.runInContext("new Set(recipes.map((recipe) => recipe.id)).size", sweetLoad.context), sweetCount, "Cada receta dulce debe tener un ID único");
assert.equal(sweetLoad.elements.grid.children.length, sweetCount, "Debe mostrar todo el catálogo dulce");
assert.equal(sweetLoad.elements.remaining.textContent, sweetCount, "El mazo dulce debe comenzar con las 82 preparaciones");
assert.equal(sweetLoad.elements.recipeTotalIntro.textContent, sweetCount, "El total dulce visible debe salir del catálogo completo");
const sweetCategoryCount = vm.runInContext("new Set(recipes.map((recipe) => recipe.category)).size", sweetLoad.context);
assert.equal(
  sweetLoad.elements.catalogFilters.children.length,
  sweetCategoryCount + 1,
  "Debe ofrecer Todas y un filtro por cada categoría dulce",
);
assert.deepEqual(
  sweetLoad.elements.catalogFilters.children.map((button) => button.textContent.split(" · ")[0]),
  ["Todas", "Tortas y tartas", "Budines y muffins", "Galletitas y masitas", "Masas y piezas de horno", "Postres y cremas", "Frutas y frescos"],
  "Los filtros dulces deben aparecer en un orden fácil de explorar",
);
assert.equal(
  vm.runInContext("JSON.stringify([...new Set(recipes.map((recipe) => recipe.category))].sort())", sweetLoad.context),
  JSON.stringify([
    "Budines y muffins",
    "Frutas y frescos",
    "Galletitas y masitas",
    "Masas y piezas de horno",
    "Postres y cremas",
    "Tortas y tartas",
  ].sort()),
  "El catálogo dulce debe usar las seis categorías acordadas",
);
const cookiesFilter = sweetLoad.elements.catalogFilters.children.find((button) => button.textContent.startsWith("Galletitas y masitas"));
cookiesFilter.click();
assert.equal(sweetLoad.elements.grid.children.length, 10, "El filtro de galletitas y masitas debe incluir recetas previas y de Gross");
sweetLoad.elements.catalogFilters.children.find((button) => button.textContent.startsWith("Todas")).click();
assert.equal(sweetLoad.elements.grid.children.length, sweetCount, "El filtro Todas debe restaurar las 82 preparaciones");
assert.equal(
  vm.runInContext("recipes.every((recipe) => Number.isFinite(recipe.minutes) && recipe.minutes > 0 && recipe.ingredients.length && recipe.ingredients.every((ingredient) => (ingredient.qty === null || (Number.isFinite(ingredient.qty) && ingredient.qty > 0)) && typeof ingredient.unit === 'string' && typeof ingredient.name === 'string' && ingredient.name.trim()) && recipe.steps.length >= 3 && recipe.prep && recipe.tip && categoryTone(recipe.category) !== 'idle' && categoryCoverLabel(recipe.category) !== APP_CONFIG.defaultCover)", sweetLoad.context),
  true,
  "Cada dulce debe incluir tiempo, cantidades, método, guía y una categoría visual válida",
);
assert.equal(
  vm.runInContext("recipes.every((recipe) => recipe.source === undefined || (typeof recipe.source === 'string' && recipe.source.trim().length > 0))", sweetLoad.context),
  true,
  "La fuente debe ser opcional, pero no puede estar vacía cuando existe",
);
assert.equal(
  vm.runInContext("recipes.filter((recipe) => recipe.id.startsWith('gross-') && recipe.source === 'Pastelería Base, de Osvaldo Gross').length", sweetLoad.context),
  46,
  "Las 46 recetas nuevas deben conservar su procedencia",
);

vm.runInContext("renderRecipe(recipes.findIndex((recipe) => recipe.id === 'gross-tarta-de-limon'), false)", sweetLoad.context);
assert.equal(sweetLoad.elements.source.hidden, false, "Una receta con fuente debe mostrar su procedencia");
assert.match(sweetLoad.elements.source.textContent, /Osvaldo Gross/, "La procedencia debe identificar la fuente");
vm.runInContext("renderRecipe(0, false)", sweetLoad.context);
assert.equal(sweetLoad.elements.source.hidden, true, "Una receta sin fuente debe ocultar la procedencia");
assert.equal(sweetLoad.elements.source.textContent, "", "La fuente anterior no debe quedar visible en otra receta");
vm.runInContext("renderRecipe(recipes.findIndex((recipe) => recipe.id === 'gross-medialunas-de-andrea'), false)", sweetLoad.context);
assert.match(sweetLoad.elements.time.textContent, /^10 h aprox\./, "Las preparaciones largas deben mostrar horas en lugar de cientos de minutos");

sweetLoad.elements.pick.click();
assert.match(sweetLoad.elements.visualNumber.textContent, /^DULCE \d{2,3}$/, "La portada dulce debe usar su propio prefijo");
assert.match(sweetLoad.elements.time.textContent, /1 tanda$/, "El tamaño dulce debe expresarse como tanda");
assert.equal(sweetLoad.elements.remaining.textContent, sweetCount - 1, "El sorteo dulce debe retirar una preparación del mazo completo");
const sweetIngredient = sweetLoad.elements.ingredients.children[0].textContent;
sweetLoad.elements.two.click();
assert.notEqual(sweetLoad.elements.ingredients.children[0].textContent, sweetIngredient, "La tanda doble debe escalar ingredientes");
assert.equal(sweetStorage.getItem("dulces_petrona_portions"), "2", "El tamaño dulce debe guardarse por separado");
sweetLoad.elements.favorite.click();
assert.equal(JSON.parse(sweetStorage.getItem("dulces_petrona_favorites")).length, 1, "Los favoritos dulces deben persistirse aparte");
assert.equal(sweetStorage.getItem("cenas_petrona_favorites"), null, "La página dulce no debe tocar los favoritos salados");

console.log(`OK: 112 recetas saladas, ${sweetCount} dulces, categorías filtrables, fuentes opcionales, sorteos separados, cantidades, historial y favoritos persistentes.`);
