import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom';
import fondo from "../../images/opc3.jpg";

function Login() {
    const [data, setData] = useState({
        user: "",
        password: ""
    })
    const [cookies, setCookie] = useCookies(["login"]);

    const Login = () =>{
        if(data.user != "" && data.password != ""){
            setCookie("login", "true");
        }
        else{
            alert("Llena todos los campos")
        }
    }

    return (

        <div className='flex justify-center items-center absolute mt-8 top-[10%] w-full h-[100vh]'>
            <div className=' p-12 flex flex-col shadow-md shadow-violet-800 w-[50%] gap-y-8 rounded-md' style={{backgroundColor:'#5D5D81'}}>
                    <div className='login_title'>
                        <h2 className='text-3xl text-center text-white font-bold'>Iniciar Session</h2>
                    </div>
                    <div className='login_body flex flex-col gap-y-5'>
                        <input className='rounded-md bg-gray-200 text-slate-900shadow-md shadow-gray-300 border-b-white p-1' onChange={(evt)=>setData((prev)=>{return {...prev, user: evt.target.value}})} type='text' placeholder='Usuario'></input>
                        <input className='rounded-md bg-gray-200 text-slate-900 shadow-md shadow-gray-300 border-b-white p-1' onChange={(evt)=>setData((prev)=>{return {...prev, password: evt.target.value}})} type='password' placeholder='Contraseña'></input>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-indigo-700 text-white py-2 rounded-md px-8' onClick={Login} type='submit'>Ingresar</button>
                    </div>
            </div>
        </div>
    )
}

export default Login;
