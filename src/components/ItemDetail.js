
import { Center} from "@chakra-ui/react"
import { useContext, useState } from "react";
import { contexto } from "./cartContext";
import { useHistory,Link } from "react-router-dom"
import ItemCount from "./ItemCount";
export default function ItemDetail({producto}) {
  const {push} = useHistory()
  const {cart,agregarProducto,vaciar,borrarProducto} = useContext(contexto)
  const [mostrar, setMostrar] = useState(false)
  const [mostrarTerminarMiCompra, setMostrarTerminarMiCompra] = useState(false)
  
  


 

  const onAdd = (cantidad) => {
    if(cantidad<=0) return;
    agregarProducto(cantidad,producto)
    
    
    if(JSON.stringify(cart.length)>=0){
      setMostrar(true)
      setMostrarTerminarMiCompra(true)
    }
    else{
      setMostrar(false)
      setMostrarTerminarMiCompra(false)
    }
  };
  const vaciarCart= ()=>{
    vaciar()
  }
  const borrarProd= ()=>{
    borrarProducto(producto)
  }
  const verCarrito=()=>{
    push("/cart")
  }
  return (
    <div>
      <div className="card text-center" >
        <div className="card-body">
          <Center>
        <img
          src={`${producto.img}`}
          className="card-img-top"
          alt={producto.name}
          style={{ height: 200, width: 200 }}
        />
        </Center>
        <Center>
          <h5 className="card-title">{producto.name}</h5>
          </Center>
          <p className="card-text">$ {producto.price}</p>
          <p className="card-text">{producto.description}</p>
          <p className="card-text">Stock: {producto.stock}</p>
          <ItemCount onAdd={onAdd} />
          <Link to="/products" className="btn btn-primary" type="button">Seguir agregando Productos</Link>
          <Center>
          <div className="container center">
          {mostrar && <button  className="btn btn-primary" onClick={borrarProd}>Borrar Producto</button>}
          {mostrar && <button  className="btn btn-primary" onClick={vaciarCart}>Vaciar Carrito</button>}
          {mostrarTerminarMiCompra && <button  className="btn btn-primary" onClick={verCarrito}>Ver Carrito</button>}
          </div>
          </Center>
        </div>
      </div>
     
    </div>
  )
}
