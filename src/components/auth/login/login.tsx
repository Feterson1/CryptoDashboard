import React,{Fragment}from 'react';
import {TextField,Button,Typography} from '@mui/material';
import { iPropsLogin } from '../../common/types/auth';


const LoginPage: React.FC <iPropsLogin> = (props: iPropsLogin) : JSX.Element => {

    const {navigate,register,errors} = props;

    
    return(
        <>
        
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Авторизация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введите ваш логин и пароль.</Typography>
            <TextField 
            error={!!errors.email}
            fullWidth={true} 
            margin='normal' 
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
            placeholder='Введите ваш email' 
            
            {...register('email',{
                required: 'Это обязательное поле',
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            helperText={errors.email ? `${errors.email.message}` : ''}
            
            />

            <TextField 
            error={!!errors.password}
            type='password' 
            fullWidth={true} 
            margin='normal' 
            id="outlined-basic" 
            label="Password" 
            variant="outlined" 
            placeholder='Введите ваш пароль' 
            
             {...register('password',{
                required: 'Это обязательное поле',
                minLength: 6,
            })}
            helperText={errors.password ? `${errors.password.message}` : ''}
            
            />
            <Button type='submit' sx={{fontFamily:'Poppins',marginTop:2,width:'60%',marginBottom:2}}  variant="contained" >Войти</Button>
            <Typography variant="body1" sx={{fontFamily:'Poppins',}}>У вас нет аккаунта?<span className='insicitingText' onClick={()=>navigate('/register')}>Регистрация</span></Typography>
        </>

    )
}

export default LoginPage;