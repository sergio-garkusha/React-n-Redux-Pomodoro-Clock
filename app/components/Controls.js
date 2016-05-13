import React, { PropTypes } from 'react'
import Buttons from './Buttons'
import LengthSetter from './LengthSetter'

class Controls extends React.Component {
  render () {
    let p = this.props
    // console.log(p);
    return (
      <section className="controls">
        <Buttons acts={{
          startTimer: p.acts.startTimer,
          stopTimer: p.acts.stopTimer,
          clearTimer: p.acts.clearTimer
          }} />
        <LengthSetter length={p.length} acts={{setLength: p.acts.setLength}} />
      </section>
    )
  }
}

export default Controls
