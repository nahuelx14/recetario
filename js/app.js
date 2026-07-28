const $ = (id) => document.getElementById(id);

const elements = {
  one: $("one"),
  two: $("two"),
  category: $("category"),
  time: $("time"),
  title: $("title"),
  note: $("note"),
  source: $("source"),
  announcement: $("announcement"),
  recipeSection: $("recipe"),
  recipeVisual: $("recipeVisual"),
  recipeImage: $("recipeImage"),
  visualPlaceholder: $("visualPlaceholder"),
  visualNumber: $("visualNumber"),
  visualLabel: $("visualLabel"),
  recipeTotalIntro: $("recipeTotalIntro"),
  recipeTotalCatalog: $("recipeTotalCatalog"),
  recipeTotalFooter: $("recipeTotalFooter"),
  ingredients: $("ingredients"),
  prepBlock: $("prepBlock"),
  prep: $("prep"),
  steps: $("steps"),
  tipBlock: $("tipBlock"),
  tip: $("tip"),
  pick: $("pick"),
  another: $("another"),
  favorite: $("favorite"),
  remaining: $("remaining"),
  favoriteCount: $("favoriteCount"),
  history: $("history"),
  favorites: $("favorites"),
  catalogFilters: $("catalogFilters"),
  grid: $("grid"),
  toast: $("toast"),
};

const recipeIndexById = new Map(recipes.map((recipe, index) => [recipe.id, index]));

const DEFAULT_CONFIG = {
  visualPrefix: "CENA",
  announcementPrefix: "Cena sorteada",
  servingSingular: "persona",
  servingPlural: "personas",
  defaultCover: "receta\nde casa",
  shuffledLabel: "recetas",
};

const APP_CONFIG = {
  ...DEFAULT_CONFIG,
  ...(window.RECIPE_APP_CONFIG || {}),
};

const DEFAULT_STORAGE = {
  portions: "cenas_portions",
  history: "cenas_petrona_history",
  favorites: "cenas_petrona_favorites",
  deck: "cenas_petrona_deck",
  recipeCount: "cenas_petrona_recipe_count",
};

const STORAGE = {
  ...DEFAULT_STORAGE,
  ...(APP_CONFIG.storage || {}),
};

let portions = readPortions();
let current = null;
let history = readRecipeIndices(STORAGE.history);
let favorites = readRecipeIndices(STORAGE.favorites);
let deck = readRecipeIndices(STORAGE.deck);
let activeCategory = "Todas";

if (Number(readText(STORAGE.recipeCount)) !== recipes.length) {
  deck = [];
}

