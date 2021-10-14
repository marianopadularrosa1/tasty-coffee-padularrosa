import { Component } from "react";
import cart from './001-shopping-cart.svg';
export default class CartWidget extends Component {
    render() {
        return (
            <img src={cart}  style={{ height: 53, width: 36 }} alt="cart"/>
        )
    }
} 