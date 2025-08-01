import React from 'react'

const CadastrosUsuarios = () => {

  
  return JSON.parse(localStorage.getItem("Usuarios")) || []
  
}

export default CadastrosUsuarios
