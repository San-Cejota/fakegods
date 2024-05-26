import React, {useContext, useState, useEffect} from "react";
import fg from "../../images/fg.png"
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvidier";
import { useLocation } from "react-router-dom";

export const Header = ({login}) =>{
    const value = useContext(DataContext)
    const [menu,setMenu ] = value.menu;
    const [carrito] = value.carrito
    const [position, setPosition] = useState("login");
    const location = useLocation();

    useEffect(()=>{
        console.log(window.location.pathname);
        if(location.pathname == "/"){
            setPosition("Registro")
        }
        else{
            setPosition("Login")
        }

    }, [location.pathname])


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
            {
                login ?
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
                : <ul>
                    <li><Link to={position == "Registro" ? "/registro" : "/"}>{position}</Link></li>
                </ul>
            }
            
            <div className="carrito_nav" onClick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item_total">{carrito.length}</span>
            </div>
        </header>
    )
}

export default Header;