import React from 'react'
import '../index.css'
import { useCarrinho } from '../CarrinhoProvider';
import { Link } from 'react-router-dom';
import iconeCarrinho from '../assets/carrinho.webp'

const Header = () => {

  const {itens} = useCarrinho();

  const totalItens = itens.reduce((a, item) => a + item.quantidade, 0);
  const preco = itens.reduce((a, item) => {

    return a + (item.quantidade * item.price);
  },0);
  return (
    <div className='header'>
    <div className='header-container'>
        <div>
           
  <Link to="/"><h1>Ecommerce - empresa XPTO</h1> </Link>
           <h5>Loja virtual</h5>
        </div>
        <div>
          <img src={iconeCarrinho} />
           <p><b>Quantidade de itens: </b><i>{totalItens}</i></p> 
           <p><b>Valor total:</b> <i>R$ {preco.toFixed(2).replace(".", ",")}</i></p> 
        </div>
    
    </div>
    </div>
  )
}

export default Header
