import { createContext, useEffect, useState } from "react";
import Data from "../Data.js";

export const DataContext = createContext();

export const DataProvidier = (props) => {
    const [productos , setProductos] = useState([])
    const [menu, setMenu] = useState(false);
    const [ carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() =>{
        const producto = Data.items
        if(producto){
            setProductos(producto)
        }else{
            setProductos([producto])
        }
        setProductos(producto)
    }, [])

    const aggCarrito = (id) =>{
        const check = carrito.every(item =>{
            return item.id !==id;
        })
        if(check){
            const data = productos.filter(producto =>{
                return producto.id === id
            })
            setCarrito([...carrito, ...data])
        }else{
            alert("el producto ya se encuentra agregado al carrito")
        }
    }

    useEffect(()=>{
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
        if(dataCarrito){
            setCarrito(dataCarrito)
        }
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCarrito', JSON.stringify(carrito))
    }, [carrito])

    useEffect(()=>{
        const getTotal = ()=>{
            const res = carrito.reduce((prev,item) =>{
                return prev + (item.price * item.cantidad);
            },0)
            setTotal(res)
        }
        getTotal()
    },[carrito])

    const value = {
        productos : [productos],
        menu: [menu, setMenu],
        aggCarrito: aggCarrito,
        carrito: [carrito, setCarrito],
        total: [total, setTotal]
    }

    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}