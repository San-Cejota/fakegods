import React from "react";
import {Route, Routes} from "react-router-dom";
import Inicio from "./Inicio/Inicio";
import ProductosListen from "./productos/productos";
import { Contacto } from "./contacto/Contacto";
import ProductoDetalles  from "./productos/ProductoDetalles";

export const Paginas = () =>{
    return (
    <section>
        <Routes>
            <Route path="/" exact Component={Inicio} />
            <Route path="/productos" exact Component={ProductosListen} />
            <Route path="/Contacto" exact Component={Contacto}/>
            <Route path="/producto/:id" exact Component={ProductoDetalles} />
        </Routes>
    </section>
    )
}
export default Paginas;