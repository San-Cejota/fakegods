import React from "react";
import {Route, Routes} from "react-router-dom";
import Inicio from "./Inicio/Inicio";
import ProductosListen from "./productos/productos";
import Contacto  from "./contacto/contacto";

export const Paginas = () =>{
    return (
    <section>
        <Routes>
            <Route path="/" exact Component={Inicio} />
            <Route path="/productos" exact Component={ProductosListen} />
            <Route path="/" exact Component={Contacto}/>
        </Routes>
    </section>
    )
}
export default Paginas;