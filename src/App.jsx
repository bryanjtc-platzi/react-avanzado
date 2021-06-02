import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './pages/Home'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId
        ? (
          <>
            <PhotoCardWithQuery id={detailId} />
          </>
          )
        : (
          <BrowserRouter>
            <Switch>
              <Route path='/pet/:id' component={Home} />
              <Route path='/' component={Home} />
            </Switch>
          </BrowserRouter>
          )}
    </>
  )
}
