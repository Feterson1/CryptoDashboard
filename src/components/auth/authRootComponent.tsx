import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import RegisterPage from './register/register';
import LoginPage from './login/login';
import './style.scss';
import { Box } from '@mui/system';


const AuthRootComponent = () => {


        const [email,setEmail] = useState('');
        const [password,setPassword] = useState('');
        const handleSubmit = async (e: { preventDefault: () => void;}) =>{
            e.preventDefault();
            console.log(email);
        }

        const location = useLocation();

    return(
        <div className='root'>
            <form className="form" onSubmit={handleSubmit}>
                <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
                maxWidth={640}
                margin='auto'
                padding={5}
                borderRadius={5}
                boxShadow={'5px 5px 10px #ccc'}
                
                >
                {location.pathname === '/login' ? <LoginPage setEmail={setEmail} setPassword={setPassword} /> :location.pathname ==='/register'? <RegisterPage/> : null}
                </Box>
            </form>

        </div>
    )

  
}

export default AuthRootComponent;