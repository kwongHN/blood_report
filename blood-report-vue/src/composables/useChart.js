import { Chart } from 'chart.js/auto'

export function createLineChart(canvas, { label, labels, data, color }) {
  const isMobile = window.innerWidth <= 600
  const totalLabels = labels.length

  // 根据数据量动态计算X轴标签间隔，目标显示约20个标签（移动端约12个）
  const targetCount = isMobile ? 12 : 20
  const step = Math.max(1, Math.ceil(totalLabels / targetCount))

  // Y轴动态计算合适的最小/最大值和步长
  const values = data.filter(v => v !== null && v !== undefined)
  const dataMin = Math.min(...values)
  const dataMax = Math.max(...values)

  // 根据数据范围计算合适的Y轴范围（留10%边距）
  const range = dataMax - dataMin || 1
  const yMin = Math.max(0, dataMin - range * 0.1)
  const yMax = dataMax + range * 0.1

  // 选择合适的步长让刻度显示更美观
  const roughStep = (yMax - yMin) / (isMobile ? 6 : 8)
  const magnitude = Math.pow(10, Math.floor(Math.log10(roughStep)))
  const niceStep = [1, 2, 5, 10].reduce((best, factor) => {
    const candidate = factor * magnitude
    return Math.abs(candidate - roughStep) < Math.abs(best - roughStep) ? candidate : best
  }, magnitude)

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
              // 按步长显示标签，确保首尾显示
              if (index === 0 || index === totalLabels - 1) return labels[index]
              if (index % step === 0) return labels[index]
              return ''
            }
          }
        },
        y: {
          beginAtZero: false,
          min: Math.floor(yMin / niceStep) * niceStep,
          max: Math.ceil(yMax / niceStep) * niceStep,
          ticks: {
            font: { size: isMobile ? 9 : 10 },
            stepSize: niceStep
          },
          grid: { color: '#F0F0F0' }
        }
      }
    }
  })
}
