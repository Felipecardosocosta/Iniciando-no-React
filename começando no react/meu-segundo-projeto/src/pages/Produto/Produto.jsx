import React from 'react'
import { useState } from 'react'
import './Produto.css'

const Produto = () => {

  
  const [produtos,setProdutos]=useState(JSON.parse(localStorage.getItem("produtos")) || [])

  const usuarioLogado = JSON.parse(localStorage.getItem("logado"))
  const [idEditar, setIdEditar] = useState(null)
  const [itens, setItens] = useState({ nome: '', quantidade: '', categoria: '' })


  function inciarEdiçao(id) {
    setProdutos(JSON.parse(localStorage.getItem("produtos"))|| [])
    const usuarioLogado = JSON.parse(localStorage.getItem("logado"))
    const produto = produtos.find(produto => produto.id === id)
    setItens(produto)
    setIdEditar(id)


  }
  function excluirProduto(id) {
    
    const produtoExcluido = produtos.filter((item)=> item.id !==id)
    setProdutos(produtoExcluido)
    
    localStorage.setItem('produtos',JSON.stringify(produtoExcluido))
   
   

  }
  function cancelarEdiçao() {
    setIdEditar(null)
    setItens({ nome: '', quantidade: '', categoria: '' })

    
  }
  function ComfirmarEdiçao() {
    setProdutos(JSON.parse(localStorage.getItem("produtos"))|| [])
    
    if (!itens.nome || !itens.categoria || !itens.quantidade) {
      return alert("Campos Vazios")
    }

    const protudoEditado = [...produtos.filter(produto=> produto.id !==idEditar),itens]

    setProdutos(prev=> ([...prev.filter(produto=> produto.id !==idEditar),itens]))

    localStorage.setItem("produtos", JSON.stringify(protudoEditado))
    setIdEditar(null)
    setItens({ nome: '', quantidade: '', categoria: '' })
    
  }


  return (

    <div className="conteinerProdutos">
      {JSON.parse(localStorage.getItem("logado")) && <div className="meusProdutos">
        <h1>Meus Produtos</h1>

        {produtos.filter(produto => produto.cpfDoCriador === usuarioLogado.cpf).length > 0 ? produtos.map((produto) => {
          if (produto.cpfDoCriador === usuarioLogado.cpf) {
            return (
              <div className="produto" key={produto.id}>
                <h2>{produto.nome}</h2>
                <p>Categoria: {produto.categoria}</p>
                <p>Quantidade: {produto.quantidade}</p>
                <div>


                <button className='editar' onClick={() => inciarEdiçao(produto.id)} >Editar</button>
                <button className='excluir' onClick={() => excluirProduto(produto.id)}>Excluir</button>
                </div>
              </div>
            )
          }
          return null
        }
        ) : <p>Você não tem nenhum produto cadastrado.</p>}

      </div>}
      <div className="todosProdutos">
        <h1>Todos Produtos</h1>
        <div className="cont-produtos">
          {JSON.parse(localStorage.getItem("logado")) ? /*true1*/produtos.filter(produto => produto.cpfDoCriador !== usuarioLogado.cpf).length > 0 ? /*true2 */ produtos.map((produto) => {
            if (produto.cpfDoCriador !== usuarioLogado.cpf) {

              return(
              <div className="produto" key={produto.id}>
                <h2>{produto.nome}</h2>
                <p>Categoria: {produto.categoria}</p>
                <p>Quantidade: {produto.quantidade}</p>
              </div>
              )
            }
            return null

          }) : /*false2 */ <p>Nenhum produto disponível.</p> : /*false1 */ produtos.map((produto) => {
            
            return(
              <div className="produto" key={produto.id}>
                <h2>{produto.nome}</h2>
                <p>Categoria: {produto.categoria}</p>
                <p>Quantidade: {produto.quantidade}</p>
              </div>
              )
            })
            }
        </div>
      </div>

      {/* modal */}
      {idEditar && (
        <div className="fundo-modal">
          <div className="modal">

            <label>Nome
              <input type="text" name="NomeProduto" value={itens.nome} onChange={(e) => setItens((prev) => ({ ...prev, nome: e.target.value }))} />
            </label>


            <label>Categoria
              <input type="text" name="CategoriaProduto" value={itens.categoria} onChange={(e) => setItens((prev) => ({ ...prev, categoria: e.target.value }))} />
            </label>

            <label>Quantidade
              <input type="number" name="QuantidadeProduto" value={itens.quantidade} onChange={(e) => setItens((prev) => ({ ...prev, quantidade: e.target.value }))} />
            </label>
            <div>

              <button className='ComfirmaEdição' onClick={ComfirmarEdiçao}>Comfirmar</button>
              <button className='CancelaEdiçao' onClick={cancelarEdiçao} >Cancelar</button>
            </div>


          </div>
        </div>

      )}



    </div>

  )
}

export default Produto
