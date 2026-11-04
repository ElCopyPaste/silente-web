# Corrección tras revisión del sitio publicado

La revisión del usuario señaló que únicamente la portada encajaba bien en móvil y que su composición de escritorio necesitaba corrección.

## Cambios

- Fondo horizontal independiente para escritorio, seleccionado con `picture` desde 1024 px. Se conserva el fondo vertical de móvil. Las órbitas del fondo horizontal quedan completas dentro de la composición.
- Portada de escritorio con título en una línea, texto de mayor tamaño y preguntas de ancho consistente alrededor del símbolo. La portada móvil conserva su distribución.
- Las demás secciones móviles tienen títulos de 28 px, texto de contenido de 16 px y separación ajustada entre bloques.
- El plan reduce espacios y elimina rótulos repetidos de periodicidad: el precio sigue indicando CLP por mes y el texto conserva el cobro mensual recurrente. El botón y todos los beneficios permanecen visibles.
- Preguntas frecuentes y testimonios ajustan alturas y separaciones sin limitar el crecimiento al desplegar respuestas o aumentar el texto.

## Verificación local

- En 360 × 740 y 390 × 844 las cinco secciones principales miden una pantalla. En 320 × 740 el plan crece hasta 827 px y conserva scroll nativo; no se recorta contenido para forzar su encaje.
- Inspección visual de portada en escritorio de 1440 × 900 y 1366 × 768. Fondo horizontal cargado y sin desbordamiento horizontal.
- Inspección visual móvil de explicación, plan completo con botón, preguntas frecuentes y testimonios.
- TypeScript, ESLint, detector de Impeccable y comprobación de espacios del diff.
- Las vistas corresponden a navegador emulado, no a teléfonos físicos.
