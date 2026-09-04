# Lineamientos de UX, UI, contenido y accesibilidad

## Propósito

Esta guía convierte los briefs y las referencias de `docs/img` en reglas de diseño aplicables a la landing. El sistema visual completo está en [`DESIGN.md`](../DESIGN.md) y la dirección de superficie, con el análisis de cada referencia, en [`06-direccion-visual-ui-ux.md`](./06-direccion-visual-ui-ux.md).

La propuesta es provisional hasta validar identidad institucional, contenido real de Moodle, permisos de los activos y una prueba con estudiantes. Las referencias visuales inspiran el lenguaje; no se copian logos, textos, fotografías, ilustraciones ni claims.

## Dirección de experiencia

La página debe sentirse como una guía práctica y cercana, no como un manual administrativo ni como un sitio de campaña. El trabajo central es llevar a una persona con una duda concreta hasta el tutorial correcto, ayudarla a completar la acción y permitirle comprobar el resultado.

**Dirección elegida: “El pizarrón comunitario”.** La interfaz combina la claridad de una herramienta de consulta con la energía gráfica de carteles universitarios, notas intervenidas y campañas inclusivas: papel mate, tinta oscura, bloques índigo/violeta/cian/amarillo/coral, titulares contundentes, personas diversas y anotaciones dibujadas con función orientadora.

El modo de la superficie es mixto: **Persuade** en el primer viewport para que el estudiante entienda el valor y comience; **Read/Operate** en tutoriales, filtros, pasos y ayuda para que resuelva una tarea sin fricción.

## Principios de decisión

- **Una duda, un siguiente paso.** Cada bloque debe responder qué se puede hacer y dónde continuar.
- **Resultado antes que jerga.** Explicar qué debería aparecer al terminar, no solamente dónde hacer clic.
- **Color con función.** Los acentos agrupan, priorizan o confirman; nunca sustituyen una etiqueta, estado o instrucción.
- **La misma meta, instrucciones propias.** Computadora y celular comparten objetivos, pero cada uno usa capturas y pasos del flujo real.
- **Accesibilidad desde el inicio.** Video, texto, controles, foco, contraste, zoom y movimiento forman parte de la experiencia base.

## Dirección visual y jerarquía

- Usar papel mate claro y tinta ciruela como base para lectura larga.
- Reservar índigo para la acción principal; violeta para separar secciones; turquesa y amarillo para apoyos; coral para énfasis breve.
- Usar titulares condensados solo para mensajes cortos y títulos; usar una sans legible para pasos, párrafos y transcripciones.
- Incorporar ilustración, collage o trazos manuscritos solo cuando ayuden a señalar una acción, persona o relación.
- Mantener superficies planas o con capas tonales; una sombra suave puede separar una ficha de una banda saturada, pero no debe convertir la landing en un mockup 3D.
- Variar densidad por sección: hero expresivo, ruta rápida compacta, índice escaneable, tutoriales detallados y cierre institucional tranquilo.

## Primer viewport

El primer bloque debe comunicar en segundos qué es la landing, para quién es y cómo empezar:

1. **Navegación compacta:** nombre de la guía, anclas a “Ruta rápida”, “Tutoriales”, “Celular” y “Ayuda”, más un CTA de “Ver videotutoriales”.
2. **Hero en dos zonas:** a la izquierda, el título “Moodle para Igualdad de Género” y una promesa orientada a resultado; debajo, el CTA principal. A la derecha, una ilustración humana o composición de dispositivo que muestre acompañamiento y aprendizaje, no una pantalla abstracta.
3. **Acceso inmediato por contexto:** chips visibles para “Computadora” y “Celular”, con texto e indicador de forma, no solo color.
4. **Prueba de utilidad:** una franja breve con las cuatro acciones prioritarias: ingresar, localizar, realizar y comprobar.

El hero no debe utilizar un carrusel, un video autoplay ni un formulario de registro. La imagen no debe ocupar el espacio que necesita el CTA o la explicación principal.

## Organización visual y navegación

- Mantener una navegación con pocos niveles y anclas a **Ruta rápida**, **Tutoriales**, **Celular** y **Ayuda**.
- Presentar primero las acciones de mayor frecuencia: entrar, localizar, entregar y comprobar.
- Permitir dos recorridos: secuencia guiada para primeras visitas y acceso directo por necesidad.
- Mantener visible el contexto de dispositivo en la navegación, filtros, tarjetas y detalle.
- No esconder tutoriales importantes detrás de carruseles, pestañas sin estado visible o interacciones que dependan de hover.
- Las anclas deben aterrizar en el título y contexto de la sección, no debajo de una navegación fija.
- En celular, el menú debe ser compacto pero estar etiquetado; un icono sin nombre accesible no es suficiente.

