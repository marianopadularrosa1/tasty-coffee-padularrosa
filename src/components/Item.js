import { Link } from "react-router-dom";
// se le dice a un componente bruto
// un componente que no tiene estado
// que solo recibe unas propiedades y las pinta
export default function Item({ item }) {
  return (
    <>
      <div>
        <div class="card text-center" style={{ border: "1px solid black", margin: "1px" }} >
          <div class="card-header" style={{ fontStyle: "italic" , color:"black", backgroundcolor: `rgb(40, 44, 52)`}}>
            {item.title}</div>
          <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <p class="card-text">
            {item.description}
            </p>
            <img
              src={`${item.img}`}
              className="card-img-top"
              alt="..."
              style={{ height: 200, width: 200 }}
            />
            
          </div>
          <Link to={`/item/${item.id}`} type="button" class="btn btn-primary">
            {" "}
            ver detalle del producto
          </Link>
          
        </div>
        
      </div>
    </>
  );
}
