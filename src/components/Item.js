import { Link } from "react-router-dom";
import { Center,Box,Badge} from "@chakra-ui/react"
// se le dice a un componente bruto
// un componente que no tiene estado
// que solo recibe unas propiedades y las pinta
export default function Item({ item }) {
  return (
    <>
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" display="center">
    
        <div  className="card " style={{ border: "1px solid black" }}>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          backgroundColor="grey"
          color="white"
        >
          {item.title}
        </Box>
          
          <div className="card-body">
            <p className="card-text">{item.description}</p>
            <Center>
            <img
              src={`${item.img}`}
              className="card-img-top"
              alt="..."
              style={{ height: 150, width: 150 }}
            />
            </Center>
            <Badge>{item.badge}</Badge>
          </div>
          <Link to={`/item/${item.id}`} type="button" className="btn btn-primary">
            {" "}
            Ver detalle del producto
          </Link>
        </div>
      
      </Box>
    </>
  );
}
