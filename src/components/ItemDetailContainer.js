import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { firestore } from "./Firebase";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true)
    const db = firestore;
    
    const promesa2 =db.collection('productos').doc(id).get()
    let producto
    promesa2.then((document)=>{
      producto = document.data()
      setProduct(producto)
      setLoading(false)
    }).catch((error) => {
      console.log("Hubo un error en el get-->" + error)
      setLoading(false)
    })
    
    
      
    
  }, [id]);

  if (loading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  } else {
    return (
      <>
        <div className="row container-fluid">
          <ItemDetail producto={product} />
        </div>
      </>
    );
  }
}
