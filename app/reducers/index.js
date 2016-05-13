export const length = (state = (25 * 60000), action) => {

  switch (action.type) {
    case 'SET_LENGTH': return action.length
    default: return state
  }

}

export const activity_type = (state = 'p', action) => {

  switch (action.type) {
    case 'SET_ACTIVITY_TYPE': return action.activity_type
    default: return state
  }

}

export const is_active = (state = false, action) => {
  switch (action.type) {
    case 'START_TIMER':
    case 'STOP_TIMER':
      return action.is_active
    default: return state
  }

}

export const timer = (state = -1, action) => {
  switch (action.type) {
    case 'TICK_TIMER': return action.timer
    case 'CLEAR_TIMER': return -1
    default: return state
  }
}
