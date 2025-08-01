import { useState } from 'react'

import MyButtonCadastro from './components/ButtonCadastro'
import MyButtonEditar from './components/ButtonEditar'
import MinhaIdade from './components/MinhaIdade'
import './App.css'

function App() {

  const [cadastro, setCadastro] = useState([])

  const [pessoa, setPessoa] = useState({})

  const [indexEdicao, setIndexEdicao] = useState(null)

  function cadastrarPessoa() {
    if (pessoa.nome && pessoa.idade) {

      setCadastro(usuarios=> [...usuarios,pessoa])
      setPessoa({nome:"", idade:""})
      
    }

    
  }

  function editarPessoa() {
    
    setCadastro([...cadastro.filter((pessoa,ind)=> ind !== indexEdicao),pessoa])
    setPessoa({nome:"",idade:""})
    setIndexEdicao(null)
    
  }
  function deletarPessoa(index) {
    setCadastro(cadastro.filter((pessoa,ind)=> ind!==index))
    
  }


  return (
    <>
      <div className="cardForm">
        <label>Nome:
        <input type="text" value={pessoa.nome} onChange={(e) => setPessoa(pessoa => ({ ...pessoa, nome: e.target.value }))} />
        </label>

        <label>Idade:
        <input type="number" value={pessoa.idade} onChange={(e) => setPessoa(pessoa => ({ ...pessoa, idade: e.target.value }))} />
        </label>

        {indexEdicao===null? <MyButtonCadastro f={cadastrarPessoa}/> : <MyButtonEditar f={editarPessoa} /> }

      </div>

      <div className="ListaDeCadastro">
        
        {!!cadastro.length> 0 && cadastro.map((pessoa,ind)=> (
          <ol key={ind} >
            <li>Nome: {pessoa.nome}</li>
            <li>Idade: {pessoa.idade}</li>
            <button onClick={()=> (setIndexEdicao(ind),setPessoa(cadastro[ind]))} >Editar</button>
            <button className='Deletar' onClick={()=>deletarPessoa(ind)}>Deletar</button>
          </ol>
        ))}

        
      </div>



    </>
  )
}

export default App
