import { useContext } from "react";
import { contexto } from "./cartContext";
const CartWidget =()=> {
    const {cartWidgetCant} = useContext(contexto)
 
        return (
            <>
            <span class="material-icons">shopping_cart</span>
            <span >{cartWidgetCant()}</span>
            </>
        )
    
} 

export default CartWidget