import { BrowserRouter, Switch, Route } from "react-router-dom";


import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import Home from "./pages/Home";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ChakraProvider } from "@chakra-ui/react";
import { CustomProvider } from "./components/cartContext";
import Cart from "./components/Cart"
import { Box} from "@chakra-ui/react"

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
      
      <CustomProvider>
        <NavBar />
        <Box style={{display: "block", width: "100%", flex:"1",position: "relative", paddingBottom:"20px"}}>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route exact path="/products" component={ItemListContainer}/>
          <Route exact path="/category/:categoryId" component={ItemListContainer}/>
          <Route exact path="/item/:id" component={ItemDetailContainer} />
          <Route path="/cart" component={Cart} />
        </Switch>
        </Box>
      </CustomProvider>
      </BrowserRouter>
      <Footer className="footer" nombreMarca="TastyCoffee" anio={2021}></Footer>
    </ChakraProvider>
  );
}

export default App;
