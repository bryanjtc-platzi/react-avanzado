import React, { useContext, useState } from 'react'

const AuthContext = React.createContext()

export function useAuthContext () {
  return useContext(AuthContext)
}

export function AuthProvider ({ children }) {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const value = {
    isAuth,
    activateUser: token => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
    }
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
