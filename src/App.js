import { BrowserRouter, Switch, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/products"></Route>
          <Route exact path="/category/:categoryid"></Route>
          <Route exact path="/item/:id"></Route>
          <Route exact path="/cart"></Route>
        </Switch>
      </BrowserRouter>
      <header className="App-header">
         <ItemListContainer greetings="GREETINGS" />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Footer nombreMarca="TastyCoffee" anio={2021}></Footer>
    </div>
  );
}

export default App;
