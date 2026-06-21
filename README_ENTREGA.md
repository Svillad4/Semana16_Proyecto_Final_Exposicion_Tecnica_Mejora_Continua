# README de entrega final

Completa este archivo antes de subir tu proyecto a Moodle.

## 1. Nombre del proyecto

**Feria Rural Digital**

## 2. Descripcion general

La Feria Rural Digital es una página web que permite registrar visitantes interesados en productos, talleres y actividades comunitarias. El proyecto simula una solución real para recopilar datos de visitantes, almacenarlos en una base de datos local y visualizar los resultados mediante gráficos. Es una herramienta útil para organizadores de ferias que quieren saber qué tipo de actividades interesan más a los visitantes.

## 3. Objetivo del proyecto

El objetivo es crear un sitio web funcional que demuestre cómo registrar datos de usuarios, guardarlos en una base de datos, validar información y presentar análisis visuales. Además, el proyecto es una oportunidad para documentar decisiones técnicas, probar la aplicación completamente y proponer mejoras futuras.

## 4. Tecnologias utilizadas

| Tecnologia | Para que se uso en el proyecto |
|---|---|
| HTML | Estructura de la página: formularios, tabla, dashboard y secciones. |
| CSS | Estilos personalizados y variables de color para mantener coherencia visual. |
| JavaScript | Lógica para validar formularios, conectar con la API y actualizar la interfaz. |
| Vite | Empaquetador moderno que acelera el desarrollo y compila el código para producción. |
| JSON Server | Base de datos local simulada que corre en localhost:3001 y almacena visitantes, mejoras y pruebas. |
| Bootstrap | Framework CSS que proporciona componentes responsive y una navegación profesional. |
| SweetAlert2 | Librería para mostrar alertas personalizadas y atractivas en lugar de alertas del navegador. |
| Chart.js | Herramienta para crear gráficos interactivos que visualizan el conteo de intereses. |

## 5. Instrucciones de instalacion

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

Este comando lee el archivo `package.json` e instala todas las dependencias necesarias en la carpeta `node_modules`.

## 6. Instrucciones de ejecucion

Para ejecutar el proyecto con el servidor de desarrollo y la base de datos:

```bash
npm run start
```

Esto abre dos servidores simultáneamente:
- Frontend en: `http://localhost:5173`
- API en: `http://localhost:3001`

También puedes usar:
- `npm run dev` para solo el frontend.
- `npm run db` para solo la base de datos.

## 7. Funcionalidades principales

1. **Formulario de registro de visitantes**: Permite ingresar nombre, correo, teléfono, interés principal y comentario. Los datos se validan antes de guardarse.

2. **Tabla de visitantes**: Muestra todos los registros guardados con información completa y permite eliminar registros individuales con confirmación.

3. **Dashboard con gráficos**: Visualiza el total de visitantes, mejoras propuestas y pruebas documentadas. Incluye un gráfico de barras que muestra cuáles son los intereses más populares entre los visitantes.

4. **Formulario de mejora continua**: Permite proponer mejoras futuras indicando título, área (Seguridad, Usabilidad, Accesibilidad, Rendimiento, Funcionalidad), prioridad y descripción.

1. 
2. 
3. 

## 8. Pruebas realizadas

| Prueba | Resultado | Evidencia |
|---|---|---|
| | | |
| | | |
| | | |

## 9. Errores corregidos

| Error encontrado | Archivo modificado | Correccion aplicada |
|---|---|---|
| | | |
| | | |

## 10. Decisiones tecnicas importantes

Explica tres decisiones tecnicas y por que fueron importantes.

1. 
2. 
3. 

## 11. Mejora continua

Escribe tres mejoras futuras para el proyecto.

1. 
2. 
3. 

## 12. Conclusiones de aprendizaje

Explica que aprendiste al preparar este proyecto para exposicion final.
