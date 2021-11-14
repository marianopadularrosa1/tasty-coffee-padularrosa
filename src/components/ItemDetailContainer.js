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
    const collection = db.collection("productos");
    const promesa = collection.get();
    let prodsFirebase = [];
    let producto
    promesa
      .then((documento) => {
        documento.forEach((doc) => {
          prodsFirebase.push(doc.data());
        });
        producto = prodsFirebase.filter((item) => item.id === id)[0];
        setProduct(producto)
        setLoading(false)
      })
      .catch((error) => {
        console.log("Hubo un error-->" + error)
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
