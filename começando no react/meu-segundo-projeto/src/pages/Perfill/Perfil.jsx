import React, { useState } from 'react'
import './Perfil.css'
import UsuarioLogado from '../../db/UsuarioLogado'

const Perfil = () => {

    const [usuario, setUsuario] = useState(UsuarioLogado())

    const [editar,setEditar] = useState(false)

  return (
    <div>
      <h1>Nome: {usuario.name}</h1>
      <p>Cpf: {usuario.cpf} </p>
      <label>Idade: 
      <input type="text" value={usuario.idade} onChange={(e)=> setUsuario((prev)=> ({...prev,idade:e.target.value})) } disabled={!editar? true: false}/>
      </label>
    </div>
  )
}

export default Perfil
