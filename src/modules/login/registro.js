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
        <div className='flex justify-center items-center absolute mt-15 top-[10%] w-full h-[100vh] z-10'>
        <div className=' p-12 flex flex-col shadow-md shadow-gray-800 w-[50%] gap-y-8 rounded-md' style={{backgroundColor:'#5D5D81'}}>
            <div>
            <h1 className='text-2xl text-center text-white font-bold'>Registro</h1>
            </div>
        <div className='login_body flex flex-col gap-y-5'>
            <input className='rounded-md bg-gray-200 text-slate-900 shadow-md shadow-gray-300 border-b-white p-1' onChange={(evt)=>setData((prev)=>{return {...prev, apellido: evt.target.value}})} type='text' placeholder='Apellido'></input>
            <input className='rounded-md bg-gray-200 text-slate-900 shadow-md shadow-gray-300 border-b-white p-1' onChange={(evt)=>setData((prev)=>{return {...prev, nombre: evt.target.value}})} type='text' placeholder='Nombre'></input>
            <input className='rounded-md bg-gray-200 text-slate-900 shadow-md shadow-gray-300 border-b-white p-1' onChange={(evt)=>setData((prev)=>{return {...prev, edad: evt.target.value}})} type='number' placeholder='Edad'></input>
            <input className='rounded-md bg-gray-200 text-slate-900 shadow-md shadow-gray-300 border-b-white p-1' onChange={(evt)=>setData((prev)=>{return {...prev, usuario: evt.target.value}})} type='text' placeholder='Usuario'></input>
            <input className='rounded-md bg-gray-200 text-slate-900 shadow-md shadow-gray-300 border-b-white p-1' onChange={(evt)=>setData((prev)=>{return {...prev, password: evt.target.value}})} type='password' placeholder='Password'></input>
        </div>
        <div className='flex justify-center'>
            <button className='bg-indigo-700 text-white py-2 rounded-md px-8' onClick={sendData} type='submit'>Registrar</button>
        </div>
        </div>
        </div>
    )
}

export default Registro