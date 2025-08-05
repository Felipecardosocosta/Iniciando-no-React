import React from 'react'

function FormCadastro(props){
  return (
    <form className={props.clases} onSubmit={props.func}>
        <h1>{props.titulo}</h1>
        <div>
        <label htmlFor={props.labelNomeId}>{props.labelNome}</label>
        <input type="text" name={props.inputName} id={props.inputNomeId} ref={props.inputRefNome} autoFocus/>
        </div>
        <div>
        <label htmlFor={props.labelCategoriaId}>{props.labelCategoriaNome}</label>
        <input type="text" name={props.inputNameCategoria} id={props.inputCategoriaId} ref={props.inputRefCategoria} />
        </div>
        <div>
        <label htmlFor={props.labelQuantidadeId}>{props.labelNomeQuantidade}</label>
        <input type="number" name={props.inputNameQuantidade} id={props.inputQuantidadeId} ref={props.inputRefQuantidade} />
        </div>


        <button>Cadastar</button>

    </form>
  )
}

export default FormCadastro