function readText(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function readArray(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function readPortions() {
  return Number(readText(STORAGE.portions)) === 2 ? 2 : 1;
}

function readRecipeIndices(key) {
  const indices = readArray(key).map((value) => {
    if (typeof value === "string") return recipeIndexById.get(value);
    return value;
  });

  return validRecipeIndices(indices);
}

function validRecipeIndices(values) {
  return [...new Set(values.filter((value) => Number.isInteger(value) && value >= 0 && value < recipes.length))];
}

function save() {
  try {
    localStorage.setItem(STORAGE.portions, String(portions));
    localStorage.setItem(STORAGE.history, JSON.stringify(history.map((index) => recipes[index].id)));
    localStorage.setItem(STORAGE.favorites, JSON.stringify(favorites.map((index) => recipes[index].id)));
    localStorage.setItem(STORAGE.deck, JSON.stringify(deck.map((index) => recipes[index].id)));
    localStorage.setItem(STORAGE.recipeCount, String(recipes.length));
  } catch {
    // La aplicación sigue funcionando durante la sesión si el navegador bloquea localStorage.
  }
}

function shuffle(values) {
  const copy = [...values];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

function resetDeck() {
  deck = shuffle(recipes.map((_, index) => index));
  elements.remaining.textContent = deck.length;
  save();
}

function formatNumber(value) {
  const rounded = Math.round(value * 100) / 100;
  const whole = Math.floor(rounded);
  const fraction = Math.round((rounded - whole) * 4) / 4;
  const fractions = { 0.25: "¼", 0.5: "½", 0.75: "¾" };

  if (fraction === 0) return String(whole);
  if (whole === 0 && fractions[fraction]) return fractions[fraction];
  if (fractions[fraction]) return `${whole}${fractions[fraction]}`;
  return String(rounded).replace(".", ",");
}

function formatIngredient(ingredient) {
  if (ingredient.qty === null) return ingredient.name;

  return `${formatNumber(ingredient.qty * portions)} ${ingredient.unit} ${ingredient.name}`
    .replace(/\s+/g, " ")
    .trim();
}

function formatDuration(minutes) {
  if (minutes < 90) return `${minutes} minutos`;

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes ? `${hours} h ${remainingMinutes} min` : `${hours} h`;
}

function setPortions(value) {
  portions = value;
  const isOnePerson = value === 1;

  elements.one.classList.toggle("active", isOnePerson);
  elements.two.classList.toggle("active", !isOnePerson);
  elements.one.setAttribute("aria-pressed", String(isOnePerson));
  elements.two.setAttribute("aria-pressed", String(!isOnePerson));
  save();

  if (current !== null) renderRecipe(current, false);
}

function renderRecipe(index, addToHistory = true) {
  current = index;
  const recipe = recipes[index];

  renderRecipeVisual(index, recipe);
  elements.category.textContent = recipe.category;
  elements.time.textContent = `${formatDuration(recipe.minutes)} aprox. · ${portions} ${portions === 1 ? APP_CONFIG.servingSingular : APP_CONFIG.servingPlural}`;
  elements.title.textContent = recipe.name;
  elements.note.textContent = recipe.note || "Adaptada a tu despensa habitual.";

  if (elements.source) {
    const source = typeof recipe.source === "string" ? recipe.source.trim() : "";
    elements.source.hidden = !source;
    elements.source.textContent = source ? `Inspirada en ${source}` : "";
  }

  renderGuidance(elements.prepBlock, elements.prep, recipe.prep);

  elements.ingredients.replaceChildren();
  recipe.ingredients.forEach((ingredient) => {
    const item = document.createElement("li");
    item.textContent = formatIngredient(ingredient);
    elements.ingredients.appendChild(item);
  });

  elements.steps.replaceChildren();
  recipe.steps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    elements.steps.appendChild(item);
  });

  renderGuidance(elements.tipBlock, elements.tip, recipe.tip);

  const isFavorite = favorites.includes(index);
  elements.favorite.disabled = isFavorite;
  elements.favorite.textContent = isFavorite ? "Receta guardada" : "Guardar receta";

  if (addToHistory) {
    history = [index, ...history.filter((value) => value !== index)].slice(0, 7);
    elements.announcement.textContent = `${APP_CONFIG.announcementPrefix}: ${recipe.name}`;
    save();
    renderHistory();
  }
}

function renderRecipeVisual(index, recipe) {
  const photo = recipe.photo;
  const hasPhoto = Boolean(photo && typeof photo.src === "string" && photo.src.trim());

  elements.recipeVisual.dataset.tone = categoryTone(recipe.category);
  elements.visualNumber.textContent = `${APP_CONFIG.visualPrefix} ${String(index + 1).padStart(2, "0")}`;
  elements.visualLabel.textContent = categoryCoverLabel(recipe.category);
  elements.recipeVisual.classList.toggle("hasPhoto", hasPhoto);
  elements.visualPlaceholder.hidden = hasPhoto;
  elements.recipeImage.hidden = !hasPhoto;

  if (hasPhoto) {
    elements.recipeImage.src = photo.src;
    elements.recipeImage.alt = photo.alt || recipe.name;
  } else {
    elements.recipeImage.removeAttribute("src");
    elements.recipeImage.alt = "";
  }
}

function showVisualPlaceholder() {
  elements.recipeVisual.classList.remove("hasPhoto");
  elements.recipeImage.hidden = true;
  elements.recipeImage.removeAttribute("src");
  elements.recipeImage.alt = "";
  elements.visualPlaceholder.hidden = false;
}

function categoryTone(category) {
  const tones = {
    "Tartas y horno": "oven",
    Legumbres: "legumes",
    "Pastas y cereales": "grains",
    "Huevos y verduras": "vegetables",
    "Atún y reuniones": "tuna",
    "Entradas y picadas": "starters",
    "Tortas y tartas": "sweet-cakes",
    "Budines y muffins": "sweet-loaves",
    "Galletitas y masitas": "sweet-cookies",
    "Masas y piezas de horno": "sweet-doughs",
    "Hojaldres y masas": "sweet-doughs",
    "Postres y cremas": "sweet-spoon",
    "Tortas y budines": "sweet-cakes",
    "Masitas y horno": "sweet-doughs",
    "Postres de cuchara": "sweet-spoon",
    "Frutas y frescos": "sweet-fruit",
  };

  return tones[category] || "idle";
}

function categoryCoverLabel(category) {
  const labels = {
    "Tartas y horno": "tartas\n& horno",
    Legumbres: "legumbres",
    "Pastas y cereales": "pastas\n& cereales",
    "Huevos y verduras": "huevos\n& verduras",
    "Atún y reuniones": "atún\n& reuniones",
    "Entradas y picadas": "entradas\n& picadas",
    "Tortas y tartas": "tortas\n& tartas",
    "Budines y muffins": "budines\n& muffins",
    "Galletitas y masitas": "galletitas\n& masitas",
    "Masas y piezas de horno": "masas\n& horno",
    "Hojaldres y masas": "hojaldres\n& masas",
    "Postres y cremas": "postres\n& cremas",
    "Tortas y budines": "tortas\n& budines",
    "Masitas y horno": "masitas\n& horno",
    "Postres de cuchara": "postres\nde cuchara",
    "Frutas y frescos": "frutas\n& frescos",
  };

  return labels[category] || APP_CONFIG.defaultCover;
}

function renderGuidance(block, content, text) {
  const hasContent = typeof text === "string" && text.trim().length > 0;
  block.hidden = !hasContent;
  content.textContent = hasContent ? text : "";
}

function pickRecipe() {
  if (!deck.length) {
    resetDeck();
    showToast(`Se mezclaron nuevamente las ${recipes.length} ${APP_CONFIG.shuffledLabel}`);
  }

  const index = deck.pop();
  elements.remaining.textContent = deck.length;
  renderRecipe(index);
}

function renderHistory() {
  elements.history.replaceChildren();

  if (!history.length) {
    const item = document.createElement("li");
    item.className = "empty";
    item.textContent = "Todavía no sorteaste ninguna.";
    elements.history.appendChild(item);
    return;
  }

  history.forEach((index, position) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "recipeLink";
    button.textContent = `${position + 1}. ${recipes[index].name}`;
    button.addEventListener("click", () => {
      renderRecipe(index, false);
      scrollToRecipe();
    });
    item.appendChild(button);
    elements.history.appendChild(item);
  });
}

function renderFavorites() {
  elements.favorites.replaceChildren();

  if (!favorites.length) {
    const item = document.createElement("li");
    item.className = "empty";
    item.textContent = "Todavía no guardaste recetas.";
    elements.favorites.appendChild(item);
  } else {
    favorites.forEach((index) => {
      const item = document.createElement("li");
      const openButton = document.createElement("button");
      const removeButton = document.createElement("button");

      openButton.type = "button";
      openButton.className = "recipeLink";
      openButton.textContent = recipes[index].name;
      openButton.addEventListener("click", () => {
        renderRecipe(index, false);
        scrollToRecipe();
      });

      removeButton.type = "button";
      removeButton.className = "remove";
      removeButton.textContent = "Quitar";
      removeButton.setAttribute("aria-label", `Quitar ${recipes[index].name} de recetas guardadas`);
      removeButton.addEventListener("click", () => {
        favorites = favorites.filter((value) => value !== index);
        save();
        renderFavorites();

        if (current === index) {
          elements.favorite.disabled = false;
          elements.favorite.textContent = "Guardar receta";
        }
      });

      item.append(openButton, removeButton);
      elements.favorites.appendChild(item);
    });
  }

  elements.favoriteCount.textContent = favorites.length;
}

function renderCategoryFilters() {
  if (!elements.catalogFilters) return;

  const discoveredCategories = [...new Set(recipes.map((recipe) => recipe.category))];
  const preferredCategories = Array.isArray(APP_CONFIG.categoryOrder)
    ? APP_CONFIG.categoryOrder.filter((category) => discoveredCategories.includes(category))
    : [];
  const categories = [
    "Todas",
    ...preferredCategories,
    ...discoveredCategories.filter((category) => !preferredCategories.includes(category)),
  ];
  elements.catalogFilters.replaceChildren();

  categories.forEach((categoryName) => {
    const button = document.createElement("button");
    const count = categoryName === "Todas"
      ? recipes.length
      : recipes.filter((recipe) => recipe.category === categoryName).length;

    button.type = "button";
    button.className = "filterChip";
    button.classList.toggle("active", categoryName === activeCategory);
    button.setAttribute("aria-pressed", String(categoryName === activeCategory));
    button.textContent = `${categoryName} · ${count}`;
    button.addEventListener("click", () => {
      activeCategory = categoryName;
      renderCategoryFilters();
      renderRecipeGrid();
    });
    elements.catalogFilters.appendChild(button);
  });
}

