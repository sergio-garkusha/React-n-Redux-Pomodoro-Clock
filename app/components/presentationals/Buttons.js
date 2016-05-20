import React, { PropTypes } from 'react'

class Buttons extends React.Component {

  constructor () {
    super()
    this._startTimer = this._startTimer.bind(this)
    this._pauseTimer = this._pauseTimer.bind(this)
    this._clearTimer = this._clearTimer.bind(this)
  }

  _startTimer () {
    let p = this.props
    let time = p.time || p.pomodoroLength
    p.acts.startTimer(time)
    p.sounds.tick.play()
  }
  _pauseTimer () {
    let p = this.props
    let time = p.time || p.pomodoroLength
    p.acts.pauseTimer(time)
    p.sounds.tick.pause()
  }
  _clearTimer () {
    let p = this.props
    p.acts.clearTimer()
    p.sounds.tick.pause()
    p.sounds.alarm.pause()
    p.sounds.tick.currentTime = 0
    p.sounds.alarm.currentTime = 0
  }

  render () {
    return (
      <ul className="buttons">
        <li><button onClick={this._startTimer}>Start</button></li>
        <li><button onClick={this._pauseTimer}>Pause</button></li>
        <li><button onClick={this._clearTimer}>Clear</button></li>
      </ul>
    )
  }
}

export default Buttons
