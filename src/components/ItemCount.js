import React, { useState, useEffect } from "react";
import Button from "./Button";
import ButtonAgregarCarrito from "./ButtonAgregarCarrito";

export default function ItemCount({ inicial, stockActual }) {
  const [count, setCount] = useState(inicial);
  const [initial] = useState(inicial);
  const [stock, setStock] = useState(stockActual);
  const [deshabilitarBoton, setDeshabilitarBoton]= useState(false);
 
  console.log('INITIAL-->'+initial);
  console.log('INICIAL-->'+inicial);
  console.log('STOCKActual-->'+stockActual);
  console.log('STOCK-->'+stock);
  console.log('COUNT-->'+count);
  useEffect(() => {
    if(stock<=0){setDeshabilitarBoton(true);}
    if(count>=stock){setCount(stock);}
    if(count<=0){setCount(0);}
  }, [stock,count,initial]); 
  
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