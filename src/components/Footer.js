import React from "react"
import { Box} from "@chakra-ui/react"

const Footer = ({nombreMarca,anio}) => {

    
    return (
        <Box maxW="sm4" borderRadius="lg" overflow="hidden">
            {nombreMarca} Todos los derechos reservados {anio} Copyright &copy;
        </Box>
    )
}

export default Footer
