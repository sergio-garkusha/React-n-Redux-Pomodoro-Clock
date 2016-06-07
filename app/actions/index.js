export const setPomodoroLength = (l) => ({ type: 'SET_POMODORO_LENGTH', length: l })
export const setBreakLength = (l) => ({ type: 'SET_BREAK_LENGTH', length: l })
export const setActivityType = (t) => ({ type: 'SET_ACTIVITY_TYPE', activity_type: t })

export const startTimer = (t) => ({
  type: 'START_TIMER',
  timer: {
    is_active: true,
    is_finished: false,
    time: t
  }
})
export const pauseTimer = (t) => ({
  type: 'PAUSE_TIMER',
  timer: {
    is_active: false,
    paused: true,
    time: t
  }
})
export const tickTimer = (t) => ({
  type: 'TICK_TIMER',
  timer: {
    time: t
  }
})
export const clearTimer = () => ({
  type: 'CLEAR_TIMER',
  timer: {
    time: 0,
    is_finished: false,
    is_active: false,
    paused: false
  }
})
export const finishTimer = () => ({
  type: 'FINISH_TIMER',
  timer: {
    time: 0,
    is_finished: true,
    paused: false,
    is_active: false
  }
})
