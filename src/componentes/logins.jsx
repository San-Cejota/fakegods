import {useForm} from 'react-hook-form';

const Login = ()=> {
    const {register,formState:{errors}, handleSubmit} = useForm();
    const onSubmit = (data) =>{
        console.log(data);
    }
    return <div>
        <div className="formulario">
            <h2>Iniciar Sesion</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Usuario</label>
                    <br />
                    <input type="text" {...register('usuario',{
                        required:true,
                        maxLength:10
                    })} />
                    <br />
                    {errors.usuario?.type === 'required' && <p>El campo usuario es requerido </p> }
                    {errors.usuario?.type === 'maxLength' && <p>El campo usuario debe tener maximo 10 caracteres </p> }
                    <label htmlFor="">Contraseña</label>
                    <br />
                    <input type="password"  {...register('contraseña',{
                        required:true
                    }
                    )}/>
                    <br />
                    {errors.contraseña?.type === 'required' && <p>El campo contraseña es requerido </p>}
                </div>
                <input className='btn_enviar' type="submit" value="Iniciar" />
            </form>
        </div>
    </div>
}

export default Login;