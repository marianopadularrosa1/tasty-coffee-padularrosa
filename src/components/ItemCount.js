import {useState} from 'react'

const ItemCount = ({onAdd}) => {

    const [contador,setContador] = useState(0)

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    const confirmar = () => {
        onAdd(contador)
    }

    return (
        <div>
            <p>Cantidad Seleccionada : {contador} </p>          
            <button class="btn btn-primary" onClick={sumar} >Sumar</button>  
            <button class="btn btn-primary" onClick={restar} >Restar</button>  
            <button class="btn btn-primary" onClick={ confirmar }>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount