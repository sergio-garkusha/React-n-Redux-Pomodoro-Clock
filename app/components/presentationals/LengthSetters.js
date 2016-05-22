import React, { PropTypes } from 'react'
import Setter from './Setter'

class LengthSetters extends React.Component {
  render () {
    let p = this.props
    return (
      <div className="length-setter">
        <Setter
          min={60000} max={3600000}
          acts={{
            setLength: p.acts.setPomodoroLength,
            setActivityType: p.acts.setActivityType
          }}
          disabled={p.disabled} paused={p.paused}
          length={p.pomodoroLength}
        >Pomodoro</Setter>
        <Setter
          min={60000} max={900000}
          acts={{
            setLength: p.acts.setBreakLength,
            setActivityType: p.acts.setActivityType
          }}
          disabled={p.disabled} paused={p.paused}
          length={p.breakLength}
        >Break</Setter>
      </div>
    )
  }
}

export default LengthSetters
