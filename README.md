# Semana 16 - Proyecto final para exposicion tecnica y mejora continua

## Bienvenido/a

Esta guia fue creada para acompanarte en la preparacion final de tu proyecto web. Durante semanas anteriores has construido, probado, corregido y documentado partes del proyecto. Ahora vas a preparar una entrega mas completa: una version final que puedas ejecutar, explicar, defender y mejorar.

El objetivo no es solamente que la pagina abra en el navegador. El objetivo es que puedas demostrar que tu proyecto funciona, que sabes como esta construido, que puedes justificar tus decisiones tecnicas y que reconoces como podria evolucionar en una siguiente version.

---

## 1. Que vas a lograr en esta actividad

Al terminar esta actividad deberias poder:

1. Abrir el proyecto en Visual Studio Code.
2. Instalar las librerias necesarias.
3. Ejecutar el frontend y la base de datos local.
4. Probar el formulario, la tabla, el dashboard y el plan de mejora.
5. Corregir errores si aparecen.
6. Tomar capturas de evidencia.
7. Completar la documentacion tecnica.
8. Preparar tu guion de exposicion.
9. Argumentar tus decisiones tecnicas.
10. Proponer mejoras futuras.
11. Entregar el proyecto organizado en Moodle.

---

## 2. Que contiene este proyecto

Este ZIP contiene una version final del proyecto **Feria Rural Digital**. El proyecto simula un sitio web comunitario donde se pueden registrar visitantes interesados en productos, talleres y actividades rurales.

La pagina incluye:

- Una pagina principal con presentacion del proyecto.
- Un formulario validado para registrar visitantes.
- Conexion con una base de datos local simulada usando JSON Server.
- Una tabla para visualizar registros guardados.
- Un dashboard con metricas y grafico.
- Una seccion de modo exposicion.
- Un formulario para proponer mejoras continuas.
- Documentos de apoyo para tu entrega final.
- Carpetas para guardar evidencias.

---

## 3. Por que usamos librerias

En proyectos reales, los desarrolladores no escriben todo desde cero. Tambien utilizan herramientas y librerias que ayudan a trabajar mejor, ahorrar tiempo, organizar el proyecto y mejorar la experiencia del usuario.

En este proyecto usaras:

| Herramienta | Para que sirve |
|---|---|
| Vite | Ejecutar el proyecto web en un servidor local rapido. |
| JSON Server | Simular una base de datos local usando el archivo `db.json`. |
| Bootstrap | Crear una interfaz responsive y visualmente organizada. |
| Bootstrap Icons | Agregar iconos a botones, menus y secciones. |
| SweetAlert2 | Mostrar alertas modernas para mensajes de exito, error y confirmacion. |
| Chart.js | Crear graficos para explicar resultados durante la exposicion. |
| Concurrently | Ejecutar Vite y JSON Server al mismo tiempo con un solo comando. |

---

## 4. Requisitos antes de iniciar

Antes de trabajar, verifica que tengas instalado:

1. **Visual Studio Code**.
2. **Node.js**.
3. Un navegador web, preferiblemente Chrome o Edge.

Para verificar si tienes Node.js instalado, abre una terminal y ejecuta:

```bash
node -v
```

Luego verifica npm:

```bash
npm -v
```

Si ambos comandos muestran una version, puedes continuar.

---

## 5. Como abrir el proyecto

1. Descomprime el archivo ZIP.
2. Abre Visual Studio Code.
3. Selecciona **File > Open Folder** o **Archivo > Abrir carpeta**.
4. Busca la carpeta del proyecto.
5. Abre una terminal dentro de VS Code con:

