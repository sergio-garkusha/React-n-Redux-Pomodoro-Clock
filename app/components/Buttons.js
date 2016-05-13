import React, { PropTypes } from 'react'

class Buttons extends React.Component {

  constructor () {
    super()

    this.tickSound = new Audio('../assets/sounds/Tick-tock-sound.mp3')
    this.alarmSound = new Audio('../assets/sounds/Alarm-clock-sound-short.mp3')

    this._startTimer = this._startTimer.bind(this)
    this._stopTimer = this._stopTimer.bind(this)
    this._clearTimer = this._clearTimer.bind(this)
  }

  _startTimer () {
    this.props.acts.startTimer()
    this.tickSound.play()
  }
  _stopTimer () {
    this.props.acts.stopTimer()
    this.tickSound.pause()
  }
  _clearTimer () {
    this.props.acts.clearTimer()
    this.tickSound.pause()
  }

  render () {
    return (
      <ul className="buttons">
        <li><button onClick={this._startTimer}>Start</button></li>
        <li><button onClick={this._stopTimer}>Pause</button></li>
        <li><button onClick={this._clearTimer}>Clear</button></li>
      </ul>
    )
  }
}

export default Buttons
