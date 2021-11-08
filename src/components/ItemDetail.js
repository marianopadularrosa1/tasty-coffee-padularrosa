
import { Center} from "@chakra-ui/react"
import { useContext } from "react";
import { contexto } from "./cartContext";
import { useHistory } from "react-router-dom"
import ItemCount from "./ItemCount";
export default function ItemDetail({producto}) {
  const {push} = useHistory()
  const {cart,agregarProducto,vaciar,borrarProducto} = useContext(contexto)
  console.log('CART-->'+JSON.stringify(cart));
  const onAdd = (cantidad) => {
    //if(cantidad>producto.stock) => no agregar
    agregarProducto(cantidad,producto)
    console.log('AGREGADO A CART-->'+JSON.stringify(cart));
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
          <button  class="btn btn-primary" onClick={borrarProd}>Borrar Producto</button>
          <button  class="btn btn-primary" onClick={vaciarCart}>Vaciar Carrito</button>
          <button  class="btn btn-primary" onClick={verCarrito}>Ver Carrito</button>
          
        </div>
      </div>
     
    </div>
  )
}
