import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import Provider from './Hooks/Provider'

render(
  <Provider
    store={{
      home: {
        todos: [],
        tests: []
      }
    }}
  >
    <App />
  </Provider>,
  document.getElementById('root')
)
