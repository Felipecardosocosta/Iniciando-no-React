import { useContext, useEffect, useState } from 'react'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBarr/NavBar'
import UsuarioLogado from './db/UsuarioLogado'
import router from './router/Router'
import { Mycontext } from './MyContext/EstadoLogin'



function App() {
  const { logado, setLogado } = useContext(Mycontext)

  useEffect(() => {
    const usuario = UsuarioLogado()
    if (usuario) {
      setLogado(true)

    }
  }, [])

  return (

    <>
      
      
    </>
  )
}

export default App

