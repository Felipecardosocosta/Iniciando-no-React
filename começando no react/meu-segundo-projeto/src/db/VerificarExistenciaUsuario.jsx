import React from 'react'
import CadastrosUsuarios from './CadastrosUsuarios'

const VerificarExistenciaUsuario = (pessoa) => {



  return CadastrosUsuarios().find(usuario => usuario.cpf === pessoa.cpf) ? true : false
}

export default VerificarExistenciaUsuario
