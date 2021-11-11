import { useContext, React,useState } from "react";
import { contexto } from "./cartContext";
import { Box, Center } from "@chakra-ui/react";

const CartView = ({ key, item }) => {
  const {cart,vaciar,borrarProducto} = useContext(contexto)
  const [producto, setProducto] = useState(item)

  const borrarProd= ()=>{
    borrarProducto(item)
    setProducto(item)
  }
  return (
    <Center>
      <Box>
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
      <button  className="btn btn-primary" onClick={borrarProd}>Borrar Producto</button>
      </Box>
    </Center>
  );
};
export default CartView;
