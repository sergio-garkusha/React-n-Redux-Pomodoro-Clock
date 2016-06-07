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
    this.timeout

    this.stopTimeout = this.stopTimeout.bind(this)

    this.tickSound = new Audio('https://cdn.rawgit.com/Cu7ious/React-n-Redux-Pomodoro-Clock/0697fb10e56f3cb79a13e7063aa400010d43adf8/assets/sounds/Alarm-clock-sound-short.mp3') // 00:26
    this.alarmSound = new Audio('https://cdn.rawgit.com/Cu7ious/React-n-Redux-Pomodoro-Clock/0697fb10e56f3cb79a13e7063aa400010d43adf8/assets/sounds/Alarm-clock-sound-short.mp3') // 00:02
    this.tickSound.addEventListener('ended', function() {
      this.currentTime = 0
      this.play()
    }, false);
  }

  stopTimeout () {
    clearTimeout(this.timeout)
  }

  componentDidUpdate () {
    const t = this
    const p = this.props
    const timer = this.props.timer
    const length = (p.activity_type == "p") ? p.breakLength : p.pomodoroLength

    const startTimeout = () => {
      t.timeout = setTimeout(() => {
        t.counter = t.counter - t.ONE_SEC
        if (t.counter === 0) {
          let type = (p.activity_type == "p") ? "b" : "p"
          p.finishTimer()
          p.setActivityType(type)
          t.tickSound.pause()
          t.tickSound.currentTime = 0
          t.alarmSound.play()
        } else {
          p.tickTimer(t.counter)
        }
      }, t.ONE_SEC)
    }

    if (p.timer.is_finished) {
      p.clearTimer()
      setTimeout(() => {
        t.tickSound.play()
        p.startTimer(length)
      }, t.ONE_SEC)
    }

    if (timer.is_active) {
      let length = (p.activity_type == "p") ? p.pomodoroLength : p.breakLength
      this.counter = (timer.time == 0) ? length : timer.time
      if (this.counter !== 0) {
        startTimeout()
      }
    }
  }

  render () {
    let p = this.props
    let humanTime = (p.activity_type == "b") ? p.breakLength : p.pomodoroLength
    return (
      <div>
        <Controls
          timer={p.timer}
          pomodoroLength={p.pomodoroLength}
          breakLength={p.breakLength}
          activityType={p.activity_type}
          stopTimeout={this.stopTimeout}
          acts={{
            setActivityType: p.setActivityType,
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
        />
        <Clock timer={p.timer} type={p.activity_type} act={p.setActivityType}>
          {humanTime}
        </Clock>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
