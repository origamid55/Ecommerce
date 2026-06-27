import React from 'react'
import produtosEcommerce from '../Arquivos/ListaItens.js'

function Vitrine() {
  return (
    <div className='container'>

        { produtosEcommerce.map((e) =>(
        
            <div className='card' key={e.id}> 
                <img src={e.image} onError={(event) => {
    event.currentTarget.src = "https://placehold.co/600x400?text=Produto+Sem+Foto";
  }}></img>
                <h2>{e.title}</h2>
                <h3> R$ {e.price}</h3>
                <br></br>
                <h4>{e.description}</h4>
            </div>
        
        )) }
      
    </div>
  )
}

export default Vitrine
