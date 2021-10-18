import React from "react"

const Footer = ({nombreMarca,anio}) => {

    console.log(nombreMarca);
    return (
        <div>
            {nombreMarca} Todos los derechos reservados {anio} Copyright &copy;
        </div>
    )
}

export default Footer
