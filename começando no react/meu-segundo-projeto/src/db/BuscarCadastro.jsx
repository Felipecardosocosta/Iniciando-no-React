import React from 'react'

const BuscarCadastro = () => {
    
  return JSON.parse(localStorage.getItem("produtos")) || []
}

export default BuscarCadastro
