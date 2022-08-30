
import { useState } from "react";
import '../index.css';

export default function Item(props) {
  const [stock, setStock] = useState(props.product.stock)
  const buttonName = stock === 0 ? 'SIN STOCK' : 'COMPRAR';
  const shouldShowStock = stock === 0 ? false : true;
  const shouldDisabledButton = stock === 0 ? true : false;

  function handleOnClick() {
    const stockUpdated = stock - 1;
    if (stockUpdated >= 0) {
      props.handleCount();
      setStock(stockUpdated)
    } else {
      setStock(0)
    }
  }

  return (
    <div className='producto'>
      <h3 className="header">{props.product.producto.nombre}</h3>
      <p>{props.product.producto.descripcion}</p>
      <h5>En stock: {shouldShowStock ? stock : <span>agotado</span> }</h5>
      <button onClick={handleOnClick} disabled={shouldDisabledButton}>{buttonName}</button>
    </div>
  )
}
