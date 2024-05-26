import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom';

function Registro() {
    const [data, setData] = useState({
        nombre: "",
        apellido: "",
        edad: "",
        usuario: "",
        password: ""
    })

    const [cookies, setCookie] = useCookies(["login"]);

    const sendData = () =>{
        if(data.nombre != "" && data.apellido != "" && data.edad != "" && data.usuario != "" && data.password != ""){
          setCookie("login", "true");  
        }
        else{
            alert("LLena todos los campos")
        }
    }

    return (
        <div>
        <div>
            <h1>Registro</h1>
        </div>
        <div>
            <input onChange={(evt)=>setData((prev)=>{return {...prev, nombre: evt.target.value}})} type='text' placeholder='Nombre'></input>
            <input onChange={(evt)=>setData((prev)=>{return {...prev, apellido: evt.target.value}})} type='text' placeholder='Apellido'></input>
            <input onChange={(evt)=>setData((prev)=>{return {...prev, edad: evt.target.value}})} type='number' placeholder='Edad'></input>
            <input onChange={(evt)=>setData((prev)=>{return {...prev, usuario: evt.target.value}})} type='text' placeholder='Usuario'></input>
            <input onChange={(evt)=>setData((prev)=>{return {...prev, password: evt.target.value}})} type='password' placeholder='Password'></input>
        </div>
        <div>
            <button onClick={sendData} type='submit'>Registrar</button>
        </div>
        <div className='fles justify-end'>
            <Link to={"/"} className='text-blue-400 text-lg'>Iniciar sesion</Link>
        </div>
        </div>
    )
}

export default Registro
