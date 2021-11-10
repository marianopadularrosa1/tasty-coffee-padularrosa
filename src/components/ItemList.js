import Item from "./Item";


export default function ItemList({productos}) {
  
  
    return (
      <>
       
          <div className="row container-fluid" style={{width:"100%", height:"100%"}}>
            {productos.map((eachProduct,i) => (
              <Item key={i} item={eachProduct} />
            ))}
             
          </div>
      
      </>
    )
  }

