---
name: Moodle para Igualdad de Género
description: Guía visual, clara y accesible para resolver tareas frecuentes de Moodle.
colors:
  ink: "#201A32"
  paper: "#FCFBF7"
  indigo: "#5146D9"
  violet: "#7A4DE8"
  turquoise: "#28B9C5"
  signal-yellow: "#F3D85B"
  coral: "#EB5B63"
  lilac: "#DCCBFF"
  muted-ink: "#6F687E"
  line: "#D8D3DC"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(4rem, 10.5vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.84
    letterSpacing: "-0.025em"
  display-mobile:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.65rem, 19vw, 5.2rem)"
    fontWeight: 800
    lineHeight: 0.84
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 7vw, 5.75rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.02em"
  route-action:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.75rem, 6.5vw, 5.25rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Atkinson Hyperlegible, Arial, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "normal"
  body:
    fontFamily: "Atkinson Hyperlegible, Arial, sans-serif"
    fontSize: "clamp(1rem, 1.4vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-compact:
    fontFamily: "Atkinson Hyperlegible, Arial, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  subheading:
    fontFamily: "Atkinson Hyperlegible, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 2vw, 1.6rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  label:
    fontFamily: "Atkinson Hyperlegible, Arial, sans-serif"
    fontSize: "clamp(0.68rem, 1vw, 0.9rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  sm: "6px"
  poster: "8px"
  md: "14px"
  screen: "16px"
  phone: "22.4px"
  lg: "24px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  2xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
    height: "48px"
  category-chip:
    backgroundColor: "{colors.lilac}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "8px 12px"
  tutorial-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "20px"
  video-poster:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    height: "clamp(180px, 28vw, 320px)"
---

# Design System: Moodle para Igualdad de Género

## Overview

**Creative North Star: “El pizarrón comunitario”**

La guía se comporta como un pizarrón de aula abierto: orienta rápido, destaca la acción importante y deja anotaciones que ayudan a recordar qué debe ocurrir después. La dirección toma de las referencias la energía de una campaña gráfica inclusiva —bloques saturados, figuras humanas, collage y gestos dibujados—, pero la ordena como una herramienta educativa de consulta. El contenido y los controles de Moodle son protagonistas; la expresión visual les da contexto y confianza.

La escena física es un estudiante consultando la guía desde una mesa de estudio, con luz de día y reflejo de pantalla. Por eso el fondo base es claro y mate, el texto usa tinta oscura y los campos de color aparecen como superficies completas que separan momentos de lectura. La paleta, tipografía y radios de este archivo son una semilla provisional derivada de `docs/img`; deben confirmarse contra la identidad institucional antes de desarrollo.

**Key Characteristics:**

- Contraste editorial entre papel claro, tinta oscura y bloques índigo/violeta/cian.
- Titulares compactos y contundentes; texto de instrucciones amplio y legible.
- Anotaciones dibujadas y formas orgánicas como apoyo, nunca como único indicador.
- Composición modular sin carruseles ni interfaces que oculten tutoriales.
- Personas y situaciones diversas representadas con respeto, sin estereotipos.

## Colors

La estrategia es **full palette**: el papel y la tinta sostienen la lectura; índigo, violeta, turquesa, amarillo y coral organizan acciones y momentos, no decoran cada componente.

### Primary

- **Índigo de acción** (`#5146D9`): CTA principal, enlaces destacados y bloques que conducen a tutoriales.
- **Violeta de sección** (`#7A4DE8`): bandas de transición, navegación de categorías y estados seleccionados.

### Secondary

- **Turquesa de apoyo** (`#28B9C5`): acciones secundarias, enlaces de ayuda y contraste en zonas violetas.
- **Amarillo señal** (`#F3D85B`): ruta rápida, avisos de confirmación y llamadas que deben sentirse cálidas; siempre con tinta oscura.

### Tertiary

- **Coral humano** (`#EB5B63`): énfasis puntual, estados de atención y detalles de ilustración; nunca para errores por sí solo.
- **Lila de superficie** (`#DCCBFF`): chips, fondos suaves y agrupaciones de contenido.

### Neutral

- **Papel mate** (`#FCFBF7`): fondo principal y superficies de lectura.
- **Tinta ciruela** (`#201A32`): texto principal, navegación oscura, posters y superficies de alto contraste.
- **Tinta secundaria** (`#6F687E`): metadatos y texto auxiliar; no usar para texto esencial pequeño.
- **Línea suave** (`#D8D3DC`): divisores y bordes de baja prominencia.

### Named Rules

**La regla de una tinta.** Cada bloque de información debe conservar una jerarquía de contraste clara: fondo, tinta y como máximo dos acentos compitiendo en el mismo momento.

