import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contacto = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nt42baa', 'template_s57bft4', form.current, {
        publicKey: 'jXlInzdu8z9IQRzFb',}).then(() => {
            console.log('SUCCESS!');},
        (error) => {
            console.log('FAILED...', error.text);
        },
        );
    };

    return (
        <div className='flex justify-center items-center absolute mt-4 top-[10%] w-full h-[100vh]'>
            <div className='p-12 flex flex-col shadow-md shadow-gray-800 w-[50%] gap-y-8 rounded-md' style={{backgroundColor:'#5D5D81'}}>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <h2 className='text-3xl text-center text-white font-bold'>Contactanos</h2>
                </div>
                <div className='login_body flex flex-col gap-y-5 mt-9'>
                <input placeholder='Nombre' className='rounded-md bg-gray-200 text-slate-900 shadow-md shadow-gray-300 border-b-white p-1' type="text" name="user_name" />
                <input placeholder='Correo' className='rounded-md bg-gray-200 text-slate-900 shadow-md shadow-gray-300 border-b-white p-1' type="email" name="user_email" />
                <textarea placeholder='Mensaje' className='rounded-md bg-gray-200 text-slate-900 shadow-md shadow-gray-300 border-b-white p-1' name="message" />
                </div>
                <div className='flex justify-center'>
                <input className='bg-indigo-700 text-white py-2 rounded-md px-8 mt-9' type="submit" value="Send" />
                </div>
            </form>
            </div>
    </div>
    );
};