import { useContext, React, useEffect, useState } from "react";
import { contexto } from "./cartContext";
import { VStack,Stack } from "@chakra-ui/react";
import CartView from "./CartView";
import { Center, Box, Badge } from "@chakra-ui/react";

const Cart = () => {
  const { cart, borrarProducto, cartWidgetCant, cartWidgetAmount } =
    useContext(contexto);
  const [products, setProducts] = useState([]);
  console.log("cartWidgetCant:" + cartWidgetCant());
  console.log("cartWidgetAmount:" + cartWidgetAmount());

  const borrarProd = (producto) => {
    borrarProducto(producto);
  };
  useEffect(() => {
    setProducts(cart);
  }, [cart, products]);

  if (cart.length > 0) {
    return (
      <div >
        <Center  bg="white" color="white">
        <Stack 
         spacing={8}>
          {cart.map((eachProduct, i) => (
            <CartView key={i} item={eachProduct} />
          ))}
        </Stack>
        </Center>
        <Center  bg="tomato" color="white">
          <Box as="span" fontWeight="bold" fontSize="lg">
            Total: $ {cartWidgetAmount()}.-
          </Box>
        </Center>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Carrito Vacío</h1>
      </div>
    );
  }
};

export default Cart;
