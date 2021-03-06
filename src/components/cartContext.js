import { createContext , useState } from "react";
export const contexto = createContext()
export const {Provider} = contexto
export const CustomProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const agregarProducto = (cantidad,producto) => {
        if(isInCart(producto,cart)){
            //agregar catidad al array de cart
            for(let i=0; i<cart.length; i++){
                if(cart[i].producto.id === producto.id){
                    cart[i].cantidad += cantidad;
                    if(cart[i].cantidad===0){
                        cart.splice(i, 1);
                    }
                }
            }
        } 
        else{
            const nuevoProducto = {cantidad,producto}
            const copia = [...cart]
            copia.push(nuevoProducto)
            setCart( copia )
        }
       
    }

    const isInCart = (producto, arrayProductos) => {
        if( arrayProductos.find(x => x.producto.id===producto.id)){
            return true
        }
        else {return false}
    }

    const borrarProducto = (producto) => {
        if(isInCart(producto,cart)){
            //agregar catidad al array de cart
            for(let i=0; i<cart.length; i++){
                if(cart[i].producto.id === producto.id){
                    cart.splice(i, 1); 
                }
            }
        } 
    }

    const vaciar = () => {
        setCart([])
    }

    const cartWidgetCant=()=>{
        let cantidadTotal = 0
        for(let i=0; i<cart.length; i++){
            cantidadTotal+= cart[i].cantidad
        }
        return cantidadTotal
    }
    const cartWidgetAmount=()=>{
        let amount = 0
        for(let i=0; i<cart.length; i++){
            amount+= (cart[i].cantidad * cart[i].producto.price)
        }
        return amount
    }


    const valor_de_contexto = { 
        cart : cart , 
        setCart : setCart , 
        agregarProducto : agregarProducto , 
        borrarProducto : borrarProducto , 
        vaciar : vaciar ,
        cartWidgetCant: cartWidgetCant,
        cartWidgetAmount: cartWidgetAmount,
    }

    return (
        <Provider value={valor_de_contexto}>
            {children}
        </Provider>
    )
}