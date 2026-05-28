import Chart from 'chart.js/auto';

let grafico;

export function actualizarMetricas({ visitantes, mejoras, pruebas }) {
  document.getElementById('totalVisitantes').textContent = visitantes.length;
  document.getElementById('totalMejoras').textContent = mejoras.length;
  document.getElementById('totalPruebas').textContent = pruebas.length;
}

export function renderGraficoIntereses(visitantes) {
  const canvas = document.getElementById('graficoIntereses');
  const conteo = visitantes.reduce((acc, visitante) => {
    acc[visitante.interes] = (acc[visitante.interes] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(conteo);
  const data = Object.values(conteo);

  if (grafico) grafico.destroy();

  grafico = new Chart(canvas, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Visitantes por interes',
        data
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true }
      },
      scales: {
        y: { beginAtZero: true, ticks: { precision: 0 } }
      }
    }
  });
}
