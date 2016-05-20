import React, { PropTypes } from 'react'

class Clock extends React.Component {
  render () {
    const p = this.props
    let fin = p.timer.is_finished
    let time

    if (fin) {
      time = new Date(0)
    } else {
      time = (p.timer.time !== 0) ? new Date(p.timer.time) : new Date(p.children)
    }

    let hours = time.getHours()
    let mins = time.getMinutes()
    let secs = time.getSeconds()

    if (hours >= 17) mins = "6" + mins
    mins = (mins < 10) ? "0" + mins : mins
    secs = (!secs || secs < 10) ? "0" + secs : secs

    return (
      <section className="clock">
        <h2>{mins + ':' + secs}</h2>
      </section>
    )
  }
}

export default Clock
