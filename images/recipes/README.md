# Fotos de recetas

Esta carpeta queda reservada para fotos propias. Usá nombres simples y estables, preferentemente en formato WebP o JPG.

Para vincular una foto, agregá este campo opcional a la receta correspondiente en el archivo de catálogo donde esté guardada (`js/recipes.js`, `js/sweet-recipes.js` o uno de los archivos `js/gross-*.js`):

```js
"photo": {
  "src": "./images/recipes/nombre-de-la-receta.webp",
  "alt": "Descripción breve y concreta de la preparación terminada"
}
```

La portada tipográfica se reemplazará automáticamente por la foto. Si el archivo falta o no puede cargarse, la portada vuelve a mostrarse.
