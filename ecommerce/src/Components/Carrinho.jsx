import React from 'react'
import { useCarrinho } from '../CarrinhoProvider'

export default function Carrinho() {

    const {itens, adicionarAoCarrinho, removerCarrinho} = useCarrinho();

  return (
    <div>
{itens.map((item) => (
<div key={item.id}>
    <h2>{item.title}</h2>
    <img src={item.image}/>
    <button onClick={() => adicionarAoCarrinho(item)}>Adicionar + </button>
    <button onClick={() => removerCarrinho(item)}> Remover - </button>
</div>

))}


    </div>
  )
}
