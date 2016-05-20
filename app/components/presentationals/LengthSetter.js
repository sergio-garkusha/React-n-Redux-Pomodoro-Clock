import React, { PropTypes } from 'react'

class LengthSetter extends React.Component {

  constructor () {
    super()
    this._setPomodoroLength = this._setPomodoroLength.bind(this)
    this._setBreakLength = this._setBreakLength.bind(this)
  }

  _setPomodoroLength(e) {
    this.props.acts.setPomodoroLength(Number(e.target.value))
  }

  _setBreakLength(e) {
    this.props.acts.setBreakLength(Number(e.target.value))
  }

  render () {
    let p = this.props
    let pomodoroLength = p.pomodoroLength / 60000
    let breakLength = p.breakLength / 60000
    let disabled = p.disabled

    pomodoroLength = (pomodoroLength < 10) ? "0" + pomodoroLength : pomodoroLength
    breakLength = (breakLength < 10) ? "0" + breakLength : breakLength

    return (
      <div className="length-setter">
        <div>
          <div className="input-wrapper">
            <input onChange={this._setPomodoroLength} disabled={disabled} type="range" min="60000" max="3600000" step="60000" value={p.pomodoroLength} />
          </div>
          <h3>Pomodoro: <span>{pomodoroLength}</span> min</h3>
        </div>
        <div>
          <div className="input-wrapper">
            <input onChange={this._setBreakLength} disabled={disabled} type="range" min="60000" max="900000" step="60000" value={p.breakLength} />
          </div>
          <h3>Break: <span>{breakLength}</span> min</h3>
        </div>
      </div>
    )
  }
}

export default LengthSetter
