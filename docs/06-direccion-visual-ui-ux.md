# Dirección visual y UI/UX

## Estado del documento

Documento de dirección para la primera versión de la landing. Se redactó a partir de los briefs del proyecto y de las referencias visuales en `docs/img`. La propuesta es una semilla de sistema visual: debe validarse con la identidad institucional, capturas reales de Moodle y una prueba con estudiantes antes de convertirse en código final.

## Lectura de las referencias

| Referencia | Rasgos útiles | Cómo se retoman | Qué no se copia |
| --- | --- | --- | --- |
| `original-454310c50e63e7128f9b6fda3140c2a1.webp` | Ilustración humana, fondo claro, amarillo/violeta/coral, formas orgánicas | Diversidad situada, bloques de color y gestos de acompañamiento | Personajes o ilustración exacta |
| `original-4cc67a923d9a61769aa0ed8aa973aff8.webp` | Split editorial, tipografía pesada, doodles y contraste índigo/rosa | Hero con tesis clara, anotaciones puntuales y contraste por zonas | Logo, copy, ilustración y campaña de referencia |
| `original-933cadcd7f6280d250e196a1335721b1.webp` | Landing larga de campaña, collage fotográfico, botones por acción, secciones saturadas | Jerarquía por acciones, narración vertical y bloques cian/violeta | Mensajes políticos, fotografías, logotipos y claims |
| `original-933cadcd7f6280d250e196a1335721b1 (1).webp` | Duplicado exacto de la referencia anterior | No añade decisiones; conservar solo como evidencia de duplicación | No usar como fuente adicional |
| `original-a0f9f0b2eb1bdc7f8d89dfa3c489280f.webp` | Composición de interfaces enmarcadas, fondo rosa, profundidad y escala | Mostrar el tutorial como objeto de aprendizaje y usar profundidad moderada | Perspectiva 3D, mockups ajenos y dashboard financiero |

## Dirección elegida: El pizarrón comunitario

La experiencia se siente como una guía de aula abierta y contemporánea. Cada bloque responde a una pregunta concreta: “¿qué quiero hacer?”, “¿en qué dispositivo?” y “¿cómo confirmo que quedó listo?”. La energía visual proviene de carteles universitarios, notas intervenidas y campañas gráficas inclusivas; la arquitectura sigue siendo la de una herramienta de consulta rápida.

La interfaz no debe parecer un sitio de activismo político, un portafolio de ilustración ni un dashboard. La referencia se traduce en tono y gramática —contraste, color, collage, anotación—, no en contenido ni en la adopción literal de recursos.

### Sistema visual

- **Base:** papel mate claro y tinta ciruela, con suficiente espacio negativo para que la lectura respire.
- **Acentos:** índigo para la acción principal; violeta para separar secciones; turquesa y amarillo para apoyos; coral para énfasis corto.
- **Tipografía:** display condensado y pesado para titulares; sans accesible para instrucciones y transcripciones.
- **Imagen:** personas diversas, capturas reales de Moodle y stills de tutorial; evitar stock genérico de “estudiantes felices”.
- **Gestos:** círculos, subrayados, flechas y recortes orgánicos solo cuando dirigen la atención hacia una decisión real.
- **Profundidad:** capas tonales y una sombra suave; no convertir la guía en un collage tridimensional permanente.

## First viewport

El primer viewport debe resolver en pocos segundos qué es la página y cómo empezar:

1. **Navegación compacta:** nombre del recurso, anclas a “Ruta rápida”, “Tutoriales”, “Celular” y “Ayuda”, más un CTA de “Ver videotutoriales”.
2. **Hero en dos zonas:** a la izquierda, el título “Moodle para Igualdad de Género” y una promesa orientada a resultado; debajo, el CTA principal. A la derecha, una ilustración humana o composición de dispositivo que muestre acompañamiento y aprendizaje, no una pantalla abstracta.
3. **Acceso inmediato por contexto:** chips visibles para “Computadora” y “Celular”, con texto e indicador de forma, no solo color.
4. **Prueba de utilidad:** una franja breve con las cuatro acciones prioritarias: ingresar, localizar, realizar y comprobar.

El hero no debe utilizar un carrusel, un video autoplay ni un formulario de registro. El foco inicial es llegar a un tutorial.

## Recorrido de la página

### 1. Ruta rápida

Secuencia estática para primeras visitas. Cada paso incluye verbo, resultado esperado y ancla al grupo de tutoriales correspondiente. No comunica avance guardado ni necesita una cuenta.

### 2. Índice por necesidad

