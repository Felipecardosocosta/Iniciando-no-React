import React, { useState } from 'react'
import CadastrosUsuarios from './CadastrosUsuarios'

const ConfirmandoLogin = (usuarioLogin) => {
    console.log(usuarioLogin);

    const usuario = CadastrosUsuarios().find(usuario => usuario.cpf === usuarioLogin.cpf && usuario.senha === usuarioLogin.senha)

    if (usuario) {
        localStorage.setItem("logado", JSON.stringify(usuario))

        return true
    }

    return alert("Usuário ou senha incorretos")


}

export default ConfirmandoLogin

