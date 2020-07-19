import React from 'react'
import { Switch } from 'react-router-dom'
import Menu from './components/Menu'
import Provider from './components/Provider'
import Route from './components/Route'
import { routes } from './routing'

const App: React.FC = () => {
  const pages = routes.map((x, i) => (
    <Route key={ i } path={ x.url } isAuthenticated={ x.isAuthenticated }><x.content /></Route>
  ))

  return (
    <Provider>
      <Menu />
      <Switch>{ pages }</Switch>
    </Provider>
  )
}

export default App
