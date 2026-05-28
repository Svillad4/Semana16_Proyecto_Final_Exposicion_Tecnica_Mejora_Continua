export function renderVisitantes(visitantes, onDelete) {
  const tabla = document.getElementById('tablaVisitantes');

  if (!visitantes.length) {
    tabla.innerHTML = '<tr><td colspan="4" class="text-center py-4 text-muted">Aun no hay registros.</td></tr>';
    return;
  }

  tabla.innerHTML = visitantes.map((visitante) => `
    <tr>
      <td><strong>${visitante.nombre}</strong><br><small class="text-muted">${new Date(visitante.fecha).toLocaleString()}</small></td>
      <td>${visitante.interes}</td>
      <td>${visitante.correo}</td>
      <td>
        <button class="btn btn-sm btn-outline-danger" data-delete="${visitante.id}" aria-label="Eliminar registro de ${visitante.nombre}">
          <i class="bi bi-trash" aria-hidden="true"></i>
        </button>
      </td>
    </tr>
  `).join('');

  tabla.querySelectorAll('[data-delete]').forEach((boton) => {
    boton.addEventListener('click', () => onDelete(boton.dataset.delete));
  });
}

export function renderMejoras(mejoras) {
  const contenedor = document.getElementById('listaMejoras');

  if (!mejoras.length) {
    contenedor.innerHTML = '<p class="text-muted">Todavia no hay mejoras registradas.</p>';
    return;
  }

  contenedor.innerHTML = mejoras.map((mejora) => `
    <div class="col-md-6">
      <article class="card card-mejora h-100 shadow-sm border-0">
        <div class="card-body">
          <span class="badge text-bg-success mb-2">${mejora.prioridad}</span>
          <h4 class="h6 fw-bold">${mejora.titulo}</h4>
          <p class="small text-muted mb-1">Area: ${mejora.area}</p>
          <p class="mb-0">${mejora.descripcion}</p>
        </div>
      </article>
    </div>
  `).join('');
}
