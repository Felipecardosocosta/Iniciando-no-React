import React, { Children } from 'react'

const Card = ({classs,children,id,titulo,categoria,quantidade}) => {
  return (
    <div className={classs} key={id} >
        <h1>{titulo}</h1> 
        <p>Categoria: {categoria}</p>
        <p>Quantidade: {quantidade}</p>
        {children}
      
    </div>
  )
}

export default Card
