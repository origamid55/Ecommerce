import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Listaitens from '../Arquivos/ListaItens'
import { useCarrinho } from '../CarrinhoProvider'

const DetalhesProduto = () => {

    const {adicionarAoCarrinho, removerCarrinho, itens} = useCarrinho();
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
    <>

    <div className='descricaocontainer'>
        <div style={{flex: '100%'}}>
        <b> <p style={{fontSize: 35}}> {produto.title}  </p> </b>
        </div>
        <div style={{ flex: 1 }}>
            <p> <img style={{width: 350, height: 350}} src={produto.image}></img></p>
       </div>
       
        <div style={{flex: 3}}>  
            <p> <b>Descrição:</b> {produto.description} </p>         
            <p> <b>Categoria:</b> {produto.category}</p> 
            <p> <b>Rating:</b> {produto.rating}</p>  
        </div>
     
        <div style={{ flex: 1}}>
            <p> <b>Preço:</b> R$ {produto.price}</p>  
            <p style={{fontSize: 15}}>Quantidades adicionadas: {itens.map((i)=> {
             if (i.title === produto.title) {return i.quantidade}
        
        })}
         </p>
            <div className='button'> 
                
            <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao Carrinho</button>

            <button onClick={() => removerCarrinho(produto)}>Remover item</button>,

            <button> <Link to='/'>  Voltar pagina anterior </Link></button>
        </div>
        
        </div>
    
    </div>
    </>
  )
}

export default DetalhesProduto
