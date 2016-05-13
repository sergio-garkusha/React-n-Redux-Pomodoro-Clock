/**
state = {
  length:             (25min / 60000) [time in miliseconds]
  is_active:          false [bool]
  activity_type:      'p'   [string] p/b
  timer:              (25min / 60000) [time in miliseconds] || -1
}
 */
import { createStore, combineReducers } from 'redux'
import * as reducers from './reducers'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import App from './components/App'

const store = createStore(
  combineReducers({
    length: reducers.length,
    is_active: reducers.is_active,
    activity_type: reducers.activity_type,
    timer: reducers.timer
  })
);

// const ONE_SEC = 1000
// const FIVE_SECS = 5000
// const ONE_MINUTE = 60000
// const N_MINUTES = state.length * 60000

// var mins = document.getElementById('mins')
// var secs = document.getElementById('secs')

const run = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    , document.getElementById('app')
  )
}

run()
store.subscribe(run);
  // () => {

  // var state = store.getState()
  // var time = (state.timer === -1) ? new Date(state.length) : new Date(state.timer)
  //
  // if (state.is_active) {
  //   if (time <= 0) {
  //     store.dispatch(stopTimer(time))
  //   } else {
  //     setTimeout(() => {
  //       time = new Date(time - ONE_SEC)
  //       mins.innerText = time.getMinutes()
  //       secs.innerText = time.getSeconds()
  //       store.dispatch(tickTimer(time))
  //     }, ONE_SEC)
  //   }
  //
  // }

// });

window.store = store

// var start = document.getElementById('start-timer');
// var stop = document.getElementById('stop-timer');
//
// let tickSound = new Audio('../assets/sounds/Tick-tock-sound.mp3')
// start.addEventListener('click', (e) => {
//   if (tickSound.paused) {
//     tickSound.play();
//   } else {
//     tickSound.pause();
//   }
// })
//
// let alarmSound = new Audio('../assets/sounds/Alarm-clock-sound-short.mp3')
// stop.addEventListener('click', (e) => {
//   alarmSound.play();
// })
