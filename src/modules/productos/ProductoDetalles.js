import React, {useState,useEffect, useContext} from 'react'
import { DataContext } from "../../context/DataProvidier";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./Productoitem";

export const ProductoDetalles = ( ) => {
    const value= useContext(DataContext)
    const [productos] = value.productos;
    const params = useParams();
    const aggCarrito = value.aggCarrito;
    const [url, setUrl] = useState(0);
    const [images, setImages] = useState('')
    const [detalles, setDetalles] = useState([]);
    let item = 0

    useEffect(()=> {
        productos.forEach(producto =>{
            item = 0
            if(producto.id ===parseInt(params.id)){
                setDetalles(producto)
                setUrl(0)
            }
        })
    },[params.id, productos])

    // useEffect(() =>{
    //     const values = `${detalles.img1}${url}${detalles.img2}`
    //     setImages(values);
    // }, [url, params.id])

    // const handleInput = e =>{
    //     const number = e.target.value.toString().padStart(2, '01');
    //     setUrl(number) 
    //     console.log(number);
    // }

    return (
        <>
        {
        <div className='detalles'>
            <h2>{detalles.title}</h2>
            <p className='price'>${detalles.price}</p>
            <div className='grid'>
                <p className='nuevo'>Nuevo</p>
                <div className='size'>
                    <select aria-placeholder='Tamano'>
                        <option value={1}>1</option>
                        <option value={1}>2</option>
                        <option value={1}>3</option>
                        <option value={1}>4</option>
                        <option value={1}>5</option>
                        <option value={1}>6</option>
                        <option value={1}>7</option>
                        <option value={1}>8</option>
                        <option value={1}>9</option>
                    </select>
                    <p>Tamano</p>
                </div>
            </div>
            <button onClick={()=> aggCarrito(detalles.id)} >Añadir al carrito</button>
            <img src={detalles.image} alt={detalles.title}></img>
            <div className='decription'>
                <p><b>Descripcion:</b> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque consequatur beatae iste alias 
                    maiores minus quo illum accusamus animi sed reprehenderit, et d
                    ebitis obcaecati, placeat perspiciatis dolorem facere quasi. Provident.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque consequatur beatae iste alias maiores minus quo
                    illum accusamus animi sed reprehenderit, 
                    et debitis obcaecati, placeat perspiciatis dolorem facere quasi. Provident.</p>
            </div>
        </div>
        }
        <h2 className='text-4xl font-sans font-bold text-center mt-20 bg-black text-white w-50 rounded-br-3xl rounded-s-3xl ml-96'>Productos Relacionados</h2>
        <div className="productos">
            {
                productos.map((producto) =>{
                    if ((item<6)&&(detalles.category === producto.category)) {
                        return <ProductoItem
                        key={producto.id}
                        id={producto.id}
                        title={producto.title}
                        price={producto.price}
                        image={producto.image}
                        category={producto.category}
                        cantidad={producto.cantidad}
                        />
                        
                    }
                })
            }
        
        </div>

        </>
    )
}

export default ProductoDetalles
