import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { TelemetryService } from './services'
import * as serviceWorker from './serviceWorker'
import './styles/index.scss'

TelemetryService.initialize('6a0486ec-39b1-43e9-9b09-da269ca4d6c5')
ReactDOM.render(<App />, document.getElementById('timetracker'))
serviceWorker.unregister()
