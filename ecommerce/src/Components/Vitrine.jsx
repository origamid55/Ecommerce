import React from 'react'
import produtosEcommerce from '../Arquivos/ListaItens.js'

function Vitrine() {
  return (
    <div className='container'>

        { produtosEcommerce.map((e) =>(
        
            <div className='card' key={e.id}> 
                <h2>{e.title}</h2>
            </div>
        
        )) }
      
    </div>
  )
}

export default Vitrine
