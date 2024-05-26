import React, {useContext} from "react";
import fg from "../../images/fg.png"
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvidier";

export const Header = () =>{
    const value = useContext(DataContext)
    const [menu,setMenu ] = value.menu;
    const [carrito] = value.carrito

    const toogleMenu = ( ) => {
        setMenu(!menu)
    }

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
            <div className="carrito_nav" onClick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item_total">{carrito.length}</span>
            </div>
        </header>
    )
}

export default Header;