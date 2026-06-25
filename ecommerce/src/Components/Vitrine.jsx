import React from 'react'
import produtosEcommerce from '../Arquivos/ListaItens.js'

function Vitrine() {
  return (
    <div>

        { produtosEcommerce.map((e) =>
        
            <div key={e.id}> 
        
            </div>
        
        ) }
      
    </div>
  )
}

export default Vitrine
