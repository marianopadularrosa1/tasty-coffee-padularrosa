import {useState,useEffect} from 'react'

const Counter = ({onClick}) => {

    const [contador,setContador] = useState(0)

    /* useEffect(()=>{
        console.log("Se reejecuto el contador")
    },[]) */

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    return (
        <div>
            <p>El contador va : {contador} </p>          
            <button onClick={sumar} className="material-icons">add</button>  
            <button onClick={restar} className="material-icons">remove</button>  
            <button onClick={ () => onClick(contador) }>confirmar compra</button>
        </div>
    )
}

export default Counter