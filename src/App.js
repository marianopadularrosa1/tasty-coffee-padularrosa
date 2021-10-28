import { BrowserRouter, Switch, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import { useState } from "react";
import Home from "./pages/Home";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  const [cantidad, setCantidad] = useState();
 
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/products">
            <ItemListContainer  />
          </Route>
          <Route exact path="/category/:categoryid"></Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer/>
          </Route>
          <Route exact path="/cart"></Route>
        </Switch>
      </BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Footer nombreMarca="TastyCoffee" anio={2021}></Footer>
    </div>
  );
}

export default App;
