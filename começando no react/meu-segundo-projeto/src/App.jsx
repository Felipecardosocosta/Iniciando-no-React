import { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route, Link,NavLink, Navigate} from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import Login from './pages/Login/Login'
import './App.css'
import Cadastro from './pages/Cadastro/Cadastro'
import Produto from './pages/Produto/Produto'
import CadastroProduto from './pages/CadastroDeProduto/CadastroProduto'
import NavBar from './components/NavBarr/NavBar'
import Perfil from './pages/Perfill/Perfil'
import UsuarioLogado from './db/UsuarioLogado'



function App() {
   const [logado,setLogado]= useState(false)

   useEffect(()=>{
    const usuario = UsuarioLogado()
    if (usuario) {
      setLogado(true)
      
    }
   },[])

  return (
    
    <BrowserRouter>
    <NavBar logado={logado}/>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/produto' element={<Produto /> } />
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/cadastroProduto' element={<CadastroProduto/>}/>
        <Route path='/perfil' element={<Perfil/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App

