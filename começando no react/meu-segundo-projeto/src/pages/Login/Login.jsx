import { useState } from "react"
import'./Login.css'
import { useNavigate } from "react-router-dom"
import ConfirmandoLogin from "../../db/ConfirmandoLogin"
import CadastrosUsuarios from "../../db/CadastrosUsuarios"

function Login() {
  const [userLogIn, setUserLogIn] = useState({cpf:"", senha:""})
  const navigate = useNavigate()
  
  function logar(ev) {
    ev.preventDefault();
    const ConfirmandoLog = ConfirmandoLogin(userLogIn)
    
    if (ConfirmandoLog) {
      setUserLogIn({cpf:"",senha:""})
      window.location.href ="/produto"
    }
  }
  return (
    <div className="contêiner">
      
      <form onSubmit={logar}>
        <h1>Login</h1>
        <div className="ContName">
          <label>Cpf: 
            <input type="number" name="Cpf" value={userLogIn.cpf} onChange={(e) => setUserLogIn(prev=> ({...prev, cpf: e.target.value}))} placeholder="Cpf" autoFocus />
          </label>
        </div>
        <div>
          <label>Senha:
          <input type="password" name="Passord"value={userLogIn.senha} onChange={(e) => setUserLogIn(prev=> ({...prev, senha: e.target.value}))} placeholder="Senha"/>
          </label>
          </div>
        <button type="submit" >Logar</button>
        <p>Você possui cadastro? <a href="#" onClick={()=> navigate('/cadastro')}>Cadastrar</a></p>
      </form>
      

    </div>

  )
}
export default Login


