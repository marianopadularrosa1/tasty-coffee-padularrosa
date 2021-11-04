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
function App() {
  const [cantidad, setCantidad] = useState();

  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route  path="/" component={Home} exact/>
           
          <Route exact path="/products" component={ItemListContainer}/>
          <Route exact path="/category/:categoryId" component={ItemListContainer}/>
          <Route exact path="/item/:id" component={ItemDetailContainer} />
          <Route exact path="/cart"></Route>
        </Switch>
      </BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Footer nombreMarca="TastyCoffee" anio={2021}></Footer>
    </ChakraProvider>
  );
}

export default App;
