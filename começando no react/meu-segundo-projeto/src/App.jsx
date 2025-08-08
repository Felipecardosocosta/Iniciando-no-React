import { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route, Link,NavLink, Navigate, RouterProvider} from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import Login from './pages/Login/Login'
import './App.css'
import Cadastro from './pages/Cadastro/Cadastro'
import Produto from './pages/Produto/Produto'
import CadastroProduto from './pages/CadastroDeProduto/CadastroProduto'
import NavBar from './components/NavBarr/NavBar'
import Perfil from './pages/Perfill/Perfil'
import UsuarioLogado from './db/UsuarioLogado'
import router from './router/Router'



function App() {
   const [logado,setLogado]= useState(false)

   useEffect(()=>{
    const usuario = UsuarioLogado()
    if (usuario) {
      setLogado(true)
      
    }
   },[])

  return (
    
    <>
    <NavBar logado={logado}/>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

