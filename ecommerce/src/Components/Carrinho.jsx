import React from 'react'
import { useCarrinho } from '../CarrinhoProvider'

export default function Carrinho() {

    const {itens, adicionarAoCarrinho, removerCarrinho} = useCarrinho();

  return (
    <div className='containercarrinho'>
        <div className='containercarrinho2'>
            <div className='itenscarrinho'>Itens carrinho</div>
                {itens.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>Quantidade: {item.quantidade}</p>
                     <p>Total: {item.quantidade * item.price}</p>
                    <button onClick={() => adicionarAoCarrinho(item)}>Adicionar + </button>
                    <button onClick={() => removerCarrinho(item)}> Remover - </button>
                </div>

            ))}

             </div>
    </div>
    
  )
}
