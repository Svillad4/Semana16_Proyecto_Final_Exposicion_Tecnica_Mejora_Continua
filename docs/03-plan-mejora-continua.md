# 03 - Plan de mejora continua

La mejora continua significa reconocer que un proyecto puede funcionar, pero aun puede evolucionar. En esta tabla debes proponer mejoras futuras de forma clara y justificada.

| Mejora propuesta | Problema que resuelve | Prioridad | Como se podria implementar | Beneficio esperado |
|---|---|---|---|---|
| Agregar login de usuario | Actualmente cualquiera puede ver y eliminar registros. No hay seguridad. | Alta | Crear un formulario de login con usuario y contrasena. Guardar sesiones en localStorage. Mostrar/ocultar funciones segun quien este logueado. | Solo administradores podrian acceder a los datos sensibles. El sistema seria seguro para uso real. |
| Exportar datos a CSV o Excel | Los organizadores quieren analizar los datos en Excel para hacer reportes que no puedo mostrar en el navegador. | Media | Agregar un boton que descargue un archivo CSV con todos los visitantes. Usar una libreria como `papaparse` para generar CSV. | Los organizadores tienen datos en el formato que usan para reportes. Pueden compartir informes facilmente. |
| Agregar filtros de busqueda | Con muchos visitantes es dificil encontrar uno especifico o analizar subgrupos. | Media | Crear campos de filtro por: interes (dropdown), rango de fechas (date picker), nombre (input de texto). Filtrar dinamicamente la tabla. | Busquedas mas rapidas. Analisis mas profundo (ej: cuantos quieren talleres en el mes pasado). |
| Mejorar accesibilidad | La pagina actual es funcional pero no es completamente accesible para personas con discapacidades visuales o motrices. | Media | Agregar mas atributos aria- en elementos. Mejorar contraste de colores. Asegurar que todo funcione solo con teclado. | La pagina seria usable por todos. Mejor puntuacion en auditorias de accesibilidad. |
| Migrar base de datos a Firebase o Supabase | JSON Server es una BD local, no es para produccion. Si quisiera desplegar el sitio real necesitaria una BD en la nube. | Baja | Cambiar las llamadas de fetch a la API para que apunten a Firebase. Configurar autenticacion en Firebase. | El sitio podria estar en linea permanentemente. Datos persisten en un servidor profesional. |

## Ideas de mejora que puedes considerar

- Agregar inicio de sesion: Proteger registros administrativos.
- Exportar registros a CSV: Facilita reportes y analisis en Excel.
- Mejorar accesibilidad: Mas usuarios pueden usar el sitio.
- Agregar filtros de busqueda: Encontrar registros especificos facilmente.
- Migrar la base de datos a Firebase o Supabase: Para produccion real.
- Crear roles de usuario: Diferentes permisos (admin, viewer, editor).
- Agregar panel administrativo: Gestionar ferias, actividades, etc.
- Mejorar rendimiento de carga: Optimizar imagenes, lazy loading.
- Agregar pruebas automatizadas: Verificar que todo funciona.
- Mejorar documentacion tecnica: Mas detalle tecnico para otros desarrolladores.

## Reflexion

La mejora continua es importante en el desarrollo de software porque un proyecto nunca esta realmente "terminado". El mundo cambia, los usuarios tienen nuevas necesidades, y la tecnologia evoluciona. Un desarrollador profesional no entrega un proyecto y desaparece; sigue escuchando feedback, identificando problemas, y proponiendo soluciones. Esta mentalidad es lo que diferencia un sitio web que funciona de uno que realmente es excelente. En este proyecto, aunque el registro de visitantes funciona bien hoy, imaginarse como podria mejorar (login, exportar datos, filtros) muestra que estoy pensando como un desarrollador real que considera no solo "que funcione ahora" sino "como esto puede escalar y mejorar en el futuro".
