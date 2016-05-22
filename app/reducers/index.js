export const breakLength = (state = (5 * 60000), action) => {
  switch (action.type) {
    case 'SET_BREAK_LENGTH': return action.length
    default: return state
  }
}

export const pomodoroLength = (state = (25 * 60000), action) => {
  switch (action.type) {
    case 'SET_POMODORO_LENGTH': return action.length
    default: return state
  }
}

export const activity_type = (state = 'p', action) => {
  switch (action.type) {
    case 'SET_ACTIVITY_TYPE': return action.activity_type
    default: return state
  }
}

const timerInitState = {
  is_active:   false,
  was_started: false,
  is_finished: false,
  paused:      false,
  time:        0
}
export const timer = (state = timerInitState, action) => {

  switch (action.type) {
    case 'START_TIMER':
      return {
        is_active: action.timer.is_active,
        was_started: state.was_started,
        is_finished: action.timer.is_finished,
        paused: state.paused,
        time: Number(action.timer.time)
      }
    case 'PAUSE_TIMER':
      return {
        is_active: action.timer.is_active,
        paused: action.timer.paused,
        was_started: state.was_started,
        is_finished: state.is_finished,
        time: Number(action.timer.time)
      }
    case 'TICK_TIMER':
      return {
        is_active: state.is_active,
        paused: state.paused,
        was_started: state.was_started,
        is_finished: state.is_finished,
        time: Number(action.timer.time)
      }
    case 'CLEAR_TIMER':
      return {
        is_active: false,
        paused: false,
        was_started: false,
        is_finished: false,
        time: 0
      }
    case 'FINISH_TIMER':
      return {
        is_active: false,
        paused: false,
        was_started: false,
        is_finished: true,
        time: Number(action.timer.time)
      }
    default:
      return state
  }

}
