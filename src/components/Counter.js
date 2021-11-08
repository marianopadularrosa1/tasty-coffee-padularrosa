import {useState} from 'react'

const Counter = ({onAdd}) => {

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
            <p>El contador va : {contador} </p>          
            <button class="btn btn-primary" onClick={sumar} >Agregar</button>  
            <button class="btn btn-primary" onClick={restar} >Restar</button>  
            <button class="btn btn-primary" onClick={ confirmar }>confirmar compra</button>
        </div>
    )
}

export default Counter