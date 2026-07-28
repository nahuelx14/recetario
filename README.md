# La Libreta de Casa

Recetario web con dos sorteadores independientes: 112 recetas saladas y 82 preparaciones dulces. No necesita instalación, servidor ni base de datos.

## Abrir la aplicación

Abrí `index.html` con doble clic para las cenas o `dulces.html` para el recetario dulce. Los enlaces de cada página permiten pasar de uno al otro. Conservá las carpetas `css` y `js` junto a los dos archivos HTML.

## Organización

- `index.html`: sorteador de cenas y catálogo salado.
- `dulces.html`: sorteador independiente de tortas, masas, postres y frutas.
- `css/styles.css`: diseño responsive y modo oscuro automático.
- `js/recipes.js`: catálogo de 112 recetas saladas, incluidas 24 entradas y picadas.
- `js/sweet-recipes.js`: base del catálogo dulce, adaptada a ingredientes comunes y tandas chicas.
- `js/gross-tortas-y-masitas.js`: tortas, tartas, galletitas y masitas seleccionadas de Osvaldo Gross.
- `js/gross-budines-y-hojaldres.js`: budines, muffins, hojaldres y masas seleccionadas de Osvaldo Gross.
- `js/gross-leudados-y-postres.js`: masas leudadas, postres y cremas seleccionados de Osvaldo Gross.
- `js/app.js`: sorteo sin repeticiones, filtros, cantidades, historial, favoritos y almacenamiento local compartido por ambas interfaces.
- `tests/app.test.js`: comprobación automática de las funciones principales.

## Catálogo dulce

Las 82 preparaciones se reparten en seis grupos: tortas y tartas; budines y muffins; galletitas y masitas; masas y piezas de horno; postres y cremas; y frutas y frescos. La ampliación incorpora 46 recetas terminadas de *Pastelería Base*, de Osvaldo Gross, adaptadas a tandas domésticas. Las fórmulas puramente técnicas —como masa sablée, merengue o crema pastelera— están integradas dentro de las recetas que las necesitan y no aparecen solas en el sorteo.

Los tiempos largos se muestran en horas e incluyen los levados o enfriados principales cuando corresponden. Cada receta de Gross indica su procedencia en pantalla y ofrece reemplazos sencillos para varios ingredientes menos habituales.

## Datos guardados

El navegador guarda en `localStorage` las cantidades, el historial, los favoritos y el mazo pendiente del sorteo. Cenas y dulces usan espacios separados, de modo que una página no modifica la selección de la otra. Los datos pertenecen al navegador y al dispositivo donde se abre el archivo.

Cada receta tiene un identificador estable. Favoritos, historial y mazo se guardan con ese identificador; los datos antiguos basados en posiciones se migran automáticamente al abrir esta versión.

## Fotos opcionales

La interfaz ya reserva una portada para cada receta. Mientras no haya foto muestra una composición tipográfica según la categoría. Para sumar fotos propias más adelante, seguí las indicaciones de `images/recipes/README.md`.
