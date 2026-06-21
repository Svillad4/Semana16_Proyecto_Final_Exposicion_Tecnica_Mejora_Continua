# 02 - Decisiones tecnicas del proyecto

Argumentar una decision tecnica significa explicar por que elegiste una herramienta, estructura o solucion. No escribas solo que usaste algo; explica por que fue util.

## Tabla de decisiones

| Decision tecnica | Por que la tome | Beneficio para el proyecto | Evidencia o archivo relacionado |
|---|---|---|---|
| Usar Vite | Es mucho mas rapido que Webpack en desarrollo. Compila en milisegundos. | El codigo se actualiza casi instantaneamente mientras desarrollo, ahorro tiempo en esperas innecesarias. | `package.json` tiene los scripts `npm run dev` |
| Usar JSON Server | No necesito instalar ni configurar MySQL o PostgreSQL. Es una base de datos local simple. | Puedo probar rapidamente sin complicaciones de bases de datos reales. Perfecto para un proyecto de aprendizaje. | `db.json` contiene todos los datos, `package.json` script `npm run db` |
| Usar Bootstrap | Evito escribir CSS desde cero. Los componentes ya estan estilizados y son responsive. | Gano tiempo en diseño y el sitio se adapta automaticamente a celular. Veo profesional sin esfuerzo extra. | Todo el `index.html` usa clases de Bootstrap |
| Usar Bootstrap Icons | Proporciona iconos hermosos y coherentes sin necesidad de crear SVGs. | Los iconos mejoran la interfaz visual y hacen el sitio mas amigable. Uso iconos para acciones (eliminar, guardar). | Iconos en formularios, botones y navegacion |
| Usar SweetAlert2 | Las alertas del navegador son feas y poco funcionales. SweetAlert2 es mas bonita. | Los usuarios ven alertas modernas y personalizadas. Mejora la experiencia del usuario. | Aparece cuando guardo visitantes, cuando hay errores, etc. |
| Usar Chart.js | Es una libreria ligera y facil de usar para crear graficos interactivos. | Puedo visualizar los datos de forma clara. Los usuarios entienden mejor los intereses populares. | `dashboard.js` renderiza el grafico de barras con los intereses |
| Separar archivos JavaScript | Un archivo gigante es dificil de entender y mantener. Archivo separados = codigo organizado. | Puedo encontrar funciones rapidamente. Es mas facil colaborar o hacer cambios sin confundir el codigo. | `app.js`, `api.js`, `validaciones.js`, `dashboard.js`, `ui.js` |
| Crear validaciones en formulario | Evito guardar datos incorrectos o incompletos en la base de datos. | La base de datos solo contiene datos validos. Los usuarios ven mensajes claros de que corregir. | `validaciones.js` contiene todas las reglas de validacion |
| Usar variables CSS | En lugar de hardcodear colores, uso variables reutilizables. | Si cambio el color principal, se actualiza en todo el sitio automaticamente. | `styles.css` define `--verde-profundo`, `--verde-vivo`, etc. |
| Usar async/await en API | Hace el codigo mas legible que callbacks o promesas. | Es mas facil entender que ocurre en orden: se carga, luego se procesa. | `app.js` usa `async/await` en todas las funciones de la API |

## Preguntas de apoyo

1. Que problema resolvio esta decision?
   - Vite: Resolvio el problema de esperas largas en compilacion. JSON Server: Resolvio la necesidad de una BD rapida. Bootstrap: Resolvio la necesidad de CSS responsive sin escribir mucho.

2. Como mejoro la experiencia del usuario?
   - SweetAlert2: Los usuarios ven alertas bonitas. Chart.js: Los datos son visuales y faciles de entender. Bootstrap: El sitio se ve profesional.

3. Como facilito la organizacion del codigo?
   - Archivos separados: Puedo encontrar rapidamente donde esta la logica de validacion, la API, etc. Variables CSS: los colores estan en un solo lugar.

4. Como ayudo a probar o presentar el proyecto?
   - JSON Server: Puedo ver directamente en localhost:3001 que los datos se guardaron. Dashboard: Puedo mostrar graficos bonitos en la presentacion.

5. Que pasaria si no hubieras tomado esa decision?
   - Sin Vite: El desarrollo seria lento. Sin Bootstrap: Escribiria mucho CSS. Sin SweetAlert2: Las alertas serian feas. Sin validaciones: Datos basura en la BD.
