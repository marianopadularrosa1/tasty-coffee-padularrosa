
import {  useState,useEffect } from "react";
import ItemList from "./ItemList";


export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
        await fetch('/products.json')
          .then((respuesta) => respuesta.json())
          .then((productos) => {
              setProducts(productos);
            })
          .catch((e) => console.error(e));
      };
      const timer = setTimeout(() => {
        fetchData();
        setLoading(false);
      }, 2000);
      
      return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="App">
        <h1>Loading Products Data....</h1>
      </div>
    );
  }else{
  return (
    <div className="App">
      <ItemList productos={products} />
    </div>
  );
}
}
