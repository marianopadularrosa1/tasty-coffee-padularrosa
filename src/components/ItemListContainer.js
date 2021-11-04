
import {  useState,useEffect } from "react";
import {useParams} from 'react-router-dom';
import ItemList from "./ItemList";



export default function ItemListContainer() {
  const {categoryId} = useParams();
  console.log('categoryId--->'+categoryId);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
        await fetch('/products.json')
          .then((respuesta) => respuesta.json())
          .then((productos) => {
              if(categoryId){
                console.log('categoryId 1-->'+categoryId);
                setProducts(productos.filter(productos=>productos.category===categoryId));
              }else{
                console.log('categoryId 2-->'+categoryId);
                setProducts(productos);
              }
            })
          .catch((e) => console.error(e));
      };
      const timer = setTimeout(() => {
        fetchData();
        setLoading(false);
      }, 2000);
      
      return () => clearTimeout(timer);
  }, [categoryId]);

  if (loading) {
    return (
      <div className="App" >
        
          <h1>Loading Products Data....</h1>
      </div>
    );
  }else{
  return (
    <div className="App" >
     
      <ItemList productos={products} />
    </div>
  );
}
}
