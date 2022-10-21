import React from 'react'
import { Card } from 'primereact/card'

const Accordion = ({itens}) => {
  const expressaoJSX = itens.map((item, indice) => {
    return (
      <Card key={indice} className=" p-0 border-1 border-400">
        {/* div>i+h5 */}
        <div>
          <i className='pi pi-angle-down'></i>
          <h5 className='inline ml-3'>{item.titulo}</h5>
        </div>
        <p>{item.conteudo}</p>
      </Card>
    )
  })
  return (
    <div>
      {expressaoJSX}
    </div>
  )
}

export default Accordion

