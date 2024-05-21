import { createContext, useEffect, useState } from "react";
import Data from "../Data.js";

export const DataContext = createContext();

export const DataProvidier = (props) => {
    const [productos , setProductos] = useState([])

    useEffect(() =>{
        const producto = Data.items
        if(producto){
            setProductos(producto)
        }else{
            setProductos([producto])
        }
        setProductos(producto)
    }, [])
    const value = {
        productos : [productos]
    }

    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}