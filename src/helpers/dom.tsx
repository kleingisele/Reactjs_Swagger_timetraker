import React, { ReactElement } from 'react'
import * as ReactDOM from 'react-dom'
import Provider from '../components/Provider'
import { IAviatorDispatchAction } from '../models'

const renderElement = document.getElementById('timetracker')

export function configurePageRenderer(component: ReactElement<any>): (action: IAviatorDispatchAction) => void {
  return action => {
    return ReactDOM.render((
      <Provider>
        <component.type { ...component.props } { ...action } />
      </Provider>
    ), renderElement)
  }
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
