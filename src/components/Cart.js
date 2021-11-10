import { useContext, React } from "react";
import { contexto } from "./cartContext";
import { VStack } from "@chakra-ui/react";
import CartView from "./CartView";

const Cart = () => {
  const resultado = useContext(contexto);
  console.log(resultado);
  console.log("resultado:" + JSON.stringify(resultado));

  if (resultado.cart.length> 0) {
    return (
      <VStack>
        {resultado.cart.map((eachProduct,i) => (
          <CartView key={i} item={eachProduct} />
        ))}
      </VStack>
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
