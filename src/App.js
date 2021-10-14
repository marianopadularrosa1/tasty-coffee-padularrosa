import { BrowserRouter, Switch, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
          </Route>
          <Route exact path="/products">
          </Route>
          <Route exact path="/category/:categoryid">
          </Route>
          <Route exact path="/item/:id">
          </Route>
          <Route exact path="/cart">
          </Route>
        </Switch>
      </BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