Los cuatro grupos del brief se presentan como bloques fácilmente escaneables: acceso, tareas y actividades, foros, avance y evaluaciones. La sección móvil duplica los objetivos con pasos específicos del dispositivo, no una simple etiqueta sobre el contenido de escritorio.

### 3. Fichas de tutorial

Cada ficha debe exponer en el primer vistazo:

- título como pregunta o acción;
- still o poster con botón de reproducción;
- dispositivo;
- duración;
- resultado esperado en una línea;
- CTA “Ver tutorial”.

En el detalle, el video comparte protagonismo con pasos, confirmación final, problema frecuente, transcripción y tutoriales relacionados. La información no depende de abrir un modal.

### 4. Ayuda

Las preguntas frecuentes se agrupan por situación (“no puedo entrar”, “no encuentro la asignatura”, “no sé si se envió”) y distinguen lo que puede resolver el estudiante de lo que requiere al docente o a un canal institucional. No prometer un soporte integrado que está fuera de alcance.

### 5. Cierre

El pie de página contiene identidad institucional autorizada, enlace a Moodle, soporte, accesibilidad, privacidad y fecha de actualización. El cierre debe volver a ofrecer una ruta útil, no terminar en una pared de enlaces.

## Interacciones y estados

- **Filtro por categoría/dispositivo:** chips con `aria-pressed`, estado visible por texto/forma y URL o ancla estable cuando sea posible.
- **Video:** poster antes de reproducir; controles nativos accesibles; subtítulos y transcripción disponibles; no autoplay.
- **Expansión:** si una ficha se expande, el control anuncia “Mostrar pasos” / “Ocultar pasos”, conserva el foco y permite cerrar con Escape.
- **Enlaces:** hover discreto; foco de teclado con anillo amarillo; estado activo con subrayado y/o marcador de forma.
- **Error:** explicar qué ocurrió y qué puede hacer el estudiante; coral no es suficiente como señal.
- **Contenido pendiente:** usar etiquetas como “Disponible próximamente” solo si el equipo confirma el estado; no inventar fechas.
- **Movimiento:** las anotaciones pueden entrar una vez al cargar o al aparecer, pero el contenido debe estar visible y respetar `prefers-reduced-motion`.

## Responsive y contexto de uso

- **Celular:** una columna, navegación compacta, chips desplazables sin corte, botones de ancho suficiente y textos que no dependan de hover.
- **Tablet:** dos columnas para fichas y bandas de color más contenidas para evitar que el contraste domine la lectura.
- **Escritorio:** retícula de hasta tres fichas, hero con composición editorial y anclas visibles.
- **Zoom:** a 200% la información debe refluir sin desplazamiento horizontal; a 400% el contenido esencial sigue disponible en una sola columna.
- **Conectividad limitada:** poster ligero, carga diferida de video, transcripción accesible sin descargar el video y ausencia de efectos costosos.
- **Pantalla pequeña o brillante:** tinta oscura sobre papel para texto largo; no colocar cuerpo amarillo, coral o turquesa sobre blanco.

## Métricas de validación UX

Validar con estudiantes del CCH, idealmente con distintos niveles de experiencia digital:

- encontrar un tutorial específico sin ayuda externa;
- identificar si corresponde a computadora o celular;
- reconocer el resultado esperado de una entrega;
- localizar subtítulos y transcripción;
- completar la ruta sin perder la ubicación en la página;
- operar navegación, filtros y video solo con teclado;
- entender a quién acudir cuando el problema no depende de la landing.

## Límites y pendientes críticos

- Confirmar identidad institucional, permisos de activos e idioma de nombres oficiales.
- Definir navegador móvil, app de Moodle o ambos antes de grabar tutoriales.
- Reemplazar referencias por capturas reales o ilustraciones con licencia/autorización.
- Validar fuentes, carga web, contraste y tamaño de texto con la implementación real.
- No publicar estados, URLs, nombres de curso, configuraciones ni canales de soporte hasta verificarlos.

## Relación con otros documentos

- Sistema global: [`DESIGN.md`](../DESIGN.md).
- Producto y restricciones: [`PRODUCT.md`](../PRODUCT.md).
- Brief y alcance: [`01-brief-del-sitio.md`](./01-brief-del-sitio.md).
- Arquitectura: [`02-arquitectura-de-contenidos.md`](./02-arquitectura-de-contenidos.md).
- Fichas de video: [`03-fichas-de-videotutoriales.md`](./03-fichas-de-videotutoriales.md).
- Lineamientos operativos: [`04-lineamientos-ux-contenido-accesibilidad.md`](./04-lineamientos-ux-contenido-accesibilidad.md).
