import React, { useContext } from 'react'
import { DataContext } from "../../context/DataProvidier";
export const Carrito = () => {

    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;

    const toogleFalse = () =>{
        setMenu(false);
    }

    const resta = id =>{
        carrito.forEach(item => {
            if(item.id === id){
                item.cantidad ===1 ? item.cantidad = 1: item.cantidad -=1;
            }
            setCarrito([...carrito])
        })
    }
    const suma = id =>{
        carrito.forEach(item => {
            if(item.id === id){
                item.cantidad +=1;
            }
            setCarrito([...carrito])
        })
    }

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    const removeProduct = id =>{
        if(window.confirm('quieres borrar el producto?')){
            carrito.forEach((item, index) =>{
                if(item.id === id){
                item.cantidad = 1;
                carrito.splice(index, 1)
                }
            })
            setCarrito([...carrito])
        }
    }

    return (
        <div className={show1}>
            <div className={show2}>
                <div className='carrito_close' onClick={toogleFalse}> 
                <box-icon name="x"></box-icon>                    
                </div>
                <h2>Su carrito</h2>

                
                <div className='carrito_center'> 
                {

                    carrito.length === 0 ? <h2 style={{
                        textAlign: "center", 
                        fontSize:"3rem"
                    }}>Carrito vacio</h2>: <>
                    {

                    carrito.map((producto)=>(
                    <div className='carrito_item' key={producto.id}>
                        <img src={producto.image}></img>
                        <div className=''>
                            <h3>{producto.title}</h3>
                            <p className='price'>${producto.price}</p>
                        </div>
                        <div>
                            <box-icon name='up-arrow' type='solid' onClick={() => suma(producto.id)}></box-icon>
                            <p className='cantidad'>{producto.cantidad}</p>
                            <box-icon name='down-arrow' type='solid' onClick={() => resta(producto.id)}></box-icon>
                        </div>
                        <div className='remove__item' onClick={()=>removeProduct(producto.id)}>
                            <box-icon name='trash'></box-icon>
                        </div>
                    </div>
                    ))
                }
                </>}
                </div>
                <div className='carrito_footer'>
                    <h3>Total: ${total}</h3>
                    <button className='btn'>Pagar</button>
                </div>
            </div>
            
        </div>
    )
}