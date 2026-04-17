import { Chart } from 'chart.js/auto'

export function createLineChart(canvas, { label, labels, data, color }) {
  const isMobile = window.innerWidth <= 600

  return new Chart(canvas, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label,
        data,
        borderColor: color,
        backgroundColor: color + '20',
        borderWidth: 2,
        fill: true,
        tension: 0.3,
        pointRadius: 3,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            maxRotation: isMobile ? 0 : 45,
            minRotation: isMobile ? 0 : 45,
            font: { size: isMobile ? 9 : 10 },
            callback: function(value, index) {
              if (isMobile && labels.length > 6) {
                return index % Math.ceil(labels.length / 6) === 0 ? labels[index] : ''
              }
              return labels[index]
            }
          }
        },
        y: {
          beginAtZero: false,
          grid: { color: '#F0F0F0' },
          ticks: { font: { size: isMobile ? 9 : 10 } }
        }
      }
    }
  })
}
