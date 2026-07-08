import React from 'react'
import produtosEcommerce from '../Arquivos/ListaItens.js'
import imagemPadrao from '../assets/sem-Foto.png'
import { useCarrinho } from '../CarrinhoProvider.jsx'

function Vitrine() {
const {adicionarAoCarrinho} = useCarrinho();

return (
    <div className='container'>

        { produtosEcommerce.map((e) =>(
        
            <div className='card' key={e.id}> 
                <div className='img-container'>
                <img src={e.image} onError={(event) => {
    event.currentTarget.src = imagemPadrao }}></img>
                </div>
                <div className='titulo'><h2>{e.title}</h2></div>
                <h3> R$ {e.price}</h3>
                <br></br>
                <div className='divh4'> <h4>{e.description}</h4></div>
                <div className='button'><button onClick={() => adicionarAoCarrinho(e)}>Adicionar ao carrinho</button></div>
            </div>
        
        )) }
    </div>
  )
}

export default Vitrine
