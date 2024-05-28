import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {  DataContext} from "../../context/DataProvidier";
export const ProductoItem = ({
    id,
    title,
    price,
    image,
    category,
    cantidad
}) =>{
    
    const value= useContext(DataContext);
    const aggCarrito = value.aggCarrito;


    return (
        <div className="producto">
        <Link to={`/producto/${id}`}>
            <div className="producto_img">
                <img src={image} alt={title}></img>
            </div>
        </Link>
        <div className="producto_footer">
            <h1>{title}</h1>
            <p>{category}</p>
            <p className="precio">${price}</p>
        </div>
        <div className="button">
            <button className="btn" onClick={()=>aggCarrito(id)}>Añadir al carrito</button>
            <div>
            <Link to={`/producto/${id}`} className="btn">
                    Vista
                </Link>
            </div>
        </div>
        </div>
    );
};