import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import RegisterPage from './register/register';
import LoginPage from './login/login';
import './style.scss';
import { Box } from '@mui/system';
import { instance } from '../../utils/axios';


const AuthRootComponent: React.FC = (): JSX.Element => {


        const [email,setEmail] = useState('');
        const [password,setPassword] = useState('');
        const [repeatPassword,setRepeatPassword] = useState('');
        const [firstName,setFirstName] = useState('');
        const [userName,setUserName] = useState('');

        const handleSubmit = async (e: { preventDefault: () => void;}) =>{
            e.preventDefault();

           if(location.pathname === '/login'){
            const userData = {
                email,
                password,

            }
            const  user = await instance.post('auth/login',userData);
            console.log(user.data);
           }else{

           if(password === repeatPassword){
            const userData = {
                firstName,
                userName,
                email,
                password,
            }

            const newUser = await instance.post('auth/register',userData);
            console.log(newUser.data);
           }else{
            throw new Error('У вас не совпадают пароли')
           }
           }
          
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
                {location.pathname === '/login' 
                ? <LoginPage setEmail={setEmail} setPassword={setPassword} /> :location.pathname ==='/register'
                ? <RegisterPage setEmail={setEmail} setPassword={setPassword} 
                setUserName={setUserName} setFirstName={setFirstName} 
                setRepeatPassword={setRepeatPassword} /> : null}
                </Box>
            </form>

        </div>
    )

  
}

export default AuthRootComponent;