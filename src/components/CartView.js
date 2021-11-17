import { useContext, React, useState, useEffect } from "react";
import { contexto } from "./cartContext";
import { Box, Center } from "@chakra-ui/react";

const CartView = ({ key, item }) => {
  const { cart, borrarProducto } = useContext(contexto);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(cart);
  }, [cart, products]);

  const borrarProd = () => {
    borrarProducto(item);
  };
  return (
    <Center bg="white" color="black">
      <Box  p={5} shadow="md" borderWidth="1px" >
        <Box h="40px" bg="yellow.200">
          {key} Producto: {item.producto.title}, Precio Unitario:
          {item.producto.price} Cantidad: {item.cantidad}
        </Box>
        <Box bg="green.200">
          Total $: {item.producto.price * item.cantidad} .-
        </Box>
        <Center>
          <Box>
            <img
              src={`${item.producto.img}`}
              alt={item.producto.name}
              style={{ height: 200, width: 200 }}
            />
          </Box>
        </Center>
        <Center>
        <button className="btn btn-primary" onClick={borrarProd} style={{marginLeft:"auto",marginRight:"0"}}>
          Borrar Producto
        </button>
        </Center>
      </Box>
    </Center>
  );
};
export default CartView;
