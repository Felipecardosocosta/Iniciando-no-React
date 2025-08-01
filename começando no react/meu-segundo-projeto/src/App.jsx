import { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route, Link,NavLink, Navigate} from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import Login from './pages/Login/Login'
import './App.css'
import Cadastro from './pages/Cadastro/Cadastro'
import Produto from './pages/Produto/Produto'
import CadastroProduto from './pages/CadastroDeProduto/CadastroProduto'



function App() {
   const [logado,setLogado]= useState(false)
   
  
   

   useEffect(()=>{
    const usuario = JSON.parse(localStorage.getItem("logado"))
    if (usuario) {
      setLogado(true)
      
    }
   },[])

  return (
    
    <BrowserRouter>
    <nav className='navPages' >
      <ol>
        {!logado && <li><NavLink className={({isActive})=> isActive? 'linkAtivo': 'linkNoAtivo'} to={'/'} >Login</NavLink></li>}
        {/* {!logado && <li><NavLink className={({isActive})=> isActive? 'linkAtivo': 'linkNoAtivo'} to={'/cadastro'} >Cadastro</NavLink></li>} */}
        {!!logado && <li><NavLink className={({isActive})=> isActive? 'linkAtivo': 'linkNoAtivo'} to={'/cadastroProduto'} element={<CadastroProduto/>}>Cadastro de Produtos</NavLink> </li>}
        <li> <NavLink className={({isActive})=> isActive? 'linkAtivo': 'linkNoAtivo'} to={'/produto'} element={<Produto/>} >Produtos</NavLink> </li>

      </ol>
    </nav>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/produto' element={<Produto /> } />
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/cadastroProduto' element={<CadastroProduto/>}/>


      </Routes>

    </BrowserRouter>
  )
}

export default App

