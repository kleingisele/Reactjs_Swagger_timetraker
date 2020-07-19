import createSagaMiddleware from '@redux-saga/core'
import { Provider as UIProvider } from '@valudio/ui'
import React, { useState } from 'react'
import { Provider as IntlProvider } from 'react-intl-redux'
import { BrowserRouter } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { getLanguage } from '../../helpers/session'
import reducer from '../../store/reducers'
import saga from '../../store/sagas'
import theme from '../../theme'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(saga)

const Provider: React.FC = ({ children }) => {
  const [ language, setLanguage ] = useState<string>(getLanguage())

  store.subscribe(() => {
    setLanguage(getLanguage())
  })

  return (
    <IntlProvider store={ store }>
      <UIProvider theme={ theme } language={ language }>
        <BrowserRouter>
          { children }
        </BrowserRouter>
      </UIProvider>
    </IntlProvider>
  )
}

export default Provider
