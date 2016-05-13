import React, { PropTypes } from 'react'

class LengthSetter extends React.Component {

  constructor () {
    super()
    this._setLength = this._setLength.bind(this)
  }

  _setLength(e) {
    this.props.acts.setLength(Number(e.target.value))
  }

  render () {
    let p = this.props
    let length = p.length / 60000
    return (
      <div className="length-setter">
        <div className="input-wrapper">
          <input onChange={this._setLength} type="range" min="900000" max="3600000" step="300000" value={p.length} />
        </div>
        <h3>Pomodoro Length: <span>{length}</span> minutes</h3>
      </div>
    )
  }
}

export default LengthSetter