## Ruta rápida

La ruta rápida es una guía estática de cuatro pasos:

1. **Ingresa a Moodle.** Resultado: la sesión está iniciada.
2. **Localiza la asignatura.** Resultado: aparece el curso de Igualdad de Género.
3. **Realiza la actividad.** Resultado: la acción o entrega se completó según el tipo de actividad.
4. **Comprueba el resultado.** Resultado: el estado, avance, calificación o retroalimentación se puede identificar.

Cada paso debe enlazar a los tutoriales relacionados y explicar la confirmación esperada. No debe simular progreso personal ni comunicar que el sitio guarda avances.

## Categorías y filtros

Las categorías de navegación se mantienen alineadas con la arquitectura de contenidos:

- **Ingresar a Moodle**
- **Tareas y actividades**
- **Foros**
- **Avance y evaluaciones**
- **Moodle desde tu celular**
- **Ayuda**

Los chips de categoría y dispositivo deben ser botones o enlaces reales, no elementos decorativos. El estado seleccionado se comunica con texto, forma, borde o posición además de color. Si filtran contenido, deben anunciar cuántos resultados quedan o actualizar una región accesible.

## Fichas de videotutoriales

Cada tarjeta debe poder entenderse sin abrirla:

- título en forma de pregunta o acción concreta;
- still/poster con botón de reproducción accesible;
- duración visible;
- distintivo de **Computadora** o **Celular**;
- categoría;
- resumen de una línea que describa el resultado;
- CTA **“Ver tutorial”**.

Al abrir el detalle, el orden recomendado es: video, objetivo, antes de comenzar, pasos resumidos, señal de confirmación, si algo no funciona, transcripción y tutoriales relacionados. El contenido esencial no debe depender de un modal; si se usa expansión, anunciar “Mostrar pasos”/“Ocultar pasos”, conservar el foco y permitir cerrar con Escape.

La tarjeta debe priorizar el procedimiento real sobre el tratamiento gráfico. Si aún no existe un poster definitivo, marcar el recurso como provisional; no usar una referencia visual como si fuera captura de Moodle.

## Redacción

- Titular cada video con un verbo y una acción: **ingresar, localizar, entregar, comprobar, modificar, consultar, participar**.
- Usar voz activa y pasos breves.
- Hablarle al estudiante de forma cercana, sin infantilizar.
- Explicar el resultado esperado después de una acción importante.
- Mantener una instrucción por paso siempre que sea posible.
- Usar “actividad”, “tarea”, “cuestionario”, “H5P” y “foro” de forma precisa; no tratarlos como sinónimos.
- Explicar términos de Moodle solo cuando el estudiante los necesita para avanzar.
- Usar “alumnado”, “estudiantes”, “docente” o construcciones neutras cuando sea natural.
- Evitar estereotipos de género, condescendencia y ejemplos que presenten la diversidad como adorno.
- No escribir en mayúsculas condensadas párrafos, pasos o transcripciones.

## Video y contenido alternativo

- Grabar únicamente con una cuenta de demostración y datos ficticios.
- Verificar versión, tema y configuración reales de Moodle antes de publicar.
- Mostrar el cursor, hacer acercamientos para controles pequeños y evitar movimientos rápidos.
- Repetir en voz y texto la confirmación crítica, por ejemplo: **“Estado de la entrega: Enviado para calificar”**, solo cuando ese estado esté verificado.
- Incluir subtítulos sincronizados, transcripción completa y revisada, descripción del resultado y duración.
- Ofrecer la transcripción en la misma página, con opción de lectura o descarga cuando sea viable.
- No reproducir video o audio automáticamente.
- Cargar posters y video de forma diferida sin bloquear el acceso a títulos, pasos o transcripción.
- No publicar nombres, correos, calificaciones, archivos ni información personal reales.

## Computadora y celular

La sección móvil debe conservar la misma intención, pero no reutilizar pasos de escritorio como si la interfaz fuera idéntica. Antes de grabar, decidir si la experiencia de referencia será navegador móvil, aplicación oficial de Moodle o ambas, y si se cubrirán Android, iOS o los dos.

