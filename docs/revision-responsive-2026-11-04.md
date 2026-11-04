# Revisión de interfaz — 4 de noviembre de 2026

## Correcciones

- El menú cerrado queda fuera de la navegación por teclado mediante `inert`. Escape lo cierra y devuelve el foco al botón.
- Se elimina una regla global `font: inherit` que prevalecía sobre las utilidades de tipografía de Tailwind en botones y enlaces.
- En móvil y tablet se redistribuyen las seis preguntas para evitar su superposición con el símbolo central. Se reduce la altura del bloque móvil de 560 a 440 px.
- Los selectores del carrusel tienen zonas de interacción de 44 × 44 px. La rotación se pausa durante el foco o la interacción con el puntero.
- Las preferencias de cookies ofrecen interruptores con altura de interacción de 44 px. Escape descarta cambios, el cierre devuelve el foco y el panel impide desplazar el fondo mientras está abierto.

## Verificación

- Navegador Chromium: vistas emuladas de 320, 390, 768 y 1440 px; sin desplazamiento horizontal en los anchos comprobados.
- Inspección visual a 390, 768 y 1440 px.
- Menú: apertura, cierre con Escape y recuperación del foco.
- Cookies: apertura, cambio temporal de una preferencia, cancelación con Escape y recuperación del foco.
- ESLint de `app` y `components`, TypeScript y `git diff --check`.
- Detector de Impeccable en los seis archivos modificados: sin hallazgos.
- La comprobación visual usa un servidor local de desarrollo; no constituye una prueba en teléfonos físicos ni una validación del pago.

## Pendientes observados en la implementación existente

- «Chatear con Silente» apunta a `#como-funciona`; no abre WhatsApp.
- El bloque de video sigue siendo un espacio reservado.
- El formulario de suscripción no tiene una integración de registro/pago implementada en este repositorio: su acción visible es un enlace externo.
- El beneficio «Conversación ilimitada*» y el plan de «25 mensajes al día» requieren una definición consistente antes del lanzamiento.
- Los enlaces sociales apuntan a `#`.

Esta revisión conserva los textos, el precio, los destinos y la identidad visual existentes. No publica cambios en la rama principal.

## Continuación: fondo centrado y revisión final

- Se incorpora `public/fondo-centrado.webp`, generado a partir del fondo existente, con las órbitas doradas centradas en la imagen. El Hero utiliza el nuevo recurso.
- Las seis preguntas rodean el símbolo también en móvil y tablet. Se ajustan espacios, tamaño de texto y altura orbital para conservar legibilidad y acceso al botón principal.
- En la vista móvil emulada de 390 × 844, el centro del símbolo queda en y = 422,8 px; el centro vertical de la pantalla está en y = 422 px. No hay desbordamiento horizontal.
- Se inspeccionan vistas de 320 × 740, 390 × 844, 768 × 1024 y 1440 × 900. Después de la inspección de 320 px se compactan adicionalmente la cabecera y el bloque orbital; ese último ajuste específico no tiene una captura posterior.
- Se comprueban apertura del menú, cierre con Escape y devolución del foco; despliegue de una respuesta de preguntas frecuentes; apertura de cookies y cancelación con Escape.
- La alternancia de palabras conserva una transición breve y respeta la preferencia de movimiento reducido. El carrusel se pausa mientras está fuera de pantalla.
- Detector de Impeccable sobre `app` y `components`: resultado vacío, sin hallazgos. TypeScript, ESLint y `git diff --check`: sin errores.
- La compilación de producción se intentó, pero Next.js no pudo crear un proceso de trabajo: `spawn EPERM`. La verificación visual se realizó con el servidor local de desarrollo. No se acredita una compilación ni una publicación de producción.
- Los pendientes funcionales descritos arriba continúan vigentes: destino de WhatsApp, video definitivo, registro/pago y enlaces sociales.

## Encaje de secciones solicitado posteriormente

El usuario pidió encajar por sección manteniendo la posibilidad de hacer scroll.

- Se aplica `scroll-snap-type: y proximity` al documento únicamente cuando contiene la Home. No se interceptan eventos de rueda ni de teclado.
- Cada sección principal tiene una altura mínima de `100svh`, encaja por su inicio y puede crecer según su contenido. El footer conserva su altura natural y encaja por su borde inferior.
- Se compactan los espacios de la portada según la altura disponible. La explicación y el video se distribuyen en dos columnas en escritorio; la presentación del plan y su detalle, en dos columnas desde tablet.
- Las cinco secciones principales miden exactamente una pantalla en 1440 × 900, 1366 × 768 y 768 × 1024.
- En 1366 × 768, el recorrido de scroll terminó sucesivamente en 768, 1536, 2304 y 3072 px: inicio de explicación, plan, preguntas y testimonios.
- En 390 × 844, la portada, la explicación, las preguntas cerradas y los testimonios caben en una pantalla. El plan conserva su altura de contenido. Se comprobó el avance libre de 40 px dentro del plan con la flecha hacia abajo.
- Los tamaños anteriores son vistas emuladas en Chromium, no pruebas en dispositivos físicos. Una pantalla más baja, el zoom o respuestas desplegadas pueden requerir scroll dentro de la sección.