**La regla de no depender del color.** Categorías, estados y dispositivo siempre incluyen texto, icono o forma además del color.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow, sans-serif fallback)

**Body Font:** Atkinson Hyperlegible (with Arial, sans-serif fallback)

**Label Font:** Atkinson Hyperlegible, with tracked uppercase only for short metadata.

**Character:** Los titulares condensados dan a la landing la voz gráfica y afirmativa de los carteles de referencia. Atkinson Hyperlegible mantiene la lectura de pasos, advertencias y transcripciones cómoda para estudiantes con distintos niveles de experiencia y pantallas pequeñas. Las fuentes son provisionales hasta validar disponibilidad, licencia y carga web.

### Hierarchy

- **Display** (800, hasta `6rem`, `0.84`): título de apertura y una sola frase de alto impacto por vista; en móvil parte de `3.65rem`.
- **Headline** (800, `clamp(3rem, 7vw, 5.75rem)`, `0.88`): títulos de sección y categorías principales.
- **Route action** (800, `clamp(2.75rem, 6.5vw, 5.25rem)`, `0.88`): verbos de la ruta guiada.
- **Title** (700, `1.3rem`, `1.15`): títulos de tutorial, FAQ y tarjetas.
- **Body** (400, entre `1rem` y `1.125rem`, `1.6`, máximo `65ch`): instrucciones, resúmenes, ayuda y transcripciones.
- **Label** (700, entre `0.68rem` y `0.9rem`, `1.2`, `0.08em`): duración, dispositivo, categoría y estados cortos; no usar para párrafos.

### Named Rules

**La regla de un mensaje.** Un bloque puede tener un titular protagonista; el resto del texto explica el resultado o el siguiente paso, no compite con él.

## Layout

La página usa un contenedor centrado con lectura cómoda y bandas de color a ancho completo. El contenido se organiza en una retícula flexible de 12 columnas en escritorio, con tutoriales en 3 columnas como máximo; en tablet pasa a 2 y en celular a una columna. El primer viewport combina propósito, CTA principal, acceso por dispositivo y una imagen/ilustración humana; no introduce un carrusel.

El ritmo base usa múltiplos de 8 px. Hay más espacio antes de cada título que después de él. Las secciones alternan densidad: hero expresivo, ruta rápida compacta, índice de tutoriales escaneable, detalle de ayuda y cierre institucional. Los anclajes de navegación deben aterrizar en el título y contexto de la sección, no detrás de un encabezado fijo.

Responsive: en pantallas pequeñas la navegación se convierte en un menú nativo o lista expandible; los filtros de categoría se desplazan horizontalmente sin cortar etiquetas; los posters conservan una relación 16:9; el CTA mantiene un objetivo táctil mínimo de 44 × 44 px y puede ocupar el ancho disponible.

## Elevation & Depth

El sistema es plano por defecto y usa capas tonales para organizar la información. Las superficies lila, índigo y turquesa reemplazan a una colección de tarjetas flotantes. Una sombra suave solo aparece cuando un elemento necesita separarse del fondo —por ejemplo, una ficha elevada sobre una banda de color— y nunca para simular un dashboard 3D.

### Shadow Vocabulary

- **Ambient-low** (`0 8px 24px rgba(32, 26, 50, 0.12)`): tarjetas o posters que flotan sobre una banda de color.
- **Focus-strong** (`0 0 0 3px #F3D85B`): foco de teclado visible; no es una sombra decorativa.

### Named Rules

**Plano en reposo.** Si la jerarquía no se entiende sin sombra, el problema es de espaciado, contraste o agrupación, no de elevación.

## Shapes

Las piezas de consulta tienen radios medios (`14px`) y las acciones compactas radios pequeños (`6px`) para conservar una sensación de herramienta, no de juguete. Los chips de filtro son cápsulas (`999px`), mientras que las bandas de color pueden usar recortes orgánicos o esquinas asimétricas como gesto ilustrativo. El recorte nunca debe ocultar texto, controles ni el foco.

Los posters de video y las imágenes llevan el mismo radio que su ficha. Los bordes sirven para separar sobre papel y no para dibujar una cuadrícula alrededor de cada bloque. Las anotaciones manuscritas son trazos SVG o CSS complementarios y no reemplazan etiquetas, estados ni instrucciones.

## Motion

El movimiento funciona como orientación espacial. GSAP y ScrollTrigger conectan la ruta de cuatro acciones, dibujan el trazo conforme avanza el scroll y fijan la comparación entre computadora y celular mientras ambos dispositivos cambian de posición, escala y giro. Los posters solo reciben una rotación breve ligada al scroll; no se aplica una aparición idéntica a cada sección.

