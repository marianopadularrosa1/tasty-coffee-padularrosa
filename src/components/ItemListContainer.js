import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { firestore } from "./Firebase";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = firestore;
    let collection = db.collection("productos");
    if (categoryId !== undefined) {
      collection = collection.where("category", "==", categoryId);
    } else {
      collection = db.collection("productos");
    }
    const promesa = collection.get();
    let prodsFirebase = [];
    promesa
      .then((documento) => {
        documento.forEach((doc) => {
          prodsFirebase.push(doc.data());
        });
          setProducts(prodsFirebase)
          setLoading(false)
        
      })
      .catch((error) => {
        console.log("Hubo un error-->" + error);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  } else {
    return (
      <div className="App">
        <ItemList productos={products} />
      </div>
    );
  }
}
