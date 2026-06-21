# 01 - Guion de exposicion del proyecto final

Usa esta guia para preparar tu exposicion. No tienes que leerla palabra por palabra, pero si debes comprender cada punto.

## 1. Saludo e introduccion

- Nombre del estudiante o equipo: Santiago Villada
- Nombre del proyecto: Feria Rural Digital
- Duracion estimada de la exposicion: 10-15 minutos

Frase de inicio sugerida:

> Buenos dias. Hoy voy a presentar mi proyecto web final, explicar su objetivo, demostrar su funcionamiento, justificar las decisiones tecnicas tomadas y proponer mejoras para una siguiente version.

## 2. Problema o necesidad

- Que problema o necesidad atiende el proyecto?
  - Los organizadores de ferias comunitarias necesitan una forma facil de registrar los intereses de los visitantes para entender que actividades son mas populares.

- Quienes podrian beneficiarse de esta solucion?
  - Organizadores de ferias rurales, coordinadores de actividades comunitarias y administradores que necesitan analizar datos rapidamente.

- Por que es importante resolver esa necesidad?
  - Porque tener informacion clara sobre los intereses de los visitantes ayuda a mejorar la planeacion de futuras ferias y a optimizar los recursos comunitarios.

## 3. Objetivo del proyecto

> El objetivo de este proyecto es crear un sitio web donde se registren visitantes interesados en productos, talleres y actividades comunitarias, permitiendo analisis de datos mediante graficos para mejorar la toma de decisiones en futuras ferias.

## 4. Tecnologias utilizadas

| Tecnologia | Explicacion breve para la exposicion |
|---|---|
| HTML | Estructura base de la pagina: forma los formularios, tablas y secciones. |
| CSS | Estilos personalizados que mantienen la interfaz coherente y profesional. |
| JavaScript | Logica de la aplicacion: validaciones, conexion con la base de datos y actualizacion de la interfaz. |
| Vite | Herramienta que compila el codigo y lo optimiza para que la pagina cargue rapido. |
| JSON Server | Base de datos local que funciona sin necesidad de un servidor complejo. Almacena visitantes, mejoras y pruebas. |
| Bootstrap | Framework que proporciona estilos profesionales y componentes responsive para que se vea bien en celular. |
| SweetAlert2 | Libreria que crea alertas atractivas en lugar de las alertas aburridas del navegador. |
| Chart.js | Herramienta para crear graficos que visualizan cuales son los intereses mas populares. |

## 5. Demostracion funcional

Durante la demostracion muestra:

1. La pagina principal: Muestra la pagina de inicio con la descripcion del proyecto.
2. El formulario de visitantes: Llena todos los campos correctamente.
3. La validacion de un dato incorrecto: Intenta guardar con un correo invalido para mostrar el error.
4. El registro de un visitante correcto: Guarda un visitante y muestra la alerta de exito.
5. La tabla con datos guardados: Senala como aparecen los registros en la tabla inmediatamente.
6. La API de JSON Server: Abre `localhost:3001/visitantes` para mostrar que los datos realmente estan guardados.
7. El dashboard con metricas y grafico: Explica los numeros de visitantes y mejoras, muestra el grafico de barras.
8. La seccion de mejora continua: Registra una mejora para demostrar esta funcionalidad.

## 6. Pruebas realizadas

| Prueba | Que querias comprobar | Resultado |
|---|---|---|
| Enviar formulario con campos completos | Que los datos se guarden correctamente en JSON Server | Aprobada: el visitante aparece inmediatamente en la tabla y en la API |
| Enviar formulario con correo invalido | Que la validacion rechace datos incorrectos | Aprobada: muestra mensaje de error y no guarda |
| Eliminar un visitante de la tabla | Que la eliminacion funcione con confirmacion | Aprobada: el registro desaparece despues de confirmar |
| Ver datos en JSON Server | Que la base de datos realmente almacene los datos | Aprobada: se ven todos los visitantes en localhost:3001 |
| Ver grafico de intereses | Que el grafico se actualice automaticamente | Aprobada: el grafico muestra el conteo de cada interes |

## 7. Errores corregidos

| Error o ajuste | Como lo corregiste | Evidencia |
|---|---|---|
| Validacion de telefono incompleta | Agregue que el telefono debe tener minimo 10 digitos | El campo rechaza numeros cortos |
| Formulario sin retroalimentacion visual | Use SweetAlert2 para mostrar mensajes claros | Las alertas aparecen despues de cada accion |
| Grafico que no se actualizaba | Agregue logica para destruir el grafico anterior antes de crear uno nuevo | El grafico se actualiza correctamente con nuevos datos |

## 8. Decisiones tecnicas

**Por que use Vite:** Vite es un empaquetador moderno que es mucho mas rapido que Webpack. Durante el desarrollo, el codigo compila en milisegundos, lo que ayuda a ver cambios inmediatamente. Tambien optimiza el codigo para produccion.

**Por que use JSON Server:** Necesitaba una forma rapida de tener una base de datos sin instalar MySQL o PostgreSQL. JSON Server es perfecto para proyectos pequenos porque corre localmente y guarda datos en un archivo JSON simple. Aunque no es para produccion, para esta demostracion es ideal.

**Por que use Bootstrap:** En lugar de escribir CSS desde cero, Bootstrap me proporciona componentes ya estilizados que se ven profesionales. Ademas, es responsive automaticamente, asi que el sitio se adapta a celulares sin esfuerzo extra.

**Por que use SweetAlert2:** Las alertas nativas de JavaScript son feas y poco funcionales. SweetAlert2 permite crear alertas personalizadas, bonitas y con mas opciones (como confirmaciones).

**Por que use Chart.js:** Necesitaba mostrar un grafico que visualice los intereses. Chart.js es facil de usar, ligera y se integra perfecto con JavaScript vanilla.

**Por que separe el JavaScript en archivos:** En lugar de poner todo en un archivo gigante, organice el codigo en: `api.js` (conexion a la API), `validaciones.js` (funciones de validacion), `dashboard.js` (graficos) y `ui.js` (renderizado de elementos). Esto hace el codigo mas facil de entender y mantener.

## 9. Plan de mejora continua

**Mejora 1: Agregar login de usuario (Prioridad Alta)**
- Problema: Cualquiera puede ver y eliminar registros. Se necesita seguridad.
- Implementacion: Usar un panel administrativo con usuario y contrasena.
- Beneficio: Solo administradores pueden acceder a los datos.

**Mejora 2: Exportar datos a CSV (Prioridad Media)**
- Problema: Es dificil analizar los datos en otro lugar o hacer reportes.
- Implementacion: Agregar un boton que descargue los registros en formato Excel o CSV.
- Beneficio: Los organizadores pueden analizar datos en Excel y generar reportes.

**Mejora 3: Filtros de busqueda (Prioridad Media)**
- Problema: Con muchos visitantes, es dificil encontrar uno especifico.
- Implementacion: Agregar campos para filtrar por interes, rango de fechas o nombre.
- Beneficio: Busquedas mas rapidas y analisis mas detallado.

## 10. Cierre

Frase sugerida:

> Este proyecto me permitio comprender que una entrega final no depende solo de que el codigo funcione, sino tambien de probar, documentar, explicar y proponer mejoras. Ahora veo el desarrollo web como un proceso continuo donde siempre hay algo que mejorar.
