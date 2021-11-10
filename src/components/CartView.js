import { useContext, React } from "react"
import { contexto } from "./cartContext"
import { Box } from "@chakra-ui/react"

const CartView = ({item}) => {
  const resultado = useContext(contexto);
  console.log(item);
 

  const getAmount=(p,q)=>{
    return (p*q);
  }
 
    return (
       
        <Box  h="40px" bg="yellow.200">
            Producto: {item.producto.title}, Cantidad: {item.cantidad} 
            <Box bg="green.200">
              
                ({ item.producto.price})*({item.cantidad} )
              
                </Box>
        </Box>
    )
    }
export default CartView;
