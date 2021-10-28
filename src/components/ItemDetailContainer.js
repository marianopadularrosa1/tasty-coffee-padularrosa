import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const getItem = () => {
      fetch("/products.json")
        .then((res) => res.json())
        .then((products) => {
          setProduct(products.filter((item) => item.id === id)[0]);
        })
        .catch((e) => console.error(e));
    };
    const timer = setTimeout(() => {
      getItem();
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="App">
        <h1>Loading Product Data....</h1>
      </div>
    );
  } else {
    return (
      <>
        <div className="row container-fluid">
          <ItemDetail {...product} />;
        </div>
      </>
    );
  }
}
