import React from 'react'
import Item from './Item'
import data from './data.json';

export default function Listado(props) {
  return (
    <div className='container'>
      {
        data.map((product) => {
          return (
            <Item key={product.id} product={product} handleCount={props.handleCount} />
          )
        })
      }
    </div>
  )
}
