import React from 'react'

const UsuarioLogado = () => {

  return  JSON.parse(localStorage.getItem("logado")) || false
}

export default UsuarioLogado
