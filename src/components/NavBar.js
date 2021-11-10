import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <p className="navbar-brand" href="#">
            TastyCoffee
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/products" class="nav-link active">Productos</Link>
              </li>
              <li className="nav-item">
                <Link to="/category/grano" class="nav-link active">Grano</Link>
              </li>
              <li className="nav-item">
                <Link to="/category/molido" class="nav-link active">Molido</Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" class="nav-link active">Quienes Somos</Link>
              </li>
            </ul>
          </div>
          <CartWidget />
          
        </div>
      </nav>
    );
  }
}
