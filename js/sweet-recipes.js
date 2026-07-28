window.RECIPE_APP_CONFIG = {
  visualPrefix: "DULCE",
  announcementPrefix: "Dulce sorteado",
  servingSingular: "tanda",
  servingPlural: "tandas",
  defaultCover: "algo\ndulce",
  shuffledLabel: "preparaciones",
  categoryOrder: [
    "Tortas y tartas",
    "Budines y muffins",
    "Galletitas y masitas",
    "Masas y piezas de horno",
    "Postres y cremas",
    "Frutas y frescos",
  ],
  storage: {
    portions: "dulces_petrona_portions",
    history: "dulces_petrona_history",
    favorites: "dulces_petrona_favorites",
    deck: "dulces_petrona_deck",
    recipeCount: "dulces_petrona_recipe_count",
  },
};

const recipes = [
  {
    "id": "bizcochuelo-de-yogur-limon-y-vainilla",
    "name": "Bizcochuelo de yogur, limón y vainilla",
    "category": "Tortas y tartas",
    "minutes": 45,
    "ingredients": [
      { "qty": 180, "unit": "g", "name": "de harina común" },
      { "qty": 2, "unit": "u", "name": "de huevos" },
      { "qty": 120, "unit": "g", "name": "de yogur natural" },
      { "qty": 80, "unit": "g", "name": "de azúcar" },
      { "qty": 45, "unit": "ml", "name": "de aceite de girasol" },
      { "qty": 1, "unit": "u", "name": "de limón" },
      { "qty": 1.5, "unit": "cdita", "name": "de polvo de hornear" },
      { "qty": null, "unit": "", "name": "vainilla y una pizca de sal" }
    ],
    "steps": [
      "Frotar la ralladura de limón con el azúcar y batir con los huevos hasta airear.",
      "Emulsionar el yogur y el aceite e incorporarlos al batido.",
      "Tamizar harina, polvo de hornear y sal; integrar con movimientos envolventes.",
      "Hornear en molde de 18 cm a 175 °C hasta que el centro recupere al tacto."
    ],
    "note": "Bizcochuelo chico y húmedo, pensado para 4 a 6 porciones.",
    "prep": "Precalentá el horno a 175 °C, aceitá el molde y tené todos los ingredientes a temperatura ambiente.",
    "tip": "Una vez agregada la harina, mezclá sólo hasta que desaparezcan los rastros secos para conservar el aire."
  },
  {
    "id": "torta-humeda-de-mandarina",
    "name": "Torta húmeda de mandarina",
    "category": "Tortas y tartas",
    "minutes": 50,
    "ingredients": [
      { "qty": 180, "unit": "g", "name": "de harina común" },
      { "qty": 2, "unit": "u", "name": "de huevos" },
      { "qty": 2, "unit": "u", "name": "de mandarinas" },
      { "qty": 100, "unit": "g", "name": "de yogur natural" },
      { "qty": 75, "unit": "g", "name": "de azúcar" },
      { "qty": 45, "unit": "ml", "name": "de aceite de girasol" },
      { "qty": 1.5, "unit": "cdita", "name": "de polvo de hornear" },
      { "qty": null, "unit": "", "name": "una pizca de sal" }
    ],
    "steps": [
      "Rallar una mandarina y exprimir ambas; reservar dos cucharadas de jugo.",
      "Batir huevos y azúcar, sumar yogur, aceite, ralladura y el resto del jugo.",
      "Incorporar harina, polvo de hornear y sal tamizados.",
      "Hornear a 175 °C y, al salir, pincelar con el jugo reservado."
    ],
    "note": "La fruta aporta perfume y humedad sin necesitar una cobertura pesada.",
    "prep": "Precalentá el horno a 175 °C y forrá la base de un molde chico con papel.",
    "tip": "Rallá solamente la parte naranja de la cáscara: la parte blanca vuelve amargo el batido."
  },
  {
    "id": "torta-invertida-de-pera",
    "name": "Torta invertida de pera",
    "category": "Tortas y tartas",
    "minutes": 55,
    "ingredients": [
      { "qty": 2, "unit": "u", "name": "de peras firmes" },
      { "qty": 160, "unit": "g", "name": "de harina común" },
      { "qty": 2, "unit": "u", "name": "de huevos" },
      { "qty": 100, "unit": "g", "name": "de yogur natural" },
      { "qty": 85, "unit": "g", "name": "de azúcar, dividida" },
      { "qty": 40, "unit": "ml", "name": "de aceite de girasol" },
      { "qty": 1.5, "unit": "cdita", "name": "de polvo de hornear" },
      { "qty": null, "unit": "", "name": "canela y una pizca de sal" }
    ],
    "steps": [
      "Hacer un caramelo claro con 30 g de azúcar y cubrir apenas la base del molde.",
      "Cortar las peras en láminas, secarlas y acomodarlas sobre el caramelo.",
      "Batir huevos con el azúcar restante; sumar yogur, aceite y los secos.",
      "Volcar sobre la fruta, hornear a 175 °C y desmoldar todavía tibia."
    ],
    "note": "Versión chica de una torta invertida clásica, con una capa fina de caramelo.",
    "prep": "Precalentá el horno a 175 °C y prepará un molde de 18 cm que cierre bien.",
    "tip": "Secá las peras después de cortarlas para que la superficie caramelice en lugar de hervirse."
  },
  {
    "id": "budin-de-banana-y-cacao",
    "name": "Budín de banana y cacao",
    "category": "Budines y muffins",
    "minutes": 50,
    "ingredients": [
      { "qty": 2, "unit": "u", "name": "de bananas maduras" },
      { "qty": 150, "unit": "g", "name": "de harina común" },
      { "qty": 25, "unit": "g", "name": "de cacao amargo" },
      { "qty": 1, "unit": "u", "name": "de huevo" },
      { "qty": 80, "unit": "g", "name": "de yogur natural" },
      { "qty": 35, "unit": "g", "name": "de azúcar" },
      { "qty": 30, "unit": "ml", "name": "de aceite de girasol" },
      { "qty": 1, "unit": "cda", "name": "de semillas variadas" },
      { "qty": 1.5, "unit": "cdita", "name": "de polvo de hornear" }
    ],
    "steps": [
      "Pisar las bananas dejando algunos trozos pequeños.",
      "Mezclar con huevo, yogur, azúcar y aceite.",
      "Incorporar harina, cacao y polvo de hornear; terminar con las semillas.",
      "Hornear en budinera chica a 175 °C hasta que el centro esté firme."
    ],
    "note": "La banana madura permite usar poca azúcar sin perder una miga tierna.",
    "prep": "Precalentá el horno a 175 °C y forrá una budinera de unos 20 cm.",
    "tip": "Usá bananas con la piel bien manchada: son más dulces y se integran mejor."
  },
  {
    "id": "budin-de-calabaza-citricos-y-semillas",
    "name": "Budín de calabaza, cítricos y semillas",
    "category": "Budines y muffins",
    "minutes": 60,
    "ingredients": [
      { "qty": 180, "unit": "g", "name": "de calabaza asada y hecha puré" },
      { "qty": 180, "unit": "g", "name": "de harina común" },
      { "qty": 2, "unit": "u", "name": "de huevos" },
      { "qty": 70, "unit": "g", "name": "de azúcar" },
      { "qty": 40, "unit": "ml", "name": "de aceite de girasol" },
      { "qty": 1, "unit": "u", "name": "de mandarina o limón" },
      { "qty": 2, "unit": "cda", "name": "de semillas variadas" },
      { "qty": 1.5, "unit": "cdita", "name": "de polvo de hornear" },
      { "qty": null, "unit": "", "name": "canela y una pizca de sal" }
    ],
    "steps": [
      "Secar el puré de calabaza en sartén si conserva agua libre y dejar enfriar.",
      "Batir huevos y azúcar; emulsionar con aceite, puré, ralladura y jugo cítrico.",
      "Agregar harina, polvo de hornear, sal, canela y la mitad de las semillas.",
      "Pasar a una budinera, cubrir con las semillas restantes y hornear a 175 °C."
    ],
    "note": "Inspirado en las masas dulces con zapallo, adaptado a una tanda doméstica.",
    "prep": "Asá la calabaza con anticipación y precalentá el horno a 175 °C.",
    "tip": "Un puré concentrado da sabor y estructura; uno acuoso obliga a sumar harina y endurece la miga."
  },
  {
    "id": "torta-de-chocolate-y-remolacha",
    "name": "Torta de chocolate y remolacha",
    "category": "Tortas y tartas",
    "minutes": 60,
    "ingredients": [
      { "qty": 160, "unit": "g", "name": "de remolacha asada y pelada" },
      { "qty": 150, "unit": "g", "name": "de harina común" },
      { "qty": 30, "unit": "g", "name": "de cacao amargo" },
      { "qty": 2, "unit": "u", "name": "de huevos" },
      { "qty": 80, "unit": "g", "name": "de yogur natural" },
      { "qty": 75, "unit": "g", "name": "de azúcar" },
      { "qty": 35, "unit": "ml", "name": "de aceite de girasol" },
      { "qty": 1.5, "unit": "cdita", "name": "de polvo de hornear" },
      { "qty": null, "unit": "", "name": "vainilla y una pizca de sal" }
    ],
    "steps": [
      "Procesar la remolacha con yogur y aceite hasta lograr un puré fino.",
      "Batir huevos y azúcar, sumar el puré y perfumar con vainilla.",
      "Tamizar harina, cacao, polvo de hornear y sal; integrar sin sobrebatir.",
      "Hornear en molde de 18 cm a 175 °C y enfriar sobre rejilla."
    ],
    "note": "La remolacha aporta humedad y profundidad al cacao sin dominar el sabor.",
    "prep": "Asá la remolacha envuelta hasta que esté tierna y precalentá el horno a 175 °C.",
    "tip": "Preferí remolacha asada: la hervida incorpora demasiada agua a la masa."
  },
  {
    "id": "torta-de-frutillas-con-crema-de-yogur",
    "name": "Torta de frutillas con crema de yogur",
    "category": "Tortas y tartas",
    "minutes": 55,
    "ingredients": [
      { "qty": 160, "unit": "g", "name": "de harina común" },
      { "qty": 2, "unit": "u", "name": "de huevos" },
      { "qty": 80, "unit": "g", "name": "de azúcar" },
      { "qty": 80, "unit": "g", "name": "de yogur natural para la masa" },
      { "qty": 35, "unit": "ml", "name": "de aceite de girasol" },
      { "qty": 200, "unit": "g", "name": "de frutillas" },
      { "qty": 100, "unit": "g", "name": "de yogur natural espeso" },
      { "qty": 60, "unit": "g", "name": "de queso crema" },
      { "qty": 1.5, "unit": "cdita", "name": "de polvo de hornear" }
    ],
    "steps": [
      "Batir huevos y azúcar; sumar el yogur de la masa y el aceite.",
      "Incorporar harina y polvo de hornear, volcar en molde chico y hornear a 175 °C.",
      "Mezclar el yogur espeso con el queso crema y enfriar.",
      "Cubrir la torta fría con la crema y terminar con frutillas cortadas."
    ],
    "note": "Una torta fresca con cobertura liviana, sin rellenos ni baños pesados.",
    "prep": "Lavá y secá bien las frutillas; precalentá el horno a 175 °C.",
    "tip": "Armala cerca del servicio para que la fruta no humedezca el bizcochuelo."
  },
  {
    "id": "budin-marmolado-de-yogur",
    "name": "Budín marmolado de yogur",
    "category": "Budines y muffins",
    "minutes": 50,
    "ingredients": [
      { "qty": 180, "unit": "g", "name": "de harina común" },
      { "qty": 2, "unit": "u", "name": "de huevos" },
      { "qty": 120, "unit": "g", "name": "de yogur natural" },
      { "qty": 80, "unit": "g", "name": "de azúcar" },
      { "qty": 45, "unit": "ml", "name": "de aceite de girasol" },
      { "qty": 18, "unit": "g", "name": "de cacao amargo" },
      { "qty": 1.5, "unit": "cdita", "name": "de polvo de hornear" },
      { "qty": null, "unit": "", "name": "vainilla y una pizca de sal" }
    ],
    "steps": [
      "Batir huevos y azúcar, emulsionar con yogur, aceite y vainilla.",
      "Incorporar harina, polvo de hornear y sal; dividir la masa en dos.",
      "Mezclar el cacao en una mitad y alternar cucharadas de ambas masas en la budinera.",
      "Pasar un palillo una sola vez y hornear a 175 °C."
    ],
    "note": "Un clásico de merienda adaptado a una budinera pequeña.",
    "prep": "Precalentá el horno a 175 °C y forrá una budinera de unos 20 cm.",
    "tip": "No mezcles demasiado el dibujo: dos colores definidos resultan más atractivos que una masa gris."
  },
  {
    "id": "pan-dulce-rapido-de-calabaza-y-mandarina",
    "name": "Pan dulce rápido de calabaza y mandarina",
    "category": "Budines y muffins",
    "minutes": 65,
    "ingredients": [
      { "qty": 220, "unit": "g", "name": "de harina común" },
      { "qty": 140, "unit": "g", "name": "de calabaza asada y hecha puré" },
      { "qty": 1, "unit": "u", "name": "de huevo" },
      { "qty": 80, "unit": "g", "name": "de yogur natural" },
      { "qty": 65, "unit": "g", "name": "de azúcar" },
      { "qty": 35, "unit": "ml", "name": "de aceite de girasol" },
      { "qty": 1, "unit": "u", "name": "de mandarina" },
      { "qty": 60, "unit": "g", "name": "de pasas de uva" },
      { "qty": 2, "unit": "cdita", "name": "de polvo de hornear" },
      { "qty": null, "unit": "", "name": "vainilla y una pizca de sal" }
    ],
    "steps": [
      "Remojar las pasas en el jugo de mandarina durante 15 minutos y escurrir.",
      "Mezclar puré, huevo, yogur, azúcar, aceite, ralladura y vainilla.",
      "Incorporar harina, polvo de hornear y sal; terminar con las pasas enharinadas.",
      "Hornear en molde chico y alto a 170 °C hasta que una brocheta salga seca."
    ],
    "note": "Conserva el espíritu del pan dulce casero en una preparación simple y pequeña.",
    "prep": "Tené el puré de calabaza frío y seco; precalentá el horno a 170 °C.",
    "tip": "Enharinar apenas las pasas ayuda a que queden distribuidas y no terminen en la base."
  },
  {
    "id": "scones-de-yogur-y-limon",
    "name": "Scones de yogur y limón",
    "category": "Masas y piezas de horno",
    "minutes": 30,
    "ingredients": [
      { "qty": 220, "unit": "g", "name": "de harina común" },
      { "qty": 2, "unit": "cdita", "name": "de polvo de hornear" },
      { "qty": 35, "unit": "g", "name": "de manteca fría" },
      { "qty": 110, "unit": "g", "name": "de yogur natural" },
      { "qty": 30, "unit": "g", "name": "de azúcar" },
      { "qty": 1, "unit": "u", "name": "de limón" },
      { "qty": null, "unit": "", "name": "una pizca de sal" }
    ],
    "steps": [
      "Arenar harina, polvo de hornear, azúcar, sal y manteca fría.",
      "Agregar ralladura y yogur; unir sin amasar.",
      "Estirar a 2,5 cm, cortar seis piezas y acomodar en placa fría.",
      "Hornear a 210 °C hasta que crezcan y doren."
    ],
    "note": "Rinde seis scones chicos, suficientes para una merienda compartida.",
    "prep": "Precalentá el horno a 210 °C y enfriá la placa si la cocina está caliente.",
    "tip": "Trabajá poco la masa y mantenela fría: eso define las capas y evita scones duros."
  },
  {
    "id": "alfajorcitos-de-maicena-y-limon",
    "name": "Alfajorcitos de maicena y limón",
    "category": "Galletitas y masitas",
    "minutes": 45,
    "ingredients": [
      { "qty": 120, "unit": "g", "name": "de maicena" },
      { "qty": 70, "unit": "g", "name": "de harina común" },
      { "qty": 55, "unit": "g", "name": "de manteca blanda" },
      { "qty": 45, "unit": "g", "name": "de azúcar" },
      { "qty": 1, "unit": "u", "name": "de huevo chico" },
      { "qty": 0.5, "unit": "u", "name": "de limón" },
      { "qty": 90, "unit": "g", "name": "de dulce de leche" },
      { "qty": 1, "unit": "cdita", "name": "de polvo de hornear" }
    ],
    "steps": [
      "Batir brevemente manteca, azúcar y ralladura; sumar el huevo.",
      "Incorporar maicena, harina y polvo de hornear sin amasar de más.",
      "Enfriar 20 minutos, estirar, cortar discos chicos y hornear a 170 °C.",
      "Enfriar y unir de a dos con una capa fina de dulce de leche."
    ],
    "note": "Tanda breve de seis alfajorcitos, con relleno medido.",
    "prep": "Precalentá el horno a 170 °C y prepará dos papeles para estirar la masa entre ellos.",
    "tip": "Retiralos antes de que doren arriba: la textura debe quedar tierna y apenas seca en la base."
  },
  {
    "id": "masitas-de-avena-banana-y-semillas",
    "name": "Masitas de avena, banana y semillas",
    "category": "Galletitas y masitas",
    "minutes": 30,
    "ingredients": [
      { "qty": 1, "unit": "u", "name": "de banana madura" },
      { "qty": 120, "unit": "g", "name": "de avena arrollada" },
      { "qty": 1, "unit": "u", "name": "de huevo" },
      { "qty": 2, "unit": "cda", "name": "de semillas variadas" },
      { "qty": 1, "unit": "cda", "name": "de yogur natural" },
      { "qty": null, "unit": "", "name": "canela y una pizca de sal" }
    ],
    "steps": [
      "Pisar la banana y mezclar con huevo y yogur.",
      "Agregar avena, semillas, canela y sal; reposar 10 minutos.",
      "Formar ocho montoncitos, aplastarlos y acomodarlos sobre placa.",
      "Hornear a 180 °C hasta que los bordes estén dorados."
    ],
    "note": "Masitas blandas, sin azúcar agregada, para aprovechar bananas muy maduras.",
    "prep": "Precalentá el horno a 180 °C y forrá una placa.",
    "tip": "El reposo permite que la avena absorba humedad y evita que las piezas se desarmen."
  },
  {
    "id": "bizcochitos-dulces-de-semillas-y-mandarina",
    "name": "Bizcochitos dulces de semillas y mandarina",
    "category": "Galletitas y masitas",
    "minutes": 35,
    "ingredients": [
      { "qty": 200, "unit": "g", "name": "de harina común" },
      { "qty": 75, "unit": "g", "name": "de yogur natural" },
      { "qty": 35, "unit": "ml", "name": "de aceite de girasol" },
      { "qty": 35, "unit": "g", "name": "de azúcar" },
      { "qty": 1, "unit": "u", "name": "de mandarina" },
      { "qty": 2, "unit": "cda", "name": "de semillas variadas" },
      { "qty": 1, "unit": "cdita", "name": "de polvo de hornear" },
      { "qty": null, "unit": "", "name": "una pizca de sal" }
    ],
    "steps": [
      "Mezclar yogur, aceite, azúcar, ralladura y dos cucharadas de jugo.",
      "Agregar harina, polvo de hornear, sal y semillas; unir sin sobar.",
      "Estirar a 6 mm, cortar piezas chicas y pincharlas.",
      "Hornear a 185 °C hasta que estén secas y apenas doradas."
    ],
    "note": "Bizcochitos crocantes y poco dulces para acompañar mate o café.",
    "prep": "Precalentá el horno a 185 °C y prepará una placa con papel.",
    "tip": "Un espesor parejo hace que toda la tanda se seque al mismo tiempo."
  },
  {
    "id": "palmeritas-rapidas-de-canela",
    "name": "Palmeritas rápidas de canela",
    "category": "Masas y piezas de horno",
    "minutes": 30,
    "ingredients": [
      { "qty": 1, "unit": "u", "name": "de tapa de tarta hojaldrada" },
      { "qty": 35, "unit": "g", "name": "de azúcar" },
      { "qty": 1, "unit": "cdita", "name": "de canela" },
      { "qty": 1, "unit": "cda", "name": "de agua" }
    ],
    "steps": [
      "Mezclar azúcar y canela; pincelar apenas la masa con agua y espolvorear.",
      "Enrollar ambos extremos hacia el centro y presionar para unir.",
      "Enfriar 15 minutos, cortar rodajas finas y separar en placa.",
      "Hornear a 200 °C, girando a mitad de cocción para dorar parejo."
    ],
    "note": "Una forma práctica de convertir una tapa habitual en una tanda para compartir.",
    "prep": "Precalentá el horno a 200 °C y reservá espacio en la heladera para enfriar el rollo.",
    "tip": "El frío antes del corte mantiene las espirales definidas y evita que la masa se aplaste."
  },
  {
    "id": "empanaditas-dulces-de-pera-y-limon",
    "name": "Empanaditas dulces de pera y limón",
    "category": "Masas y piezas de horno",
    "minutes": 40,
    "ingredients": [
      { "qty": 6, "unit": "u", "name": "de tapas de empanada" },
      { "qty": 2, "unit": "u", "name": "de peras" },
      { "qty": 25, "unit": "g", "name": "de azúcar" },
      { "qty": 0.5, "unit": "u", "name": "de limón" },
      { "qty": 1, "unit": "cdita", "name": "de maicena" },
      { "qty": null, "unit": "", "name": "canela" }
    ],
    "steps": [
      "Cortar las peras en cubos y cocinarlas con azúcar, limón y canela hasta tiernizar.",
      "Ligar el jugo con maicena, cocinar un minuto y enfriar por completo.",
      "Rellenar las tapas sin excederse, cerrar y hacer un pequeño corte de vapor.",
      "Hornear a 200 °C hasta que estén doradas."
    ],
    "note": "Rinde seis empanaditas y aprovecha las mismas tapas del recetario salado.",
    "prep": "Cociná el relleno primero y precalentá el horno a 200 °C cuando ya esté frío.",
    "tip": "Un relleno frío y espeso permite cerrar bien y evita pérdidas durante el horneado."
  },
  {
    "id": "tartaletas-de-frutilla-y-crema-liviana",
    "name": "Tartaletas de frutilla y crema liviana",
    "category": "Masas y piezas de horno",
    "minutes": 45,
    "ingredients": [
      { "qty": 0.5, "unit": "u", "name": "de tapa de tarta" },
      { "qty": 180, "unit": "g", "name": "de frutillas" },
      { "qty": 100, "unit": "g", "name": "de yogur natural espeso" },
      { "qty": 60, "unit": "g", "name": "de queso crema" },
      { "qty": 20, "unit": "g", "name": "de azúcar" },
      { "qty": 0.5, "unit": "u", "name": "de limón" },
      { "qty": null, "unit": "", "name": "vainilla" }
    ],
    "steps": [
      "Cortar cuatro discos de masa, forrar moldes chicos, pinchar y enfriar.",
      "Hornear las bases en blanco a 190 °C hasta que estén secas y doradas.",
      "Mezclar yogur, queso crema, azúcar, ralladura y vainilla.",
      "Rellenar las bases frías y terminar con frutillas secas y cortadas."
    ],
    "note": "Cuatro tartaletas frescas con una crema sencilla, sin crema pastelera pesada.",
    "prep": "Lavá y secá las frutillas, precalentá el horno a 190 °C y enfriá la crema.",
    "tip": "Rellená cerca del servicio para conservar la base crocante."
  },
  {
    "id": "bunuelos-de-banana-al-horno",
    "name": "Buñuelos de banana al horno",
    "category": "Masas y piezas de horno",
    "minutes": 30,
    "ingredients": [
      { "qty": 1, "unit": "u", "name": "de banana madura" },
      { "qty": 1, "unit": "u", "name": "de huevo" },
      { "qty": 100, "unit": "g", "name": "de harina común" },
      { "qty": 50, "unit": "g", "name": "de yogur natural" },
      { "qty": 15, "unit": "g", "name": "de azúcar" },
      { "qty": 1, "unit": "cdita", "name": "de polvo de hornear" },
      { "qty": null, "unit": "", "name": "canela y una pizca de sal" }
    ],
    "steps": [
      "Pisar la banana y mezclar con huevo, yogur y azúcar.",
      "Agregar harina, polvo de hornear, canela y sal.",
      "Distribuir ocho cucharadas sobre una placa aceitada, dejando separación.",
      "Hornear a 210 °C hasta que estén inflados y dorados."
    ],
    "note": "Inspirados en los buñuelos clásicos, pero cocidos al horno.",
    "prep": "Precalentá el horno a 210 °C y aceitá apenas una placa pesada.",
    "tip": "El horno bien caliente fija la superficie antes de que la masa se extienda."
  },
  {
    "id": "medialunitas-de-yogur-y-limon",
    "name": "Medialunitas de yogur y limón",
    "category": "Masas y piezas de horno",
    "minutes": 100,
    "ingredients": [
      { "qty": 250, "unit": "g", "name": "de harina para pan" },
      { "qty": 5, "unit": "g", "name": "de levadura seca" },
      { "qty": 90, "unit": "g", "name": "de yogur natural" },
      { "qty": 1, "unit": "u", "name": "de huevo" },
      { "qty": 35, "unit": "g", "name": "de azúcar" },
      { "qty": 30, "unit": "g", "name": "de manteca blanda" },
      { "qty": 0.5, "unit": "u", "name": "de limón" },
      { "qty": 40, "unit": "ml", "name": "de leche tibia" },
      { "qty": null, "unit": "", "name": "una pizca de sal" }
    ],
    "steps": [
      "Mezclar harina, levadura, azúcar y sal; sumar yogur, leche, huevo y ralladura.",
      "Amasar hasta desarrollar gluten, incorporar la manteca y volver a alisar.",
      "Levar, dividir en ocho triángulos, enrollar y curvar las puntas.",
      "Dejar duplicar el volumen y hornear a 190 °C hasta dorar."
    ],
    "note": "Masitas levadas tiernas, con menos manteca que una medialuna laminada.",
    "prep": "Calculá dos levados y tené el yogur, el huevo y la manteca a temperatura ambiente.",
    "tip": "Guiate por el volumen de la masa y no sólo por el reloj: la temperatura cambia mucho el levado."
  },
  {
    "id": "flan-clasico-en-porcion-pequena",
    "name": "Flan clásico en porción pequeña",
    "category": "Postres y cremas",
    "minutes": 60,
    "ingredients": [
      { "qty": 400, "unit": "ml", "name": "de leche" },
      { "qty": 3, "unit": "u", "name": "de huevos" },
      { "qty": 65, "unit": "g", "name": "de azúcar, dividida" },
      { "qty": 1, "unit": "cdita", "name": "de esencia de vainilla" }
    ],
    "steps": [
      "Hacer un caramelo claro con 25 g de azúcar y cubrir cuatro moldes chicos.",
      "Mezclar sin airear los huevos con el azúcar restante, la leche y la vainilla.",
      "Colar, repartir en los moldes y cubrirlos.",
      "Cocinar a baño María a 160 °C hasta que el centro apenas tiemble."
    ],
    "note": "Rinde cuatro flanes chicos con caramelo medido.",
    "prep": "Precalentá el horno a 160 °C y calentá agua para el baño María.",
    "tip": "El agua no debe hervir con fuerza: una cocción suave deja una textura lisa y sin ojos."
  },
  {
    "id": "flan-citrico-de-mandarina",
    "name": "Flan cítrico de mandarina",
    "category": "Postres y cremas",
    "minutes": 55,
    "ingredients": [
      { "qty": 180, "unit": "ml", "name": "de jugo de mandarina colado" },
      { "qty": 3, "unit": "u", "name": "de huevos" },
      { "qty": 60, "unit": "g", "name": "de azúcar, dividida" },
      { "qty": 60, "unit": "ml", "name": "de leche" },
      { "qty": 0.5, "unit": "u", "name": "de limón" }
    ],
    "steps": [
      "Hacer un caramelo fino con 20 g de azúcar y cubrir cuatro moldes chicos.",
      "Mezclar huevos, azúcar restante, jugo de mandarina, leche y ralladura de limón.",
      "Colar y repartir en los moldes.",
      "Cocinar a baño María a 160 °C hasta que el centro cuaje con un leve temblor."
    ],
    "note": "Adaptación del flan de naranja clásico con una fruta habitual y menos azúcar.",
    "prep": "Exprimí y colá las mandarinas; precalentá el horno a 160 °C.",
    "tip": "No batas el ligue: mezclar sin espuma produce un flan más fino."
  },
  {
    "id": "arroz-con-leche-de-carnaroli",
    "name": "Arroz con leche de carnaroli",
    "category": "Postres y cremas",
    "minutes": 45,
    "ingredients": [
      { "qty": 90, "unit": "g", "name": "de arroz carnaroli" },
      { "qty": 650, "unit": "ml", "name": "de leche" },
      { "qty": 55, "unit": "g", "name": "de azúcar" },
      { "qty": 0.5, "unit": "u", "name": "de limón" },
      { "qty": null, "unit": "", "name": "canela y una pizca de sal" }
    ],
    "steps": [
      "Lavar brevemente el arroz y colocarlo con leche, piel de limón y sal.",
      "Cocinar a fuego bajo, revolviendo con frecuencia, hasta que el grano esté tierno.",
      "Agregar el azúcar y cocinar cinco minutos más.",
      "Retirar la piel, repartir y terminar con canela."
    ],
    "note": "El carnaroli aporta cremosidad sin necesidad de crema ni manteca.",
    "prep": "Usá una cacerola de fondo grueso y cortá una tira de piel de limón sin parte blanca.",
    "tip": "Retiralo todavía algo fluido: el arroz sigue absorbiendo leche mientras se enfría."
  },
  {
    "id": "ambrosia-citrica-liviana",
    "name": "Ambrosía cítrica liviana",
    "category": "Postres y cremas",
    "minutes": 40,
    "ingredients": [
      { "qty": 350, "unit": "ml", "name": "de leche" },
      { "qty": 3, "unit": "u", "name": "de huevos" },
      { "qty": 75, "unit": "g", "name": "de azúcar" },
      { "qty": 1, "unit": "u", "name": "de mandarina" },
      { "qty": 0.5, "unit": "u", "name": "de limón" },
      { "qty": null, "unit": "", "name": "vainilla" }
    ],
    "steps": [
      "Calentar leche, azúcar, ralladura de mandarina y vainilla hasta disolver.",
      "Batir apenas los huevos con el jugo de limón y sumarlos en hilo.",
      "Cocinar a fuego muy bajo sin revolver en exceso hasta formar grumos tiernos.",
      "Enfriar la preparación en su almíbar y servir en pocillos."
    ],
    "note": "Conserva la textura característica de la ambrosía en una tanda pequeña.",
    "prep": "Tené una cacerola amplia y todos los cítricos rallados y exprimidos antes de empezar.",
    "tip": "Mové la cacerola en lugar de batir: así se forman cuajos suaves y no una crema uniforme."
  },
  {
    "id": "budin-de-pan-y-pera",
    "name": "Budín de pan y pera",
    "category": "Postres y cremas",
    "minutes": 65,
    "ingredients": [
      { "qty": 180, "unit": "g", "name": "de pan del día anterior" },
      { "qty": 450, "unit": "ml", "name": "de leche" },
      { "qty": 2, "unit": "u", "name": "de huevos" },
      { "qty": 1, "unit": "u", "name": "de pera" },
      { "qty": 60, "unit": "g", "name": "de azúcar" },
      { "qty": 0.5, "unit": "u", "name": "de limón" },
      { "qty": null, "unit": "", "name": "canela y vainilla" }
    ],
    "steps": [
      "Cubrir el pan trozado con leche tibia y dejar hidratar 15 minutos.",
      "Desarmar con tenedor y mezclar con huevos, azúcar, ralladura y vainilla.",
      "Incorporar la pera en cubos y volcar en un molde chico aceitado.",
      "Hornear a baño María a 170 °C hasta que el centro quede apenas firme."
    ],
    "note": "Postre de aprovechamiento con fruta y sin caramelo obligatorio.",
    "prep": "Precalentá el horno a 170 °C y calentá agua para el baño María.",
    "tip": "No proceses por completo el pan: una textura algo irregular hace el budín más interesante."
  },
  {
    "id": "crema-fria-de-chocolate-y-yogur",
    "name": "Crema fría de chocolate y yogur",
    "category": "Postres y cremas",
    "minutes": 20,
    "ingredients": [
      { "qty": 300, "unit": "ml", "name": "de leche" },
      { "qty": 20, "unit": "g", "name": "de cacao amargo" },
      { "qty": 25, "unit": "g", "name": "de maicena" },
      { "qty": 45, "unit": "g", "name": "de azúcar" },
      { "qty": 120, "unit": "g", "name": "de yogur natural" },
      { "qty": null, "unit": "", "name": "vainilla y una pizca de sal" }
    ],
    "steps": [
      "Disolver cacao, maicena y azúcar con una parte de la leche fría.",
      "Agregar el resto de la leche y cocinar, batiendo, hasta que hierva y espese.",
      "Perfumar con vainilla, cubrir al contacto y enfriar.",
      "Batir la crema fría para alisarla e incorporar el yogur."
    ],
    "note": "Rinde cuatro vasitos cremosos con cacao y una base láctea sencilla.",
    "prep": "Medí todos los ingredientes y dejá espacio en la heladera para enfriar la crema.",
    "tip": "El yogur se incorpora en frío para que conserve frescura y no se corte."
  },
  {
    "id": "isla-flotante-liviana",
    "name": "Isla flotante liviana",
    "category": "Postres y cremas",
    "minutes": 45,
    "ingredients": [
      { "qty": 3, "unit": "u", "name": "de huevos, claras y yemas separadas" },
      { "qty": 450, "unit": "ml", "name": "de leche" },
      { "qty": 70, "unit": "g", "name": "de azúcar, dividida" },
      { "qty": 1, "unit": "cdita", "name": "de maicena" },
      { "qty": null, "unit": "", "name": "vainilla y ralladura de limón" }
    ],
    "steps": [
      "Calentar la leche con vainilla y ralladura sin dejarla hervir.",
      "Batir claras con 30 g de azúcar, formar copos y escalfarlos en la leche.",
      "Ligar yemas, azúcar restante y maicena con la leche aromatizada.",
      "Cocinar a fuego bajo hasta napar y servir fría con los copos de merengue."
    ],
    "note": "Versión de cuatro porciones, con crema ligera y merengue escalfado.",
    "prep": "Separá los huevos con cuidado y prepará una fuente para retirar los merengues cocidos.",
    "tip": "La leche debe temblar, no hervir: el hervor fuerte deforma el merengue y corta la crema."
  },
  {
    "id": "natilla-de-limon-y-vainilla",
    "name": "Natilla de limón y vainilla",
    "category": "Postres y cremas",
    "minutes": 20,
    "ingredients": [
      { "qty": 400, "unit": "ml", "name": "de leche" },
      { "qty": 2, "unit": "u", "name": "de yemas" },
      { "qty": 35, "unit": "g", "name": "de azúcar" },
      { "qty": 18, "unit": "g", "name": "de maicena" },
      { "qty": 0.5, "unit": "u", "name": "de limón" },
      { "qty": null, "unit": "", "name": "vainilla" }
    ],
    "steps": [
      "Infusionar la leche con piel de limón y vainilla durante cinco minutos.",
      "Mezclar yemas, azúcar y maicena; templar con parte de la leche.",
      "Volver todo a la cacerola y cocinar a fuego bajo hasta napar.",
      "Colar, repartir en cuatro pocillos y enfriar cubierta al contacto."
    ],
    "note": "Crema suave y cítrica que también puede acompañar fruta fresca.",
    "prep": "Cortá una tira de piel de limón sin la parte blanca y prepará cuatro recipientes chicos.",
    "tip": "Retirá la crema apenas espese; la cocción residual completa la textura."
  },
  {
    "id": "espuma-de-frutillas-y-yogur",
    "name": "Espuma de frutillas y yogur",
    "category": "Postres y cremas",
    "minutes": 25,
    "ingredients": [
      { "qty": 250, "unit": "g", "name": "de frutillas" },
      { "qty": 180, "unit": "g", "name": "de yogur natural" },
      { "qty": 80, "unit": "ml", "name": "de crema de leche" },
      { "qty": 35, "unit": "g", "name": "de azúcar" },
      { "qty": 5, "unit": "g", "name": "de gelatina sin sabor" },
      { "qty": 0.5, "unit": "u", "name": "de limón" }
    ],
    "steps": [
      "Procesar las frutillas con azúcar y limón; reducir cinco minutos y enfriar.",
      "Hidratar y disolver la gelatina, e integrarla al puré todavía tibio.",
      "Sumar el yogur y, cuando la mezcla esté fría, incorporar la crema semibatida.",
      "Repartir en cuatro copas y enfriar hasta que tome cuerpo."
    ],
    "note": "Postre aireado de fruta, yogur y una cantidad pequeña de crema.",
    "prep": "Reservá algunas frutillas lindas para terminar y enfriá el recipiente de la crema.",
    "tip": "La base de fruta debe estar fría antes de sumar la crema para no perder volumen."
  },
  {
    "id": "peras-al-vino-con-yogur",
    "name": "Peras al vino con yogur",
    "category": "Frutas y frescos",
    "minutes": 40,
    "ingredients": [
      { "qty": 3, "unit": "u", "name": "de peras firmes" },
      { "qty": 250, "unit": "ml", "name": "de vino para cocinar" },
      { "qty": 150, "unit": "ml", "name": "de agua" },
      { "qty": 45, "unit": "g", "name": "de azúcar" },
      { "qty": 0.5, "unit": "u", "name": "de limón" },
      { "qty": 120, "unit": "g", "name": "de yogur natural" },
      { "qty": null, "unit": "", "name": "canela" }
    ],
    "steps": [
      "Pelar las peras, cortarlas por la mitad y retirar el centro.",
      "Cocinarlas a hervor suave con vino, agua, azúcar, limón y canela.",
      "Retirar la fruta apenas esté tierna y reducir el líquido hasta consistencia de salsa.",
      "Servir tibias o frías con yogur y la reducción."
    ],
    "note": "Un postre clásico centrado en la fruta y con una salsa reducida, no pesada.",
    "prep": "Elegí una cacerola donde las peras entren en una sola capa.",
    "tip": "Reducí el líquido sin la fruta para concentrarlo sin sobrecocer las peras."
  },
  {
    "id": "frutillas-con-aceto-y-crema-de-yogur",
    "name": "Frutillas con aceto y crema de yogur",
    "category": "Frutas y frescos",
    "minutes": 15,
    "ingredients": [
      { "qty": 300, "unit": "g", "name": "de frutillas" },
      { "qty": 1, "unit": "cdita", "name": "de aceto balsámico" },
      { "qty": 20, "unit": "g", "name": "de azúcar" },
      { "qty": 150, "unit": "g", "name": "de yogur natural" },
      { "qty": 50, "unit": "g", "name": "de queso crema" },
      { "qty": 0.5, "unit": "u", "name": "de limón" }
    ],
    "steps": [
      "Cortar las frutillas y mezclarlas con aceto, azúcar y unas gotas de limón.",
      "Macerar entre 10 y 15 minutos a temperatura ambiente.",
      "Alisar yogur y queso crema con un poco de ralladura.",
      "Servir la fruta con su jugo sobre la crema."
    ],
    "note": "Postre inmediato que usa el aceto habitual para intensificar la fruta.",
    "prep": "Lavá las frutillas antes de retirar los cabitos y secalas bien.",
    "tip": "Una maceración corta conserva la textura; si se deja horas, la fruta se ablanda demasiado."
  },
  {
    "id": "mandarinas-en-almibar-liviano",
    "name": "Mandarinas en almíbar liviano",
    "category": "Frutas y frescos",
    "minutes": 20,
    "ingredients": [
      { "qty": 5, "unit": "u", "name": "de mandarinas" },
      { "qty": 180, "unit": "ml", "name": "de agua" },
      { "qty": 45, "unit": "g", "name": "de azúcar" },
      { "qty": 0.5, "unit": "u", "name": "de limón" },
      { "qty": null, "unit": "", "name": "canela o vainilla" }
    ],
    "steps": [
      "Pelar las mandarinas y limpiar los gajos sin romperlos.",
      "Hervir agua, azúcar, piel de limón y canela durante cinco minutos.",
      "Retirar los aromas y verter el almíbar tibio sobre los gajos.",
      "Enfriar y reposar al menos una hora antes de servir."
    ],
    "note": "La fruta no se hierve, por lo que conserva forma y frescura.",
    "prep": "Separá los gajos con cuidado y prepará un recipiente con tapa.",
    "tip": "El almíbar debe estar tibio, no hirviendo, para perfumar sin cocinar de más la mandarina."
  },
  {
    "id": "banana-asada-con-cacao-y-semillas",
    "name": "Banana asada con cacao y semillas",
    "category": "Frutas y frescos",
    "minutes": 20,
    "ingredients": [
      { "qty": 3, "unit": "u", "name": "de bananas" },
      { "qty": 2, "unit": "cdita", "name": "de cacao amargo" },
      { "qty": 2, "unit": "cda", "name": "de semillas variadas" },
      { "qty": 120, "unit": "g", "name": "de yogur natural" },
      { "qty": 0.5, "unit": "u", "name": "de mandarina" },
      { "qty": null, "unit": "", "name": "canela" }
    ],
    "steps": [
      "Cortar las bananas a lo largo y acomodarlas con el corte hacia arriba.",
      "Espolvorear cacao y canela; rociar con jugo de mandarina.",
      "Asar a 210 °C hasta que la superficie caramelice.",
      "Terminar con semillas y servir con yogur frío."
    ],
    "note": "Un postre caliente sin azúcar agregada que se prepara en pocos minutos.",
    "prep": "Precalentá el horno a 210 °C y elegí bananas maduras pero todavía firmes.",
    "tip": "Sumá las semillas después del horno para que mantengan su textura y no se quemen."
  },
  {
    "id": "compota-de-pera-y-mandarina",
    "name": "Compota de pera y mandarina",
    "category": "Frutas y frescos",
    "minutes": 25,
    "ingredients": [
      { "qty": 4, "unit": "u", "name": "de peras" },
      { "qty": 2, "unit": "u", "name": "de mandarinas" },
      { "qty": 120, "unit": "ml", "name": "de agua" },
      { "qty": 20, "unit": "g", "name": "de azúcar" },
      { "qty": 0.5, "unit": "u", "name": "de limón" },
      { "qty": null, "unit": "", "name": "canela" }
    ],
    "steps": [
      "Cortar la mitad de las peras en cubos chicos y la otra mitad en gajos.",
      "Cocinar los cubos con agua, azúcar, limón y canela hasta que se desarmen.",
      "Agregar los gajos y el jugo de mandarina; cocinar sólo hasta tiernizar.",
      "Enfriar y sumar gajos de mandarina frescos al servir."
    ],
    "note": "Combina una base cremosa con trozos definidos para evitar una compota plana.",
    "prep": "Pelá y cortá toda la fruta antes de encender el fuego.",
    "tip": "Agregar las peras en dos momentos crea dos texturas con los mismos ingredientes."
  },
  {
    "id": "yogur-helado-de-frutillas",
    "name": "Yogur helado de frutillas",
    "category": "Frutas y frescos",
    "minutes": 15,
    "ingredients": [
      { "qty": 300, "unit": "g", "name": "de frutillas" },
      { "qty": 250, "unit": "g", "name": "de yogur natural" },
      { "qty": 45, "unit": "g", "name": "de azúcar" },
      { "qty": 0.5, "unit": "u", "name": "de limón" },
      { "qty": 1, "unit": "cda", "name": "de semillas de chía" }
    ],
    "steps": [
      "Procesar frutillas, azúcar y jugo de limón hasta obtener un puré.",
      "Mezclar con yogur y chía; reposar diez minutos.",
      "Repartir en moldes o llevar a una fuente baja al congelador.",
      "Si se usa fuente, remover una vez durante el congelado para suavizar la textura."
    ],
    "note": "Rinde cuatro paletas o una fuente pequeña de yogur helado.",
    "prep": "Dejá libre una superficie plana en el congelador y reservá alguna frutilla para servir.",
    "tip": "Una fuente baja congela más rápido y produce cristales más pequeños."
  },
  {
    "id": "granita-de-mandarina-y-limon",
    "name": "Granita de mandarina y limón",
    "category": "Frutas y frescos",
    "minutes": 15,
    "ingredients": [
      { "qty": 400, "unit": "ml", "name": "de jugo de mandarina colado" },
      { "qty": 1, "unit": "u", "name": "de limón" },
      { "qty": 120, "unit": "ml", "name": "de agua" },
      { "qty": 45, "unit": "g", "name": "de azúcar" }
    ],
    "steps": [
      "Hervir agua y azúcar durante dos minutos y dejar entibiar.",
      "Mezclar con jugo de mandarina, jugo de limón y un poco de ralladura.",
      "Volcar en una fuente metálica baja y congelar.",
      "Raspar con tenedor cada 40 minutos hasta formar cristales sueltos."
    ],
    "note": "Postre cítrico y refrescante; el tiempo indicado no incluye el congelado.",
    "prep": "Exprimí y colá los jugos, y dejá una fuente metálica lista en el congelador.",
    "tip": "Una mezcla extendida en poca altura se raspa mejor y forma cristales más finos."
  },
  {
    "id": "clafoutis-liviano-de-pera",
    "name": "Clafoutis liviano de pera",
    "category": "Tortas y tartas",
    "minutes": 45,
    "ingredients": [
      { "qty": 3, "unit": "u", "name": "de peras" },
      { "qty": 2, "unit": "u", "name": "de huevos" },
      { "qty": 180, "unit": "ml", "name": "de leche" },
      { "qty": 60, "unit": "g", "name": "de yogur natural" },
      { "qty": 60, "unit": "g", "name": "de harina común" },
      { "qty": 45, "unit": "g", "name": "de azúcar" },
      { "qty": null, "unit": "", "name": "vainilla, canela y una pizca de sal" }
    ],
    "steps": [
      "Batir huevos, leche, yogur, harina, azúcar, vainilla y sal hasta alisar.",
      "Reposar el ligue 15 minutos mientras se cortan las peras.",
      "Acomodar la fruta en una fuente aceitada y volcar la mezcla.",
      "Hornear a 180 °C hasta que infle y el centro quede apenas cuajado."
    ],
    "note": "Postre horneado con mucha fruta y una masa fina, para servir tibio.",
    "prep": "Precalentá el horno a 180 °C y aceitá una fuente de unos 20 cm.",
    "tip": "El reposo hidrata la harina y deja un ligue más liso, parecido a una crema."
  },
  {
    "id": "panqueques-de-banana-con-frutillas",
    "name": "Panqueques de banana con frutillas",
    "category": "Masas y piezas de horno",
    "minutes": 30,
    "ingredients": [
      { "qty": 1, "unit": "u", "name": "de banana madura" },
      { "qty": 1, "unit": "u", "name": "de huevo" },
      { "qty": 100, "unit": "g", "name": "de harina común" },
      { "qty": 160, "unit": "ml", "name": "de leche" },
      { "qty": 150, "unit": "g", "name": "de frutillas" },
      { "qty": 100, "unit": "g", "name": "de yogur natural" },
      { "qty": 0.5, "unit": "u", "name": "de limón" },
      { "qty": null, "unit": "", "name": "vainilla y una pizca de sal" }
    ],
    "steps": [
      "Pisar la banana y mezclar con huevo, leche, vainilla y sal.",
      "Incorporar la harina y dejar reposar la masa 15 minutos.",
      "Cocinar panqueques chicos en sartén apenas aceitada a fuego medio.",
      "Servir con frutillas, unas gotas de limón y yogur."
    ],
    "note": "La tanda rinde seis panqueques chicos y no necesita azúcar agregada.",
    "prep": "Lavá y secá las frutillas antes de preparar la masa.",
    "tip": "El fuego medio permite dorar la banana sin quemar sus azúcares naturales."
  }
];
