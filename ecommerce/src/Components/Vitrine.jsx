import React from 'react'
import produtosEcommerce from '../Arquivos/ListaItens.js'

function Vitrine() {
  return (
    <div className='container'>

        { produtosEcommerce.map((e) =>(
        
            <div className='card' key={e.id}> 
                <h2>{e.title}</h2>
                <h3>{e.price}</h3>
                <h4>{e.description}</h4>
            </div>
        
        )) }
      
    </div>
  )
}

export default Vitrine
