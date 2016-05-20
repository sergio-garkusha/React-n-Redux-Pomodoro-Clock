import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { setPomodoroLength, setBreakLength, setActivityType,
         startTimer, tickTimer, pauseTimer, clearTimer, finishTimer
       } from '../../actions'
import Controls from '../presentationals/Controls'
import Clock from '../presentationals/Clock'

const mapStateToProps = (state) => ({
  pomodoroLength: state.pomodoroLength,
  breakLength: state.breakLength,
  activity_type: state.activity_type,
  timer: state.timer
})

const mapDispatchToProps = (dispatch) => ({
  setBreakLength: (l) => dispatch(setBreakLength(l)),
  setActivityType: (t) => dispatch(setActivityType(t)),
  setPomodoroLength: (l) => dispatch(setPomodoroLength(l)),
  startTimer: (t) => dispatch(startTimer(t)),
  tickTimer: (t) => dispatch(tickTimer(t)),
  pauseTimer: (t) => dispatch(pauseTimer(t)),
  clearTimer: () => dispatch(clearTimer()),
  finishTimer: () => dispatch(finishTimer())
})

class App extends React.Component {

  constructor (props) {
    super(props)
    this.ONE_SEC = 1000
    this.counter

    this.tickSound = new Audio('../assets/sounds/Tick-tock-sound.mp3') // 00:26
    this.alarmSound = new Audio('../assets/sounds/Alarm-clock-sound-short.mp3') // 00:02

    this.tickSound.addEventListener('ended', function() {
      this.currentTime = 0
      this.play()
    }, false);
  }

  componentDidUpdate () {
    const t = this
    const p = this.props
    const timer = this.props.timer

    if (!timer.is_active
        && !timer.was_started
        && !timer.paused
        && timer.time > 0
      ) {
      p.clearTimer()
    }

    if (timer.is_active) {
      this.counter = (timer.time == 0) ? p.pomodoroLength : timer.time
      if (this.counter !== 0) {
        setTimeout(() => {
          this.counter = this.counter - t.ONE_SEC
          if (this.counter === 0) {
            p.finishTimer()
            t.tickSound.pause()
            t.tickSound.currentTime = 0
            t.alarmSound.play()
          } else {
            p.tickTimer(this.counter)
          }
        }, t.ONE_SEC)
      }
    }
  }

  render () {
    let p = this.props
    return (
      <div>
        <Controls
          pomodoroLength={p.pomodoroLength}
          breakLength={p.breakLength}
          acts={{
            setBreakLength: p.setBreakLength,
            setPomodoroLength: p.setPomodoroLength,
            startTimer: p.startTimer,
            pauseTimer: p.pauseTimer,
            clearTimer: p.clearTimer
          }}
          sounds={{
            tick: this.tickSound,
            alarm: this.alarmSound
          }}
          isActive={p.timer.is_active}
          time={p.timer.time}
        />
        <Clock timer={p.timer}>
          {p.pomodoroLength}
        </Clock>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
