import type { ExternalResource, FeaturedVideo, NavigationItem, RouteStep } from "../types/landing";

export const navigationItems: readonly NavigationItem[] = [
  { label: "Lo primero", href: "#asignatura" },
  { label: "¿Qué es Moodle?", href: "#que-es-moodle" },
  { label: "La ruta", href: "#ruta" },
  { label: "Preguntas", href: "#ayuda" },
  { label: "Ver tutoriales", href: "#videos", primary: true },
];

export const featuredVideos = [
  {
    id: "01",
    anchor: "video-ingresar",
    label: "Primer acceso",
    title: "Ingresa a la asignatura de Igualdad de Género",
    intro: "En este video encontrarás un tutorial sobre cómo ingresar a la asignatura de Igualdad de Género a través de la plataforma Moodle.",
    context: "Acreditar esta asignatura es un requisito obligatorio y debe cursarse durante el primer año, de acuerdo con la asignación de tu grupo. Puede corresponder al primer o segundo semestre.",
    steps: [
      "Revisa tu tira de materias para identificar en qué semestre te corresponde cursar la asignatura.",
      "Ingresa a asignaturas.cch.unam.mx desde el navegador de tu preferencia, en computadora o dispositivo móvil.",
      "Una vez en la página, haz clic en «Ingresar».",
    ],
    result: "Llegaste al acceso institucional y puedes continuar con el ingreso a Moodle.",
    accent: "turquoise",
    posterLabel: "Acceso a asignaturas.cch.unam.mx",
  },
  {
    id: "02",
    anchor: "video-entregar",
    label: "Actividad",
    title: "Entrega una actividad sin dejarla a medias",
    intro: "Una actividad puede pedirte una respuesta, un archivo o ambas cosas. Este tutorial te acompaña desde la consigna hasta la entrega.",
    context: "Antes de comenzar, lee qué solicita la actividad y prepara el archivo o la respuesta que vas a enviar. Subir un archivo no siempre significa que la actividad ya fue entregada.",
    steps: [
      "Abre la actividad de Igualdad de Género que vas a resolver y revisa sus indicaciones.",
      "Responde o adjunta tu archivo desde el espacio que corresponda.",
      "Revisa la información que aparece antes de confirmar la entrega.",
    ],
    result: "Antes de salir, identifica la señal final que confirma que tu actividad quedó enviada.",
    accent: "yellow",
    posterLabel: "Entrega de actividad",
  },
  {
    id: "03",
    anchor: "video-foro",
    label: "Participación",
    title: "Participa en un foro de la asignatura",
    intro: "Los foros son espacios para leer una consigna, escribir tu participación y continuar la conversación con tu grupo.",
    context: "Lee las participaciones existentes antes de responder. Así puedes distinguir entre crear una nueva participación y responder dentro de un hilo que ya comenzó.",
    steps: [
      "Entra al foro desde el espacio de la asignatura y revisa la consigna completa.",
      "Elige si necesitas iniciar una participación o responder a una publicación existente.",
      "Escribe tu respuesta, revisa si necesitas agregar un archivo o imagen y publícala.",
    ],
    result: "Tu participación aparece dentro del foro y conserva el contexto de la conversación.",
    accent: "coral",
    posterLabel: "Participación en foro",
  },
  {
    id: "04",
    anchor: "video-comprobar",
    label: "Seguimiento",
    title: "Consulta tu avance, calificaciones y retroalimentación",
    intro: "Terminar una actividad también implica saber qué ocurrió después: qué aparece como completado, qué calificación está disponible y qué comentarios dejó el docente.",
    context: "La información puede publicarse en momentos distintos. Una calificación o retroalimentación que todavía no aparece no necesariamente significa que tu actividad esté mal.",
    steps: [
      "Vuelve a la actividad o espacio del curso que quieres revisar.",
      "Busca la información de avance o calificación disponible para esa actividad.",
      "Abre la retroalimentación cuando esté publicada y toma nota de lo que necesitas revisar.",
    ],
    result: "Puedes distinguir lo que ya está registrado de lo que todavía depende de publicación o revisión.",
    accent: "violet",
    posterLabel: "Avance y retroalimentación",
  },
] satisfies readonly FeaturedVideo[];

export const routeSteps = [
  {
    action: "Revisa tu tira de materias",
    result: "Ahí identificas si Igualdad de Género te corresponde en el primer o segundo semestre.",
  },
  {
    action: "Entra a la plataforma",
    result: "Desde una computadora o celular, visita <a href=\"https://asignaturas.cch.unam.mx\" target=\"_blank\" rel=\"noopener noreferrer\">asignaturas.cch.unam.mx</a> y elige «Ingresar».",
    link: "#video-ingresar",
  },
  {
    action: "Ingresa correctamente tus datos",
    result: "Tu usuario es tu número de cuenta sin guiones y la contraseña es tu fecha de nacimiento en formato DDMMAAAA (Ejemplo: 31122005).",
    link: "#video-ingresar",
  },
  {
    action: "Inscribete a la asignatura",
    result: "Necesitas el código de inscripción que te proporcionar´á tu prfesora o profesor. Mira el video de ingreso si necesitas ayuda.",
    link: "#video-ingresar",
  },
  {
    action: "Ya estás dentro de la asignatura",
    result: "Ahora puedes consultar los materiales, entregar actividades y participar en los foros. Da clic en: <span class=\"text-indigo-500 font-bold\">'Acceso a la asignatura 👈'</span>",
    link: "#video-ingresar",
  },
] satisfies readonly RouteStep[];

export const externalResources = [
  { title: "Modificar una entrega", type: "Actividad", category: "actividades", note: "Apoyo para reemplazar un archivo cuando la configuración de la actividad todavía lo permite." },
  { title: "Adjuntar archivos desde el celular", type: "Celular", category: "celular", note: "Referencia complementaria para elegir un archivo desde una pantalla pequeña." },
  { title: "Responder a una participación", type: "Foro", category: "foros", note: "Recurso externo para continuar una conversación sin abrir un hilo nuevo." },
  { title: "Realizar una actividad H5P", type: "Actividad", category: "actividades", note: "Ayuda adicional para reconocer una actividad interactiva y terminarla." },
  { title: "Leer una retroalimentación", type: "Seguimiento", category: "evaluaciones", note: "Material de apoyo para ubicar comentarios asociados a una actividad." },
  { title: "Usar Moodle desde la app", type: "Celular", category: "celular", note: "Referencia externa sobre la aplicación, cuando el equipo defina si se documentará ese flujo." },
] satisfies readonly ExternalResource[];
