import React from 'react';
import { InputS } from "../input/input";
import { FormS } from '../form/style';
import { ButtonS } from '../button/style';
import { LoginS } from './style';

const Login = () => {
    return ( 
        
            <FormS>
            <InputS placeholder='Ingrese su código' type="text" />
                <InputS placeholder='Contraseña' type="password" name="" id="" />
                <ButtonS bgColorHover="#EC2525" bgColor="#F05454">Iniciar sesion</ButtonS>
            </FormS>
        
        
     );
     
    }
export default Login;