function renderRecipeGrid() {
  elements.grid.replaceChildren();

  recipes.forEach((recipe, index) => {
    if (activeCategory !== "Todas" && recipe.category !== activeCategory) return;

    const button = document.createElement("button");
    const visual = document.createElement("span");
    const number = document.createElement("span");
    const mark = document.createElement("span");
    const metadata = document.createElement("span");
    const category = document.createElement("span");
    const time = document.createElement("span");
    const name = document.createElement("strong");

    button.type = "button";
    button.className = "item";
    button.dataset.tone = categoryTone(recipe.category);
    button.setAttribute("aria-label", `Abrir ${recipe.name}, ${recipe.minutes} minutos`);
    visual.className = "itemVisual";
    visual.setAttribute("aria-hidden", "true");
    number.className = "itemNumber";
    mark.className = "itemMark";
    metadata.className = "itemMeta";
    number.textContent = String(index + 1).padStart(2, "0");
    mark.textContent = categoryCoverLabel(recipe.category).replace("\n& ", "\n");
    category.textContent = recipe.category;
    time.textContent = formatDuration(recipe.minutes);
    name.textContent = recipe.name;

    if (recipe.photo && recipe.photo.src) {
      const image = document.createElement("img");
      image.src = recipe.photo.src;
      image.alt = recipe.photo.alt || recipe.name;
      image.loading = "lazy";
      image.addEventListener("error", () => image.remove());
      visual.append(image);
    }

    visual.append(number, mark);
    metadata.append(category, time);
    button.append(visual, metadata, name);
    button.addEventListener("click", () => {
      renderRecipe(index, false);
      scrollToRecipe();
    });
    elements.grid.appendChild(button);
  });
}

function scrollToRecipe() {
  elements.recipeSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => elements.toast.classList.remove("show"), 1700);
}

elements.one.addEventListener("click", () => setPortions(1));
elements.two.addEventListener("click", () => setPortions(2));
elements.pick.addEventListener("click", pickRecipe);
elements.another.addEventListener("click", pickRecipe);
elements.favorite.addEventListener("click", () => {
  if (current === null || favorites.includes(current)) return;

  favorites.push(current);
  save();
  renderFavorites();
  elements.favorite.disabled = true;
  elements.favorite.textContent = "Receta guardada";
  showToast("Receta guardada");
});
elements.recipeImage.addEventListener("error", showVisualPlaceholder);

[elements.recipeTotalIntro, elements.recipeTotalCatalog, elements.recipeTotalFooter].forEach((element) => {
  element.textContent = recipes.length;
});
elements.time.textContent = `${recipes.length} opciones · sin repetir`;
elements.visualNumber.textContent = recipes.length;

setPortions(portions);

if (deck.length) {
  elements.remaining.textContent = deck.length;
} else {
  resetDeck();
}

renderHistory();
renderFavorites();
renderCategoryFilters();
renderRecipeGrid();
