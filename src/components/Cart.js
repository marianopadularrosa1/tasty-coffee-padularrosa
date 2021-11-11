import { useContext, React } from "react";
import { contexto } from "./cartContext";
import { VStack } from "@chakra-ui/react";
import CartView from "./CartView";

const Cart = () => {
  const {
    cart,
    agregarProducto,
    vaciar,
    borrarProducto,
    cartWidgetCant,
    cartWidgetAmount,
  } = useContext(contexto);
  const resultado = useContext(contexto);
  console.log(resultado);
  console.log("resultado:" + JSON.stringify(resultado));
  console.log("cartWidgetCant:" + cartWidgetCant());
  console.log("cartWidgetAmount:" + cartWidgetAmount());

  if (resultado.cart.length > 0) {
    return (
      <div>
        <VStack>
          {resultado.cart.map((eachProduct, i) => (
            <CartView key={i} item={eachProduct} />
          ))}
        </VStack>
        <p>{cartWidgetAmount}</p>
      </div>
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
