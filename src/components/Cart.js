import { useContext, React } from "react";
import { contexto } from "./cartContext";

const Cart = () => {
  const resultado = useContext(contexto);
  console.log(resultado);
  console.log("resultado:" + JSON.stringify(resultado));

  if (resultado) {
    return (
        <>
        <div className="row container-fluid">{JSON.stringify(resultado)}</div>
      </>
    );
  } else {
    return (
        <div className="App">
        <h1>Carrito Vacio</h1>
      </div>
      
    );
  }
};

export default Cart;
