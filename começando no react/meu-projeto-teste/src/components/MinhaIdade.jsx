import { useState } from 'react'
import MyButtonCadastro from './ButtonCadastro'

function MinhaIDade() {

    const [idade, setIdade] = useState("")

    const [mensagem, setMensagem] = useState("")

    return (
        <div>
            <input type="text" onChange={(e) => setIdade(e.target.value)} />

            <MyButtonCadastro func={() => setMensagem(idade)} nome={"Enviar"} />



            <p>Sua idade é:  {mensagem}</p>

        </div>

    )

}

export default MinhaIDade