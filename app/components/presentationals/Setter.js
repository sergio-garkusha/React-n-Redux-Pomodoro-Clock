import React, { PropTypes } from 'react'

class Setter extends React.Component {

  constructor() {
    super()
    this.setLength = this.setLength.bind(this)
    this.decrementVal = this.decrementVal.bind(this)
    this.incrementVal = this.incrementVal.bind(this)
  }

  setLength (val) {
    let p = this.props
    let activity = this.props.children.charAt(0).toLowerCase()
    p.acts.setActivityType(activity)
    p.acts.setLength(Number(val))
  }

  decrementVal (e) {
    e.preventDefault()
    let p = this.props
    if (p.length > p.min) this.setLength(p.length - 60000)
  }

  incrementVal (e) {
    e.preventDefault()
    let p = this.props
    if (p.length < p.max) this.setLength(p.length + 60000)
  }

  render() {
    let p = this.props
    let toggleDisable = p.disabled || p.paused ? "controls-disabled" : "controls-enabled"
    let humanLength = p.length / 60000

    humanLength = (humanLength < 10) ? "0" + humanLength : humanLength

    return (
      <div className="length-setter-module">
        <h3>{p.children}:</h3>
        <div className="controll-wrapper">
          <ul>
            <li><button disabled={p.disabled || p.paused} onClick={this.incrementVal}>+</button></li>
            <li><button disabled={p.disabled || p.paused} onClick={this.decrementVal}>-</button></li>
          </ul>
          <span className={toggleDisable}>{humanLength}</span> <i>mins</i>
        </div>
      </div>
    )
  }

}

export default Setter
