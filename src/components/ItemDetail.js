import { Link } from "react-router-dom";
import { useState } from "react";
import ItemCount from "./ItemCount";
import { Center} from "@chakra-ui/react"
import "../App.css";
export default function ItemDetail(props) {
  const [cantidad, setCantidad] = useState();
  const onAdd = (producto) => {
    console("agregaron un producto", producto);
  };

  return (
    <div>
      <div className="card" >
        <div className="card-body">
          <Center>
        <img
          src={`${props.img}`}
          className="card-img-top"
          alt="..."
          style={{ height: 200, width: 200 }}
        />
        </Center>
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">$ {props.price}</p>
          <p className="card-text">{props.description}</p>
          <ItemCount onAdd={onAdd} initial={0} stock={props.stock} />
          <Link to="/cart"  type="button" class="btn btn-primary">Finalizar Compra</Link>
        </div>
      </div>
     
    </div>
  )
}
