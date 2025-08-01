import React from 'react'
import FormCadastro from '../../components/FormProdutos'
import { useRef } from 'react'
import './CadastroProduto.css'
import { v4 as uuidv4 } from 'uuid';

const CadastroProduto = () => {
    const nome = useRef(null)
    const categoria = useRef(null)
    const quantidade = useRef(null)
    function cadastrar(e){
      e.preventDefault()

      const usuarioLogado = JSON.parse(localStorage.getItem("logado")) 

        const nomeProduto = nome.current.value
        const categoriaProduto = categoria.current.value
        const quantidadeProduto = quantidade.current.value

        if (nomeProduto && categoriaProduto && quantidadeProduto) {
            const produtos = JSON.parse(localStorage.getItem("produtos")) || []
            produtos.push({id:uuidv4(),cpfDoCriador:usuarioLogado.cpf, nome: nomeProduto, categoria: categoriaProduto, quantidade: quantidadeProduto})
            localStorage.setItem("produtos", JSON.stringify(produtos))
            alert("Produto cadastrado com sucesso!")
            nome.current.value = ""
            categoria.current.value = ""
            quantidade.current.value = ""
            window.location.href = "/produto"
        } else {
            alert("Por favor, preencha todos os campos.")
        }

    }

  return (
    <div className='conteinerCadastroProduto'>
        <FormCadastro clases='FormProduto' titulo='Cadastro de Produtos' func={cadastrar} labelNomeId="nomeProduto" labelNome="Nome: " inputName="nomeProp" inputNomeId="nomeProduto" 
        inputRefNome={nome} 

        labelCategoriaId="CategoriaProduto"labelCategoriaNome="Categoria: " inputNameCategoria="CategoriaProp" inputCategoriaId="CategoriaProduto" 
        inputRefCategoria={categoria} 

         labelQuantidadeId="QtdProduto" labelNomeQuantidade="Quantidade : " inputNameQuantidade="QtdProp" inputQuantidadeId="QtdProduto" 
        inputRefQuantidade={quantidade} 
        
        />
      
    </div>
  )
}

export default CadastroProduto