```bash
Ctrl + `
```

Tambien puedes ir a:

```text
Terminal > New Terminal
```

---

## 6. Como descargar e instalar las librerias

Este proyecto no incluye la carpeta `node_modules` porque es demasiado pesada. Por eso, debes instalar las librerias desde la terminal.

Ejecuta:

```bash
npm install
```

Este comando lee el archivo `package.json` y descarga todas las dependencias necesarias.

Cuando termine, veras una nueva carpeta llamada:

```text
node_modules
```

No debes modificar esa carpeta.

---

## 7. Como ejecutar la web

Despues de instalar las librerias, ejecuta:

```bash
npm run start
```

Este comando inicia dos servicios al mismo tiempo:

| Servicio | Direccion esperada |
|---|---|
| Sitio web con Vite | http://localhost:5173 |
| Base de datos con JSON Server | http://localhost:3001 |

Abre el navegador en:

```text
http://localhost:5173
```

Y revisa la base de datos en:

```text
http://localhost:3001/visitantes
```

Si ambas direcciones funcionan, el proyecto esta correctamente ejecutado.

---

## 8. Como debe funcionar la web

La web debe permitirte realizar estas acciones:

### A. Navegar por las secciones

Debes poder moverte entre:

- Proyecto.
- Registro.
- Dashboard.
- Modo exposicion.
- Mejora continua.

### B. Registrar visitantes

En el formulario debes ingresar:

- Nombre completo.
- Correo electronico.
- Telefono.
- Interes principal.
- Comentario.

Si algun dato esta mal, el sistema debe mostrar mensajes de error. Si todo esta correcto, el visitante debe guardarse en JSON Server.

### C. Ver registros guardados

Despues de guardar un visitante, debe aparecer en la tabla.

Tambien puedes abrir:

```text
http://localhost:3001/visitantes
```

para comprobar que el dato quedo guardado en la base simulada.

### D. Ver dashboard

El dashboard debe mostrar:

- Total de visitantes.
- Total de mejoras propuestas.
- Total de pruebas documentadas.
- Grafico de intereses registrados.

### E. Usar el modo exposicion

La seccion **Modo exposicion** te ayuda a preparar tu presentacion final. Alli encontraras una guia para explicar:

- El objetivo del proyecto.
- La demostracion funcional.
- Las decisiones tecnicas.
- La mejora continua.

### F. Registrar mejoras continuas

En la seccion de mejora continua puedes guardar propuestas de mejora para una siguiente version del proyecto.

---

## 9. Que debes probar

Antes de entregar, realiza estas pruebas:

| Prueba | Que debes verificar |
|---|---|
| Ejecucion | Que `npm run start` funcione. |
| Navegador | Que el proyecto abra en `localhost:5173`. |
| JSON Server | Que la API abra en `localhost:3001`. |
| Formulario vacio | Que muestre errores si faltan datos. |
| Correo invalido | Que rechace correos mal escritos. |
| Registro correcto | Que guarde visitantes en `db.json`. |
| Tabla | Que muestre los visitantes guardados. |
| Eliminar registro | Que pida confirmacion antes de eliminar. |
| Dashboard | Que actualice metricas y grafico. |
| Responsive | Que se vea bien en celular. |
| Consola | Que no tenga errores criticos. |

---

## 10. Evidencias que debes guardar

Guarda capturas dentro de la carpeta `evidencias`.

| Carpeta | Que debes guardar |
|---|---|
| `evidencias/proyecto-funcionando` | Captura del sitio abierto en navegador. |
| `evidencias/consola` | Captura de consola sin errores criticos. |
| `evidencias/json-server` | Captura de la API funcionando. |
| `evidencias/responsive` | Captura en vista celular. |
| `evidencias/pruebas` | Capturas de formulario, validaciones y registros. |
| `evidencias/exposicion` | Capturas o archivos relacionados con tu exposicion. |

Puedes crear o verificar las carpetas ejecutando:

```bash
npm run evidencias
```

---

## 11. Documentos que debes completar

En la carpeta `docs` encontraras documentos que debes completar.

| Archivo | Para que sirve |
|---|---|
| `01-guion-exposicion.md` | Preparar la presentacion del proyecto. |
| `02-decisiones-tecnicas.md` | Justificar herramientas, estructura y soluciones. |
| `03-plan-mejora-continua.md` | Proponer mejoras futuras. |
| `04-checklist-final.md` | Verificar que cumples los requisitos. |
| `05-informe-ajustes-finales.md` | Explicar ajustes y correcciones. |
| `06-guia-evidencias.md` | Saber que capturas debes entregar. |
| `07-preguntas-defensa-proyecto.md` | Prepararte para responder preguntas. |
| `08-rubrica.md` | Conocer como se puede evaluar la actividad. |
| `09-glosario-tecnico.md` | Repasar conceptos importantes. |
| `10-guia-clase-profunda.md` | Leer la clase completa y entender la actividad. |

Tambien debes completar:

```text
README_ENTREGA.md
```

Este archivo resume tu entrega final.

---

## 12. Como argumentar decisiones tecnicas

Argumentar una decision tecnica significa explicar por que elegiste una herramienta, estructura o solucion.

Ejemplo debil:

```text
Use Bootstrap porque si.
```

Ejemplo correcto:

```text
Use Bootstrap porque permite crear una interfaz responsive, mejora la organizacion visual y facilita el uso de componentes como botones, formularios y tarjetas.
```

Ejemplo debil:

```text
Use JSON Server porque tocaba.
```

Ejemplo correcto:

```text
Use JSON Server porque permite simular una base de datos local, guardar registros y practicar operaciones de consulta, creacion y eliminacion sin construir todavia un backend real.
```

---

## 13. Como preparar la exposicion

Tu exposicion debe tener un orden claro:

1. Saludo y nombre del proyecto.
2. Problema o necesidad que resuelve.
3. Objetivo del proyecto.
4. Publico objetivo.
5. Tecnologias utilizadas.
6. Demostracion funcional.
7. Pruebas realizadas.
8. Errores corregidos.
9. Decisiones tecnicas justificadas.
10. Plan de mejora continua.
11. Conclusion y aprendizaje.

No leas todo el codigo. Explica las partes importantes y demuestra que entiendes tu proyecto.

---

## 14. Plan de mejora continua

La mejora continua significa reconocer que un proyecto puede funcionar, pero aun puede evolucionar.

Puedes proponer mejoras como:

- Agregar inicio de sesion.
- Exportar registros a CSV.
- Mejorar accesibilidad.
- Agregar filtros de busqueda.
- Migrar JSON Server a Firebase, Supabase o un backend real.
- Mejorar seguridad de datos.
- Crear roles de usuario.
- Optimizar rendimiento.

No basta con escribir la mejora. Debes explicar por que es importante y como se podria implementar.

---

## 15. Comandos utiles

| Comando | Funcion |
|---|---|
| `npm install` | Instala librerias. |
| `npm run start` | Ejecuta web y JSON Server. |
| `npm run check` | Revisa estructura minima del proyecto. |
| `npm run reset-db` | Restaura `db.json` con datos iniciales. |
| `npm run evidencias` | Crea o verifica carpetas de evidencias. |

---

## 16. Que debes entregar en Moodle

Entrega una carpeta comprimida `.zip` o un enlace al repositorio con:

1. Proyecto completo.
2. `README_ENTREGA.md` completo.
3. Documentos de la carpeta `docs` diligenciados.
4. Capturas en la carpeta `evidencias`.
5. Proyecto funcionando con Vite y JSON Server.
6. Captura de consola sin errores criticos.
7. Captura de la API de JSON Server.
8. Guion de exposicion.
9. Documento de decisiones tecnicas.
10. Plan de mejora continua.

---

## 17. Verificacion final antes de entregar

Ejecuta:

```bash
npm run check
```

Si todo aparece como `OK`, revisa manualmente que las evidencias y documentos esten completos.

Recuerda: este comando no reemplaza tu revision. Solo te ayuda a comprobar que la estructura basica existe.

---

## 18. Mensaje final

Esta actividad representa el cierre de tu proyecto. No se trata solo de codigo: se trata de demostrar que puedes construir, validar, documentar, explicar y mejorar una solucion web. Ese proceso es muy parecido a lo que se espera en proyectos reales de desarrollo de software.
