import React, { PropTypes } from 'react'
import Buttons from './Buttons'
import LengthSetter from './LengthSetter'

class Controls extends React.Component {
  render () {
    let p = this.props
    // console.log(p);
    return (
      <section className="controls">
        <Buttons breakLength={p.breakLength} pomodoroLength={p.pomodoroLength} time={p.time} sounds={{tick: p.sounds.tick, alarm: p.sounds.alarm}}
          acts={{
            startTimer: p.acts.startTimer,
            pauseTimer: p.acts.pauseTimer,
            clearTimer: p.acts.clearTimer
          }} />
        <LengthSetter disabled={p.isActive} breakLength={p.breakLength} pomodoroLength={p.pomodoroLength}
          acts={{
            setPomodoroLength: p.acts.setPomodoroLength,
            setBreakLength: p.acts.setBreakLength
          }}
        />
      </section>
    )
  }
}

export default Controls