- Las escenas animan transformaciones y trazos, no propiedades que recalculen el layout.
- El contenido permanece legible con JavaScript desactivado y conserva contraste completo antes de entrar al viewport.
- En escritorio la escena de dispositivos puede fijarse; en móvil se desplaza dentro del flujo para evitar bloquear la lectura.
- `prefers-reduced-motion: reduce` elimina ScrollTrigger, progreso, entradas y suavizado de scroll sin ocultar información.

## Components

### Buttons

- **Shape:** radio pequeño de `6px`, altura mínima `48px`, etiqueta breve orientada a una acción.
- **Primary:** índigo de acción con texto papel; “Ver videotutoriales” y acciones de navegación principal.
- **Secondary:** amarillo señal con tinta oscura; “Seguir la ruta” o acciones equivalentes que avanzan el recorrido.
- **Hover / Focus:** elevar como máximo `2px` o intensificar el color; el foco usa anillo amarillo de `3px` y nunca se elimina.
- **Disabled:** reducir contraste y saturación sin hacerlo indistinguible; incluir estado textual cuando la acción dependa de un dato pendiente.

### Chips

- **Style:** lila de superficie con tinta; cápsula con texto visible como “Computadora”, “Celular” o el nombre de la categoría.
- **State:** seleccionado usa índigo y texto papel; no seleccionado conserva borde o subrayado además del color.
- **Behavior:** funcionan como filtros o anclas; no deben ocultar opciones importantes tras un carrusel.

### Cards / Containers

- **Corner Style:** `14px` para fichas, `24px` solo para contenedores editoriales grandes.
- **Background:** papel sobre papel con borde suave; lila o bloques saturados para agrupar, no para cada tarjeta.
- **Shadow Strategy:** ambient-low solo sobre fondos saturados; sin sombra en el listado base.
- **Border:** `1px` línea suave cuando el contraste de superficies no sea suficiente.
- **Internal Padding:** `20px` en ficha, `24px` en desktop cuando la densidad de contenido lo permita.

### Video Poster

- Mostrar still real del tutorial cuando exista; mientras tanto, usar una composición de demostración claramente marcada como provisional.
- Mantener botón de reproducción, duración y dispositivo con texto accesible fuera o dentro del poster con contraste suficiente.
- No reproducir automáticamente; el poster debe comunicar el resultado del tutorial incluso sin sonido.

### Navigation

- **Desktop:** marca/nombre a la izquierda, anclas cortas al centro o derecha y un CTA “Ver videotutoriales” persistente.
- **Mobile:** navegación compacta con botón etiquetado; no depender de un icono de hamburguesa sin nombre accesible.
- **States:** enlace activo con subrayado o indicador de forma además del color; foco visible y orden lógico de teclado.

### Quick Path

Una secuencia de cuatro pasos —ingresa, localiza, realiza, comprueba— que orienta a quien llega por primera vez. Es guía estática: no representa progreso personal ni almacena datos del estudiante.

### Tutorial Detail

El detalle reúne video, objetivo, pasos, señal de confirmación, problemas frecuentes, transcripción y tutoriales relacionados. La ficha debe poder leerse y operarse sin abrir un modal; si se usa expansión, debe anunciar estado, conservar foco y ofrecer una URL/ancla estable.

## Do's and Don'ts

### Do:

- **Do** usar `docs/img` como referencia de lenguaje visual y reemplazar sus imágenes por activos autorizados o material propio.
- **Do** mantener el papel mate y la tinta oscura como base para lectura larga.
- **Do** reservar los colores saturados para jerarquía, acciones, bandas y ejemplos destacados.
- **Do** combinar cada señal cromática con texto, forma, icono o posición.
- **Do** mostrar el dispositivo y la duración en cada tutorial.
- **Do** usar ilustraciones humanas y anotaciones con diversidad situada, no como decoración genérica.
- **Do** validar todos los valores de contraste, foco, zoom y reflujo con contenido real.

### Don't:

- **Don't** copiar literalmente los logos, textos, fotos o ilustraciones de las referencias.
- **Don't** convertir la landing en una campaña política, un portafolio o un dashboard de métricas.
- **Don't** usar gradientes, glassmorphism o mockups 3D para tapar la falta de contenido real.
- **Don't** usar un carrusel para esconder tutoriales, ni exigir recordar una secuencia de clics sin mostrar el resultado esperado.
- **Don't** usar mayúsculas condensadas para instrucciones largas o transcripciones.
- **Don't** anunciar progreso guardado, disponibilidad institucional o estados de Moodle que aún no estén verificados.
- **Don't** usar el color coral como único indicador de error o el amarillo como texto sobre fondo claro.
