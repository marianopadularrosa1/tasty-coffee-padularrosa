import { useContext, React, useEffect, useState } from "react";
import { contexto } from "./cartContext";
import { VStack,Stack } from "@chakra-ui/react";
import CartView from "./CartView";
import { Center, Box, Badge } from "@chakra-ui/react";
import firebase from "firebase";
import { firestore } from "./Firebase";

const Cart = () => {
  const { cart, borrarProducto, cartWidgetCant, cartWidgetAmount,vaciar } =
    useContext(contexto);
  const [products, setProducts] = useState([]);
  const [resultado, setResultado] = useState(false);
  const [mostrarError, setMostrarError] = useState(false)
  const [mostrarDatosOk, setMostrarDatosOk] = useState(false)
  const [datos,setDatos] = useState({
    nombre:'',
    telefono:'',
    email:'',
  })
  const borrarProd = (producto) => {
    borrarProducto(producto);
  }
  const vaciarCart= ()=>{
    vaciar()
  }

  const handleInputchange=(event)=>{
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
}
  const finalizarCompra=(event)=>{
    event.preventDefault()
    if(datos.nombre==='' || datos.email==='' || datos.telefono===''){
      setMostrarError(true)
      return;
    }else{
      setMostrarError(false)
      setMostrarDatosOk(true)
    }
      const user ={
        nombre: datos.nombre,
        email:datos.email,
        tel:datos.telefono
      }
      const order ={
        buyer: user,
        items: cart,
        total: cartWidgetAmount(),
        date: firebase.firestore.Timestamp.fromDate(new Date())
      }
      const db = firestore
      const collection = db.collection("orders")
      const query = collection.add(order)
      query.then( (response)=>{
        setResultado(response)
        vaciarCart()
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
        <aside className="container col-md-3">
         
          <form className="row" onSubmit={finalizarCompra}>
          {mostrarError&&<Badge colorScheme="red">Complete todos sus datos antes de avanzar</Badge>}
            
            <label for="nombre"> Nombre y Apellido</label>
            <input
              className="form-control form-control-sm"
              type="nombre"
              name="nombre"
              placeholder="Nombre y Apellido"
             onChange={handleInputchange}
              ></input>
            <label for="email"> Email</label>
            <input
              className="form-control form-control-sm"
              type="email"
              name="email"
              placeholder="Email"
            onChange={handleInputchange}
            ></input>
            <label for="telefono">Telefono</label>
            <input
              className="form-control form-control-sm "
              type="phone"
              name="telefono"
              placeholder="Telefono"
              onChange={handleInputchange}
            ></input>
            <button
              className="btn btn-success"
              onClick={finalizarCompra}
              style={{ marginLeft: "auto", marginRight: "0" ,padding:"10px"}}
              type="submit"
            >Finalizar Compra</button>
            {mostrarDatosOk&&<Badge colorScheme="green">Datos completados enviando solicitud</Badge>}
        
           </form>
        </aside>
        
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
