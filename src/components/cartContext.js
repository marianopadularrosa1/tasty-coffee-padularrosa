import { createContext , useState } from "react";


export const contexto = createContext()

export const {Provider} = contexto

export const CustomProvider = ({children}) => {


    const [cart, setCart] = useState([])

    const agregarProducto = (cantidad,producto) => {
        console.log("Agregar:"+cantidad,"Producto:"+JSON.stringify(producto.name))
        if(isInCart(producto,cart)){
            //agregar catidad al array de cart
            for(let i=0; i<cart.length; i++){
                if(cart[i].producto.name === producto.name){
                    cart[i].cantidad += cantidad;
                    if(cart[i].cantidad===0){
                        cart.splice(i, 1);
                    }
                }
            }
        } 
        else{
            //agregar al producto con la cantidad
            setCart( [...cart , {cantidad,producto} ] )
        }
        console.log('CART--->'+JSON.stringify(cart))
    }

    const isInCart = (producto, arrayProductos) => {
        
        if( arrayProductos.find(x => x.producto.name===producto.name)){
            console.log('Encontro producto')
            return true
        }
        else {return false}
    }

    const borrarProducto = (producto) => {
        if(isInCart(producto,cart)){
            //agregar catidad al array de cart
            for(let i=0; i<cart.length; i++){
                if(cart[i].producto.name === producto.name){
                    cart.splice(i, 1); 
                }
            }
        } 
    }

    const vaciar = () => {
        setCart([])
    }


    const valor_de_contexto = { 
        cart : cart , 
        setCart : setCart , 
        agregarProducto : agregarProducto , 
        borrarProducto : borrarProducto , 
        vaciar : vaciar 
    }

    return (
        <Provider value={valor_de_contexto}>
            {children}
        </Provider>
    )
}