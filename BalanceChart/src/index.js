import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import reducer from './reducers'
import App from './containers/App'

const store = createStore(
  reducer, applyMiddleware(createLogger)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

 