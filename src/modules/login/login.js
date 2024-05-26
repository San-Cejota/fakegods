import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom';

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
        <div className='flex justify-center items-center absolute mt-12 top-[10%] w-full h-[100vh]'>
            <div className='bg-black p-12 flex flex-col shadow-md shadow-gray-800 w-[50%] gap-y-8 rounded-md'>
                    <div className='login_title'>
                        <h2 className='text-2xl text-center text-white font-bold'>Login</h2>
                    </div>
                    <div className='login_body flex flex-col gap-y-5'>
                        <input className='rounded-md bg-gray-500 text-white shadow-md shadow-gray-300 border-b-white p-1' onChange={(evt)=>setData((prev)=>{return {...prev, user: evt.target.value}})} type='text' placeholder='User'></input>
                        <input className='rounded-md bg-gray-500 text-white shadow-md shadow-gray-300 border-b-white p-1' onChange={(evt)=>setData((prev)=>{return {...prev, password: evt.target.value}})} type='password' placeholder='Password'></input>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-gray-500 text-white py-2 rounded-md px-8' onClick={Login} type='submit'>Sign IN</button>
                    </div>
                    <div className='flex justify-end'>
                        <Link to={"/registro"} className='text-blue-600 text-md'>Registro</Link>
                     </div>
            </div>
        </div>
    )
}

export default Login;
