import React from "react";
import fg from "../../images/fg.png"
import { Link } from "react-router-dom";

export const Header = () =>{
    return (
        <header>
            <Link to="/">
                <div className="menu">
                    <img src={fg} alt="logo" width="100px"></img>
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">INICIO</Link>
                </li>
                <li>
                    <Link to="/productos">PRODUCTOS</Link>
                </li>
                <li>
                    <Link to="/">CONTACTANOS</Link>
                </li>
            </ul>
            <div className="carrito">
                <box-icon name="cart"></box-icon>
                <span className="item_total">0</span>
            </div>
        </header>
    )
}

export default Header;