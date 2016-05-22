import React, { PropTypes } from 'react'

class Clock extends React.Component {

  constructor() {
    super()
    this.setActivityType = this.setActivityType.bind(this)
  }

  setActivityType(e) {
    let p = this.props
    p.act(e.currentTarget.innerText.toLowerCase())
  }

  render () {
    const p = this.props
    let fin = p.timer.is_finished
    let stateRelatedCallback = this.setActivityType
    let clockCSSClass = "", indicators
    let time, humanTime, status
    let hours, mins, secs

    if (p.timer.is_active) {
      if (p.type == "p") {
        clockCSSClass = " pomodoro-clock"
      } else {
        clockCSSClass = " break-clock"
      }
    }

    if (fin) {
      time = new Date(0)
    } else {
      time = (p.timer.time !== 0) ? new Date(p.timer.time) : new Date(p.children)
    }

    hours = time.getHours()
    mins = time.getMinutes()
    secs = time.getSeconds()

    if (hours >= 17) mins = "6" + mins
    mins = (mins < 10) ? "0" + mins : mins
    secs = (!secs || secs < 10) ? "0" + secs : secs

    stateRelatedCallback = (p.timer.is_active || p.timer.paused) ? false : stateRelatedCallback
    humanTime = (fin) ? status : mins + ':' + secs

    return (
      <section className={"clock" + clockCSSClass}>
        <ul>
          <li key="0" onClick={stateRelatedCallback}
            className={
              "is-activity-current--" + (p.type == "p")
              + " is-actions-disabled--" + (p.timer.is_active || p.timer.paused)
            }
          >P</li>
          <li key="1" onClick={stateRelatedCallback}
            className={
              "is-activity-current--" + (p.type == "b")
              + " is-actions-disabled--" + (p.timer.is_active || p.timer.paused)
            }
          >B</li>
        </ul>
        <h2>{humanTime}</h2>
      </section>
    )
  }
}

export default Clock
