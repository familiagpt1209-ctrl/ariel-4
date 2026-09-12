# ARIEL / VOLT — prueba jugable

Esta entrega amplía el proyecto original. Es una versión de prueba, no la certificación final de todos los criterios solicitados.

## Jugar

Extrae el ZIP completo y abre INICIAR.cmd. En este ordenador utiliza Node.js disponible en la instalación local. En otro equipo necesitas Node.js: abre una terminal en la carpeta y ejecuta `node server.mjs`. Después entra en http://127.0.0.1:8765. No abras index.html con doble clic: los modelos necesitan un servidor HTTP.

Flechas o WASD: cambiar de carril, saltar y agacharse. Espacio también salta. Salto seguido de lateral rápido: truco. E: activar VOLT con la batería llena. P o Escape: pausa. En móvil: deslizar y doble toque para VOLT; puedes activar botones en Ajustes. El modo Ahorro reduce sombras y resolución.

## Incluido en esta prueba

Seis distritos, catálogo de 12 tipos de segmento y cuatro variantes, recorrido con semilla, horizonte y curvas suaves, vehículos diferenciados, tráfico lateral, trenes de varios vagones, vías, estaciones y landmarks. Se conservan los tres carriles, los cinco potenciadores, la lluvia, la puntuación, misiones, logros, guardado y modo offline.

Cuerpo y cabeza procedentes de los dos FBX aportados, rig humanoide nuevo, pantorrillas y zapatillas añadidas con autorización. La fusión, la piel y algunas posturas siguen siendo provisionales. El archivo maestro conserva los materiales y texturas originales; los GLB de juego son copias optimizadas con texturas reducidas. No se certifica todavía una unión invisible ni la ausencia de todas las intersecciones.

## Pruebas y límites

La auditoría inicial está en AUDITORIA-INICIAL.md. Los resultados de esta revisión están exclusivamente en verification/current. Los resultados anteriores del proyecto son históricos.

Han pasado las pruebas de lógica, rutas con 20 semillas (12.000 segundos simulados), caché del service worker y compilación estática. En navegador se ha comprobado arranque, controles de PC, guardado, recarga realmente offline, recuperación de WebGL y reintento cuando falta el modelo. Las pruebas táctiles y la sesión larga se están revisando; consulta sus JSON para el resultado efectivo. Una simulación no equivale a diez minutos renderizados.

Esta prueba no certifica 60 FPS en un PC medio ni 30 FPS en teléfonos físicos. Las vistas móviles se prueban mediante emulación de navegador. Quedan por completar eventos complejos, animaciones más naturales y revisión visual de todos los contactos del personaje. No todos los eventos pedidos están implementados.

## Sin conexión

Abre con conexión al servidor una vez y espera «Listo sin conexión». Los modelos y Three.js son locales, sin CDN. Mantén la misma dirección al volver a jugar: localhost y 127.0.0.1 son orígenes distintos.

## Verificación reproducible

`node tests/core.test.mjs`, `node tests/regression.test.mjs`, `node tests/runner.test.mjs`, `node tests/routes.test.mjs`, `node tests/offline.test.mjs`, `node tests/report-regression.test.mjs`, `node tests/city.test.mjs`, `node tests/build.mjs`.

Con Playwright y Chromium instalados, servidor activo: `node tests/browser-current.cjs`, `node tests/visual-current.cjs`, `node tests/endurance-current.cjs`. El último dura como mínimo diez minutos de simulación renderizada. Los escenarios visuales controlados están etiquetados como tales. Las pruebas antiguas pueden contener supuestos del avatar anterior.
