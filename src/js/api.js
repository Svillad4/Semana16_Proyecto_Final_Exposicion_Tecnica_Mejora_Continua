import { API_URL } from './config.js';

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });

  if (!response.ok) {
    throw new Error(`Error en la API: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export const api = {
  getVisitantes: () => request('/visitantes'),
  createVisitante: (visitante) => request('/visitantes', {
    method: 'POST',
    body: JSON.stringify(visitante)
  }),
  deleteVisitante: (id) => request(`/visitantes/${id}`, { method: 'DELETE' }),
  getMejoras: () => request('/mejoras'),
  createMejora: (mejora) => request('/mejoras', {
    method: 'POST',
    body: JSON.stringify(mejora)
  }),
  getPruebas: () => request('/pruebas')
};
