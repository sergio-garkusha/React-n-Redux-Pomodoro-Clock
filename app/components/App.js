import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { setLength, setActivityType, startTimer, tickTimer, stopTimer, clearTimer } from '../actions'
import Controls from './Controls'
import Clock from './Clock'

const mapStateToProps = (state) => ({
  length: state.length,
  is_active: state.is_active,
  activity_type: state.activity_type,
  timer: state.timer
})

const mapDispatchToProps = (dispatch) => ({
  setLength: (l) => dispatch(setLength(l)),
  setActivityType: (t) => dispatch(setActivityType(t)),
  startTimer: () => dispatch(startTimer()),
  tickTimer: (t) => dispatch(tickTimer(t)),
  stopTimer: () => dispatch(clearTimer()),
  clearTimer: () => dispatch(stopTimer())
})

class App extends React.Component {

  componentWillUpdate () {

  }

  componentDidUpdate () {
    let p = this.props
    
  }

  render () {
    let p = this.props
    return (
      <div>
        <Controls length={p.length} acts={{
          setLength: p.setLength,
          startTimer: p.startTimer,
          stopTimer: p.stopTimer,
          clearTimer: p.clearTimer
        }} />
      <Clock>
        {p.length}
      </Clock>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
