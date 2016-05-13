export const setLength = (l) => ({ type: 'SET_LENGTH', length: l })

export const setActivityType = (t) => ({ type: 'SET_ACTIVITY_TYPE', activity_type: t })

export const startTimer = () => ({ type: 'START_TIMER', is_active: true })
export const tickTimer = (t) => ({ type: 'TICK_TIMER', timer: t })
export const clearTimer = () => ({ type: 'CLEAR_TIMER', timer: -1 })
export const stopTimer = () => ({ type: 'STOP_TIMER', is_active: false })

window.setLength = setLength
window.setActivityType = setActivityType
window.startTimer = startTimer
window.tickTimer = tickTimer
window.clearTimer = clearTimer
window.stopTimer = stopTimer
