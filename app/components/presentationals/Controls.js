import React, { PropTypes } from 'react'
import Buttons from './Buttons'
import LengthSetters from './LengthSetters'

class Controls extends React.Component {
  render () {
    let p = this.props
    return (
      <section className="controls">
        <Buttons
          breakLength={p.breakLength}
          pomodoroLength={p.pomodoroLength}
          disabled={p.timer.is_active}
          stopTimeout={p.stopTimeout}
          timer={p.timer}
          activityType={p.activityType}
          sounds={{
            tick: p.sounds.tick,
            alarm: p.sounds.alarm
          }}
          acts={{
            startTimer: p.acts.startTimer,
            pauseTimer: p.acts.pauseTimer,
            clearTimer: p.acts.clearTimer
          }}
        />
        <LengthSetters
          disabled={p.timer.is_active}
          paused={p.timer.paused}
          breakLength={p.breakLength}
          pomodoroLength={p.pomodoroLength}
          acts={{
            setActivityType: p.acts.setActivityType,
            setPomodoroLength: p.acts.setPomodoroLength,
            setBreakLength: p.acts.setBreakLength
          }}
        />
      </section>
    )
  }
}

export default Controls
