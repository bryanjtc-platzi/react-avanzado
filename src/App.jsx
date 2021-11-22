import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
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
        <Routes>
          <Route exact path='/pet/:id' element={<Home />} />
          <Route exact path='/detail/:id' element={<Detail />} />
          <Route exact path='/' element={<Home />} />
          {!isAuth && (
            <Route exact path='/login' element={<NotRegisteredUser />} />
          )}
          {!isAuth && (
            <Route exact path='/favs' element={<Navigate to='/login' />} />
          )}
          {!isAuth && (
            <Route exact path='/user' element={<Navigate to='/login' />} />
          )}
          {isAuth && (
            <Route exact path='/login' element={<Navigate to='/' />} />
          )}
          <Route exact path='/favs' element={<Favs />} />
          <Route exact path='/user' element={<User />} />
          <Route element={NotFound} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  )
}
