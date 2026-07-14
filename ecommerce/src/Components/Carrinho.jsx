import React from 'react'
import { useCarrinho } from '../CarrinhoProvider'
import imagemPadrao from '../assets/sem-Foto.png'

export default function Carrinho() {

    const {itens, adicionarAoCarrinho, removerCarrinho} = useCarrinho();

    const precoFinal = itens.reduce((a, b) => { 
                return  a + (b.price * b.quantidade);
            }, 0)

    const quantidadefinal = itens.reduce((a ,b) => {
                return a + b.quantidade;
    }, 0)

  return (
    <div className='containermax'>
    <div className='containercarrinho'>
        <div className='containercarrinho2'>
            <div style={{marginLeft: 150 }} className='itenscarrinho'>Itens carrinho</div>
             <div>
                {itens.map((item) => (
                <div className='itensfundo' style={{height: 150}}>
                <div key={item.id}>
                    <div style={{ display: 'flex', alignItems:'center'}}>
                    <div style={{marginRight: '8px', flexShrink: 0}}><img className='imgcarrinho' style={{width:90, height: 90 }} src={item.image} onError={(event) => {
                        event.currentTarget.src = imagemPadrao }}/></div>
                    <div>
                    <h2 style={{fontSize: 18}} >{item.title}</h2>
                    <p style={{ margin:'10px 0', fontSize: 17 }}>Quantidade: {item.quantidade} / Total: R$ {item.quantidade * item.price}</p>
                    <div style={{ margin:'10px 0'}}>
                    <button className='botaocarrinho' style={{marginRight: 10}} onClick={() => adicionarAoCarrinho(item)}>Adicionar + </button>
                    <button className='botaocarrinho' onClick={() => removerCarrinho(item)}> Remover - </button>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                
            ))}
             </div>
             </div>
    </div>
    <div className='containercarrinhofinal'>
        <div className='containercarrinhofinal2'>
            <div className='itenscarrinho'>Resumo da compra</div>
      <div className='fundocarrinhofinal'>
            <div>Preço final: {precoFinal.toFixed(2)} </div>
            <div>Quantidade final: {quantidadefinal} </div>
      </div>
       
        </div>
    </div>
    </div>
  )
}
