import { Chart } from 'chart.js/auto'

export function createLineChart(canvas, { label, labels, data, color }) {
  const isMobile = window.innerWidth <= 600
  const totalLabels = labels.length

  // 根据数据量动态计算X轴标签间隔
  // 台式机显示全部标签，移动端约10个（避免密集）
  const targetCount = isMobile ? 10 : totalLabels
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
            // 台式机关闭自动跳过以显示全部标签；移动端开启避免密集
            autoSkip: isMobile,
            maxTicksLimit: isMobile ? targetCount + 2 : undefined,
            maxRotation: isMobile ? 0 : 45,
            minRotation: isMobile ? 0 : 45,
            font: { size: isMobile ? 9 : (totalLabels > 20 ? 9 : 10) },
            callback: function(value, index) {
              if (index === 0 || index === totalLabels - 1) return labels[index]
              if (isMobile) {
                // 移动端由 autoSkip 控制，回调只确保首尾不丢
                return labels[index]
              }
              // 台式机：全部显示
              return labels[index]
            }
          },
          afterBuildTicks: function(axis) {
            // 移动端 autoSkip 可能跳掉最后一个日期，强制补上
            if (isMobile) {
              const lastIdx = totalLabels - 1
              const hasLast = axis.ticks.some(t => t.value === lastIdx)
              if (!hasLast) {
                axis.ticks.push({ value: lastIdx, label: labels[lastIdx] })
              }
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
