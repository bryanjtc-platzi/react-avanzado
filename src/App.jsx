import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotFound } from './pages/NotFound'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { useAuthContext } from './Context'

export const App = () => {
  const { isAuth } = useAuthContext()
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Switch>
          <Route exact path='/pet/:id' component={Home} />
          <Route exact path='/detail/:id' component={Detail} />
          <Route exact path='/' component={Home} />
          {!isAuth && <Route exact path='/login' component={NotRegisteredUser} />}
          {!isAuth && <Redirect exact from='/favs' to='/login' />}
          {!isAuth && <Redirect exact from='/user' to='/login' />}
          {isAuth && <Redirect exact from='/login' to='/' />}
          <Route exact path='/favs' component={Favs} />
          <Route exact path='/user' component={User} />
          <Route component={NotFound} />
        </Switch>
        <NavBar />
      </BrowserRouter>
    </>
  )
}