- **Celular:** una columna, menú compacto, filtros desplazables sin cortar etiquetas, botones de ancho cómodo y ninguna instrucción dependiente de hover.
- **Tablet:** dos columnas para tarjetas cuando el espacio lo permita y bandas de color contenidas.
- **Escritorio:** hero editorial, anclas visibles y hasta tres columnas de tutoriales.
- **Todos los tamaños:** posters en relación 16:9, texto que refluya, orden lógico de lectura y CTA alcanzable.
- **Zoom:** comprobar 200% y 400% sin pérdida de contenido esencial ni desplazamiento horizontal innecesario.
- **Conectividad limitada:** posters ligeros, carga diferida y transcripción disponible sin tener que descargar el video.

## Accesibilidad mínima

Objetivo de validación: WCAG 2.2 AA, sujeto a revisión en la implementación real.

### Percepción

- Contraste mínimo de 4.5:1 para texto normal y 3:1 para texto grande o elementos gráficos esenciales, comprobado con colores reales.
- No colocar cuerpo amarillo, coral o turquesa sobre blanco claro.
- No depender solo de color para categorías, dispositivo, foco, error, selección o éxito.
- Usar texto alternativo para imágenes informativas y `alt=""` para imágenes puramente decorativas.
- Mantener subtítulos, transcripción y controles de video accesibles.

### Operación

- Todo enlace, botón, filtro, expansión y control de video debe funcionar con teclado.
- Mantener orden de foco lógico, indicador visible de al menos `3px` y no ocultarlo con estilos propios.
- Usar objetivos táctiles de al menos `44 × 44px`.
- No reproducir audio automáticamente ni crear movimiento imprescindible para entender una acción.
- Respetar `prefers-reduced-motion`; las anotaciones y transiciones deben tener una versión estática.

### Comprensión

- Usar una jerarquía de encabezados coherente y nombres accesibles que describan la acción.
- Informar duración, dispositivo y formato antes de reproducir o descargar.
- Explicar errores en lenguaje claro, junto con la acción siguiente y el canal correcto si el problema no depende del sitio.
- Indicar cambios de estado en filtros, expansiones y carga sin mover al usuario inesperadamente.

### Robustez

- Usar HTML semántico y nombres accesibles; no reemplazar botones o enlaces por `div` con click.
- Probar lector de pantalla, navegación solo con teclado, zoom, reflujo, modo oscuro del sistema si aplica y conexión lenta.
- Comprobar que la transcripción y el contenido de ayuda se puedan indexar y enlazar directamente.

## Estados y casos límite

- **Carga:** mostrar título, contexto y una reserva estable para el poster; no dejar un espacio vacío sin explicación.
- **Sin contenido:** comunicar qué falta y cuál es la alternativa disponible, sin inventar fechas.
- **Error de video:** mantener pasos y transcripción disponibles; explicar cómo reintentar o acceder a otra versión.
- **Filtro sin resultados:** indicar el criterio seleccionado y ofrecer limpiar el filtro.
- **Enlace externo:** informar que se abrirá Moodle u otro servicio cuando corresponda.
- **Moodle no disponible:** no fingir que el problema es del estudiante; dirigir a la respuesta institucional validada.
- **Contenido cambiante:** mostrar la última fecha de revisión del tutorial cuando el equipo la confirme.
- **Texto largo:** permitir que títulos y etiquetas crezcan, sin cortar con elipsis información necesaria.

## No hacer

- No convertir la landing en un manual largo, un portafolio de ilustración, una campaña política o un dashboard de métricas.
- No copiar literalmente las referencias de `docs/img` ni publicar sus logos, fotos, textos o ilustraciones.
- No sustituir capturas reales de Moodle por mockups decorativos cuando la persona necesita reconocer un control.
- No usar gradientes, glassmorphism o perspectiva 3D como recurso principal.
- No mostrar métricas, progreso guardado, soporte, nombres de curso o estados de entrega no verificados.
- No usar color coral como único error ni amarillo como texto sobre fondo claro.
- No exigir registro, inicio de sesión propio o interacción social para ver un tutorial.

## Criterios de aceptación UX/UI

Antes de pasar a desarrollo final, comprobar que:

- una persona puede encontrar un tutorial específico desde el hero o desde el índice;
- cada tarjeta comunica acción, dispositivo, duración y resultado;
- la ruta rápida no confunde orientación con progreso personal;
- el mismo objetivo tiene pasos propios para computadora y celular;
- video, subtítulos, transcripción y pasos siguen disponibles si falla el reproductor;
- navegación, filtros, expansiones y video funcionan con teclado y foco visible;
- el contenido resiste 200% y 400% de zoom y una pantalla estrecha;
- las imágenes tienen permisos y texto alternativo adecuados;
- toda afirmación sobre Moodle coincide con la configuración real;
- el pie de página incluye solo identidad, soporte, privacidad y fechas ya validados.
