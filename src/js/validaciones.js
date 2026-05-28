function limpiarErrores(form) {
  form.querySelectorAll('.is-invalid').forEach((elemento) => elemento.classList.remove('is-invalid'));
  form.querySelectorAll('.invalid-feedback').forEach((elemento) => {
    elemento.textContent = '';
  });
}

function marcarError(campo, mensaje) {
  campo.classList.add('is-invalid');
  const error = document.getElementById(`error-${campo.id}`);
  if (error) error.textContent = mensaje;
}

export function validarVisitante(form) {
  limpiarErrores(form);
  const data = Object.fromEntries(new FormData(form));
  const errores = [];

  if (!data.nombre || data.nombre.trim().length < 3) {
    errores.push(['nombre', 'Escribe un nombre de minimo 3 caracteres.']);
  }

  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.correo || '');
  if (!correoValido) {
    errores.push(['correo', 'Escribe un correo valido.']);
  }

  const telefonoLimpio = (data.telefono || '').replace(/\D/g, '');
  if (telefonoLimpio.length < 10) {
    errores.push(['telefono', 'El telefono debe tener minimo 10 digitos.']);
  }

  if (!data.interes) {
    errores.push(['interes', 'Selecciona un interes principal.']);
  }

  if (!data.comentario || data.comentario.trim().length < 10) {
    errores.push(['comentario', 'El comentario debe tener minimo 10 caracteres.']);
  }

  errores.forEach(([id, mensaje]) => marcarError(document.getElementById(id), mensaje));

  return {
    valido: errores.length === 0,
    datos: {
      id: crypto.randomUUID ? crypto.randomUUID() : `v-${Date.now()}`,
      nombre: data.nombre?.trim(),
      correo: data.correo?.trim(),
      telefono: telefonoLimpio,
      interes: data.interes,
      comentario: data.comentario?.trim(),
      fecha: new Date().toISOString()
    }
  };
}

export function validarMejora(form) {
  limpiarErrores(form);
  const data = Object.fromEntries(new FormData(form));
  const errores = [];

  if (!data.titulo || data.titulo.trim().length < 5) {
    errores.push(['tituloMejora', 'El titulo debe tener minimo 5 caracteres.']);
  }

  if (!data.area) {
    errores.push(['areaMejora', 'Selecciona un area de mejora.']);
  }

  if (!data.descripcion || data.descripcion.trim().length < 20) {
    errores.push(['descripcionMejora', 'Explica la mejora con minimo 20 caracteres.']);
  }

  errores.forEach(([id, mensaje]) => marcarError(document.getElementById(id), mensaje));

  return {
    valido: errores.length === 0,
    datos: {
      id: crypto.randomUUID ? crypto.randomUUID() : `m-${Date.now()}`,
      titulo: data.titulo?.trim(),
      area: data.area,
      prioridad: data.prioridad || 'Media',
      descripcion: data.descripcion?.trim(),
      estado: 'Propuesta'
    }
  };
}
