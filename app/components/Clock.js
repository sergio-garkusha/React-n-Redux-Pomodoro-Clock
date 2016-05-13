import React, { PropTypes } from 'react'

class Clock extends React.Component {
  render () {
    let time = new Date(this.props.children)
    let mins = time.getMinutes()
    let secs = time.getSeconds()

    mins = mins ? mins : "6" + mins
    secs = secs ? secs : "0" + secs

    return (
      <section className="clock">
        <h2>{mins + ':' + secs}</h2>
      </section>
    )
  }
}

export default Clock
