import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Swal from 'sweetalert2';
import '../css/styles.css';

import { api } from './api.js';
import { validarVisitante, validarMejora } from './validaciones.js';
import { actualizarMetricas, renderGraficoIntereses } from './dashboard.js';
import { renderVisitantes, renderMejoras } from './ui.js';

const estado = {
  visitantes: [],
  mejoras: [],
  pruebas: []
};

async function cargarDatos() {
  try {
    const [visitantes, mejoras, pruebas] = await Promise.all([
      api.getVisitantes(),
      api.getMejoras(),
      api.getPruebas()
    ]);

    estado.visitantes = visitantes;
    estado.mejoras = mejoras;
    estado.pruebas = pruebas;

    renderVisitantes(estado.visitantes, eliminarVisitante);
    renderMejoras(estado.mejoras);
    actualizarMetricas(estado);
    renderGraficoIntereses(estado.visitantes);
  } catch (error) {
    console.error(error);
    Swal.fire({
      icon: 'error',
      title: 'No se pudo conectar con JSON Server',
      text: 'Verifica que ejecutaste npm run start y que la API este en http://localhost:3001'
    });
  }
}

async function guardarVisitante(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const resultado = validarVisitante(form);

  if (!resultado.valido) {
    Swal.fire({
      icon: 'warning',
      title: 'Revisa el formulario',
      text: 'Hay campos que necesitan correccion antes de guardar.'
    });
    return;
  }

  try {
    await api.createVisitante(resultado.datos);
    form.reset();
    await cargarDatos();
    Swal.fire({
      icon: 'success',
      title: 'Visitante guardado',
      text: 'El registro fue almacenado en JSON Server.'
    });
  } catch (error) {
    console.error(error);
    Swal.fire({ icon: 'error', title: 'Error al guardar', text: 'Revisa la consola y JSON Server.' });
  }
}

async function eliminarVisitante(id) {
  const confirmacion = await Swal.fire({
    icon: 'question',
    title: 'Eliminar registro',
    text: 'Esta accion eliminara el visitante de JSON Server.',
    showCancelButton: true,
    confirmButtonText: 'Si, eliminar',
    cancelButtonText: 'Cancelar'
  });

  if (!confirmacion.isConfirmed) return;

  try {
    await api.deleteVisitante(id);
    await cargarDatos();
    Swal.fire({ icon: 'success', title: 'Registro eliminado' });
  } catch (error) {
    console.error(error);
    Swal.fire({ icon: 'error', title: 'No se pudo eliminar' });
  }
}

async function guardarMejora(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const resultado = validarMejora(form);

  if (!resultado.valido) {
    Swal.fire({ icon: 'warning', title: 'Completa la mejora', text: 'Revisa los campos marcados.' });
    return;
  }

  try {
    await api.createMejora(resultado.datos);
    form.reset();
    await cargarDatos();
    Swal.fire({ icon: 'success', title: 'Mejora guardada', text: 'Incluyela en tu plan de mejora continua.' });
  } catch (error) {
    console.error(error);
    Swal.fire({ icon: 'error', title: 'No se pudo guardar la mejora' });
  }
}

document.getElementById('formVisitante').addEventListener('submit', guardarVisitante);
document.getElementById('formMejora').addEventListener('submit', guardarMejora);
document.getElementById('btnRecargar').addEventListener('click', cargarDatos);

cargarDatos();
