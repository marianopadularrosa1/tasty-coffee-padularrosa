import { BrowserRouter, Switch, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import { useState } from "react";
import Home from "./pages/Home";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ChakraProvider } from "@chakra-ui/react";
import { CustomProvider } from "./components/cartContext";
import Cart from "./components/Cart"
import { contexto } from "./components/cartContext";

function App() {
  //console.log('CART HOME'+JSON.stringify(contexto));

  return (
    <ChakraProvider>
      <BrowserRouter>
      <CustomProvider>
        <NavBar />
        <Switch>
          <Route  path="/" component={Home} exact/>
          <Route exact path="/products" component={ItemListContainer}/>
          <Route exact path="/category/:categoryId" component={ItemListContainer}/>
          <Route exact path="/item/:id" component={ItemDetailContainer} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </CustomProvider>
      </BrowserRouter>
     
      <Footer nombreMarca="TastyCoffee" anio={2021}></Footer>
    </ChakraProvider>
  );
}

export default App;
