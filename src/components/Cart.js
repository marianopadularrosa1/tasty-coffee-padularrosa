import { useContext, React, useEffect, useState } from "react";
import { contexto } from "./cartContext";
import { VStack,Stack } from "@chakra-ui/react";
import CartView from "./CartView";
import { Center, Box, Badge } from "@chakra-ui/react";
import firebase from "firebase";
import { firestore } from "./Firebase";

const Cart = () => {
  const { cart, borrarProducto, cartWidgetCant, cartWidgetAmount } =
    useContext(contexto);
  const [products, setProducts] = useState([]);
  const [resultado, setResultado] = useState(false);
  console.log("cartWidgetCant:" + cartWidgetCant());
  console.log("cartWidgetAmount:" + cartWidgetAmount());
//let resultado;
  const borrarProd = (producto) => {
    borrarProducto(producto);
  };
  const finalizarCompra=()=>{
      const user ={
        nombre:"juan",
        email:"email@test.com",
        tel:"123456789"
      }
      const order ={
        buyer: user,
        items: cart,
        total: cartWidgetAmount(),
        date: firebase.firestore.Timestamp.fromDate(new Date())
      }
      console.log('order-->',order)
      const db = firestore
      const collection = db.collection("orders")
      const query = collection.add(order)
      query.then( (response)=>{
        console.log(response.id)
        setResultado(response)
      })
  }
  useEffect(() => {
    
    setProducts(cart)
  }, [cart, products,resultado]);
  
  if(resultado){
    return(
    <div className="App">
    <h1>Su codigo de Operacion es: {resultado.id}</h1>
  </div>
    )
  }
  else if (cart.length > 0) {
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
        <button className="btn btn-success" onClick={finalizarCompra}  style={{marginLeft:"auto",marginRight:"0"}}>Finalizar Compra</button>
      </div>
    )
  } 
  
  else {
    return (
      <div className="App">
        <h1>Carrito Vacío</h1>
      </div>
    )
  }
};

export default Cart;
