import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

const UserLogged = ({ children }) => {
  return children({ isAuth: true })
}
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Switch>
          <Route exact path='/pet/:id' component={Home} />
          <Route exact path='/detail/:id' component={Detail} />
          <Route exact path='/' component={Home} />
          <UserLogged>
            {({ isAuth }) =>
              isAuth
                ? (
                  <>
                    <Route exact path='/favs' component={Favs} />
                    <Route exact path='/user' component={User} />
                  </>
                  )
                : (
                  <>
                    <Route exact path='/favs' component={NotRegisteredUser} />
                    <Route exact path='/user' component={NotRegisteredUser} />
                  </>
                  )}
          </UserLogged>
        </Switch>
        <NavBar />
      </BrowserRouter>
    </>
  )
}
