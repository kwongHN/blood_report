// 参考范围定义
export const bloodRanges = {
  wbc: { min: 3.5, max: 9.5 },
  ne: { min: 1.8, max: 6.3 },
  ly: { min: 1.1, max: 3.2 },
  plt: { min: 125, max: 350 },
  hgb: { min: 115, max: 150 }
}

export const ldhRange = { min: 120, max: 250 }

export function useStatus() {
  function getStatus(value, range) {
    if (value < range.min) return 'low'
    if (value > range.max) return 'high'
    return 'normal'
  }

  function getBloodStatus(value, key) {
    return getStatus(value, bloodRanges[key])
  }

  function getLdhStatus(value) {
    return getStatus(value, ldhRange)
  }

  function getBadgeClass(status) {
    return status === 'low' ? 'badge-low' : status === 'high' ? 'badge-high' : 'badge-normal'
  }

  function getCardIndicatorClass(status) {
    return `card-indicator ${status}`
  }

  return {
    bloodRanges,
    ldhRange,
    getStatus,
    getBloodStatus,
    getLdhStatus,
    getBadgeClass,
    getCardIndicatorClass
  }
}
