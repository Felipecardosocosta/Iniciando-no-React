import React, { useState } from 'react'
import VerificarExistenciaUsuario from '../../db/verificarExistenciaUsuario'
import CadastrosUsuarios from '../../db/CadastrosUsuarios'
import { useNavigate } from 'react-router-dom'
import './Cadastro.css'


const Cadastro = () => {
    const [usuario, setUsuario] = useState({name:'', cpf:'',idade:'',senha:''})
    const navigate = useNavigate()
    
    function cadastrar(e) {
        e.preventDefault()
        const usuarioExistente = VerificarExistenciaUsuario(usuario)
        
        if (!usuarioExistente) {
            
            const cadastro = CadastrosUsuarios()
            
            cadastro.push(usuario)
            
            localStorage.setItem("Usuarios",JSON.stringify(cadastro))
            setUsuario({name:"",cpf:"",idade:""})
            alert("Usuario Cadastrado")
            navigate('/')
        }else alert("Cpf ja esta cadastrado")
    }

    return (
        <div className='conteinerCadastro'>
            <form className='formCadastroUsuario' onSubmit={cadastrar}>
                <h1>Cadastro</h1>
                <label>Nome: 
                    <input type="text" name="nome" value={usuario.name} onChange={(e)=>setUsuario(prev=> ({...prev,name:e.target.value}))}    />
                </label>
                <label>Cpf: 
                    <input type="number" name="Cpf" value={usuario.cpf}  onChange={(e)=>setUsuario( (prev)=> ({...prev, cpf: e.target.value})  )} />
                </label>
                <label>Idade:
                    <input type="number" name="Idade" value={usuario.idade}  onChange={ (e)=> setUsuario((prev)=> ({...prev, idade: e.target.value}))  }  />
                </label>
                <label>Senha: 
                    <input type="password" name="senha" value={usuario.senha}  onChange={(e)=>setUsuario((prev)=>({...prev,senha:e.target.value}) ) } />
                </label>
            <button>Cadastrar</button>
            <p>Você possui Login? <a href="#" onClick={()=> navigate('/')}>Logar</a></p>
            </form>
        </div>
    )
}

export default Cadastro
