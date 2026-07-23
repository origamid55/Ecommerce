import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Listaitens from '../Arquivos/ListaItens'
import { useCarrinho } from '../CarrinhoProvider'

const DetalhesProduto = () => {

    const {adicionarAoCarrinho} = useCarrinho();
    const {id} = useParams();
    const produto = Listaitens.find((e) => String(e.id) === String(id));
    if (!produto) {
        return (
        <div>
            <h2>Produto não encontrado</h2>
            <Link to='/'>
                Volte a pagina anterior
            </Link>
        </div>
        )
    }
  return (
    <div className='descricaocontainer'>
        <div>
            <p> <img style={{width: 350, height: 350}} src={produto.image}></img></p> </div>
        <div style={{flexBasis: 430}}>
            <p> <b>Nome do item:</b>  {produto.title} </p>  
            <p> <b>Descrição:</b> {produto.description} </p>  
            
            <p> <b>Categoria:</b> {produto.category}</p> 
            <p> <b>Rating:</b> {produto.rating}</p>  
      </div>
      <div>
            <p> <b>Preço:</b> {produto.price}</p> 
            <p><Link to='/'> Voltar pagina anterior </Link></p> 
            <div className='button'> <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao Carrinho</button></div>
      </div>
    </div>
  )
}

export default DetalhesProduto
