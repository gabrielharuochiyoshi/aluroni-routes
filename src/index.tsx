import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.css'
import { AppRoutes } from './routes/routes'

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root'),
)
