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
        <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', gap: 20}}>

          
          <div style={{ }}>
            <p><b>Valor total:</b> <i>R$ {preco.toFixed(2).replace(".", ",")}</i></p> 
          </div>
          <div>
            
          <Link to="/carrinho">
          <div style={{position: 'relative'}}>
          <img style={{ border: 0, width: 50, height: 50}} src={iconeCarrinho} />
        { totalItens > 0 ? <div style={{position: 'absolute', top: 10, left: -5,  backgroundColor: 'white', height: 20, width: 20, borderRadius: '50%', display:'flex', fontSize: 14, alignItems: 'center',
    justifyContent: 'center'}}> {totalItens} </div> : null
          
        }
          
          </div>
          </Link>
            
          </div>
          
          </div>
    
    </div>
    </div>
  )
}

export default Header
