import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import  {firestore}  from "./Firebase";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

 

  useEffect(() => {
    
    const db = firestore;
    const collection = db.collection("productos");
    const promesa = collection.get()
    let prodsFirebase =[]
    promesa     
      .then((documento) => {
        documento.forEach((doc) => {
          prodsFirebase.push(doc.data())
        })
          console.log( "Consulta exitosa firebase => ", prodsFirebase)
          if (categoryId) {
            setProducts(
              prodsFirebase.filter((productos) => productos.category === categoryId)
            );
            console.log( " => ", prodsFirebase)
            setLoading(false)
          } else {
            setProducts(prodsFirebase)
            setLoading(false)
          }
       
      })
      .catch((error) => {
        console.log("Hubo un error-->"+error);
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
