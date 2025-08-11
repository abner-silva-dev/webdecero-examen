# Preguntas y Respuestas

---

## Explica con tus palabras que es una API

Una API por sus siglas es Aplication Programing Interface, es la forma en la que el back-end se comunica con el front-end, mediante lo que se conoce como endpoints que vendrían a ser los recursos o los datos entregados en formato JSON o no necesariamente en ese formato sino que se pueden enviar otros tipos de formatos o otras funcionalidades, como por ejemplo, html, formData, archivos, etc.

---

## En caso de haber utilizado un framework de estilos, justifica su uso y porque elegiste ese.

User la biblioteca Styled-components para los estilos ya que me resuta un forma robosta de crear estilos en componente dado dado a su facilidad de manejar el estado de estos, al igual se me hace limpio esta forma porque no se puede distingir facil la logica del componente y la visualizacion del jsx, tambien tienes una gran accesibildadad a las props, tambien te ayuda a evitar problemas con los nombres de las clases y los estilos son mas personalizables.

---

## ¿Que patrones de diseno conoces?, cuales haz aplicado, explica porque lo utilizaste y como te ayudo a resolver un problema o tuvo una ventaja sobre otros.

Primero, use un patrón conocido como Feature-based folder structure, que te ayuda a organizar tus carpetas agrupando todo lo relacionado a una funcionalidad o característica en un solo lugar. Esto facilita el mantenimiento, la escalabilidad y la colaboración en proyectos grandes.

También usé el patrón Reusable Components, que me ayudó a no estar repitiendo los mismos bloques de código o diseños en diferentes partes de la aplicación. Gracias a esto, pude crear componentes genéricos y configurables que se pueden usar en múltiples lugares simplemente pasando diferentes props, lo que mejora la mantenibilidad y reduce errores

---

## Biliotecas que use

Usé React Hook Form porque te ayuda a validar tus formularios rápido y no tienes que manejar manualmente los controladores de los inputs, ya que él se encarga de hacerlo por ti.

Al igual usé React Axios, ya que te permite manejar de una mejor forma los errores en las peticiones HTTP, hacer interceptores para controlar tokens o headers, y simplifica la comunicación con APIs de manera eficiente.

Tambien use React router para el redireccionamiento y las rutas de la pagina.

Y zustand para el manejo del estado global, lo use porque se me hace muy rapido de configurar sin tanto codigo boilerplate y es muy rapido

---

## ¿Haz utilizado Sockets?. Si es asi, explica el porque lo utilizaste y sus ventajas.

Sí, he utilizado Sockets. Los usé porque necesitaba manejar datos en tiempo real para una aplicación de chat que desarrollé. Gracias a los sockets, pude establecer una comunicación bidireccional entre el cliente y el servidor, lo que permitió que los mensajes se enviaran y recibieran instantáneamente sin necesidad de recargar la página.
