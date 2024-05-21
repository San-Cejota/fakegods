import React from "react";
import NIKE  from "../../images/img01.jpg";

export const ProductoItem = ({
    id,
    title,
    price,
    image,
    category,
    cantidad
}) =>{
    
    return (
        <div className="producto">
        <a href="">
            <div className="producto_img">
                <img src={image} alt={title}></img>
            </div>
        </a>
        <div className="producto_footer">
            <h1>{title}</h1>
            <p>{category}</p>
            <p className="precio">${price}</p>
        </div>
        <div className="button">
            <button className="btn">Añadir al carrito</button>
            <div>
                <a href="" className="btn">
                    Vista
                </a>
            </div>
        </div>
        </div>
    );
};