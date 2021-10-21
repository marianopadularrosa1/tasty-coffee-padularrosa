import ItemCount from "./ItemCount";


export default function ItemListContainer({greetings}) {
  const onAdd = (producto) => {
    console("agregaron un producto", producto);
  };
  const stock = 8;
 
  return (
    <>
      <p >{greetings}</p> 
      <ItemCount onAdd={onAdd} initial={0} stock={parseInt(stock)} />
    </>
  );

}
