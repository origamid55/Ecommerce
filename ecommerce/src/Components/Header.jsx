import React from 'react'
import '../index.css'
import { useCarrinho } from '../CarrinhoProvider';
const Header = () => {

  const {itens} = useCarrinho();

  const totalItens = itens.reduce((a, item) => a + item.quantidade, 0);

  return (
    <div className='header'>
    <div className='header-container'>
        <div>
           <h1>Ecommerce - empresa XPTO</h1> 
           <h5>Loja virtual</h5>
        </div>
        <div>
           <h2>carrinho {totalItens}</h2> 
        </div>
    
    </div>
    </div>
  )
}

export default Header
