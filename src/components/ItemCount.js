import React, { useState, useEffect } from "react";
import Button from "./Button";
import ButtonAgregarCarrito from "./ButtonAgregarCarrito";

export default function ItemCount(props) {
  const [count, setCount] = useState(parseInt(props.initial));
  const [initial] = useState(props.initial);
  const [stock, setStock] = useState(props.stock);
  const [deshabilitarBoton, setDeshabilitarBoton]= useState(false);
 
  console.log('STOCK-->'+props.stock);
  useEffect(() => {
    if(stock<=0){setDeshabilitarBoton(true);}
    if(count>=stock){setCount(stock);}
    if(count<=0){setCount(0);}
  }, [count,initial,stock]); 
  
  return (
    <React.Fragment>
      <h1>Cantidad: {count}</h1>
      <h1>Initial: {initial}</h1>
      <h1>Stock: {stock}</h1>
      <Button  text="sumar" deshabilitarBoton={deshabilitarBoton}  cuandohagoClick={() => setCount(count + 1)}    />
      <Button text="restar" cuandohagoClick={() => setCount(count - 1)}  />
      <ButtonAgregarCarrito deshabilitarBoton={deshabilitarBoton} text="Agregar al Carrito" onAdd={() => setStock(stock - count)}    />
    </React.Fragment>
  )
}