import React from 'react'
import './NavBar.css'
import { NavLink, Outlet } from 'react-router-dom'

const NavBar = ({ logado }) => {

  return (
    <>
      <nav className='navPages'>
        <ol>
          {!logado && <li><NavLink className={({ isActive }) => isActive ? 'linkAtivo' : 'linkNoAtivo'} to={'/'} >Login</NavLink></li>}
          {/* {!logado && <li><NavLink className={({isActive})=> isActive? 'linkAtivo': 'linkNoAtivo'} to={'/cadastro'} >Cadastro</NavLink></li>} */}
          {!!logado && <li><NavLink className={({ isActive }) => isActive ? 'linkAtivo' : 'linkNoAtivo'} to={'/cadastroProduto'} >Cadastro de Produtos</NavLink> </li>}
          <li> <NavLink className={({ isActive }) => isActive ? 'linkAtivo' : 'linkNoAtivo'} to={'/produto'} >Produtos</NavLink> </li>
          {!!logado && <li> <NavLink className={({ isActive }) => isActive ? 'linkAtivo Perfil' : 'linkNoAtivo Perfil'} to={'/perfil'} >Perfil</NavLink> </li>}


        </ol>
      </nav>
      <Outlet />
    </>
  )
}

export default NavBar
