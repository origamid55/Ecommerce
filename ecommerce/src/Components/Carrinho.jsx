import React from 'react'
import { useCarrinho } from '../CarrinhoProvider'

export default function Carrinho() {

    const {itens, adicionarAoCarrinho, removerCarrinho} = useCarrinho();

  return (
    <div className='containermax'>
    <div className='containercarrinho'>
        <div className='containercarrinho2'>
            <div className='itenscarrinho'>Itens carrinho</div>
                {itens.map((item) => (
                <div style={{height: 130}}>
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p style={{ margin:'10px 0'}}>Quantidade: {item.quantidade} /Total: {item.quantidade * item.price}</p>
                    <div style={{ margin:'10px 0'}}>
                    <button style={{marginRight: 10}} onClick={() => adicionarAoCarrinho(item)}>Adicionar + </button>
                    <button onClick={() => removerCarrinho(item)}> Remover - </button>
                    </div>
                </div>
                </div>
            ))}

             </div>
    </div>
    <div className='containercarrinhofinal'>
        <div className='containercarrinhofinal2'>
            <div className='itenscarrinho'>Resumo da compra</div>
        </div>
    </div>
    </div>
  )
}
