import React from 'react';
import {TextField,Typography} from '@mui/material';
import { iPropsLogin } from '../../common/types/auth';
import AppButton from '../../app-button/appButton';
import { useStyles } from './styles';


const LoginPage: React.FC <iPropsLogin> = (props: iPropsLogin) : JSX.Element => {

    const {navigate,register,errors} = props;

    const classes = useStyles();
    

    
    return(
        <>
        
            <Typography variant="h2"  textAlign='center' fontSize={'32px'}>Авторизация</Typography>
            <Typography variant="body1" marginBottom={3}  textAlign='center'>Введите ваш логин и пароль.</Typography>
            <TextField 
            error={!!errors.email}
            fullWidth={true} 
            margin='normal' 
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
            placeholder='Введите ваш email' 
            
            {...register('email',)}
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
            
             {...register('password',)}
            helperText={errors.password ? `${errors.password.message}` : ''}
            
            />
            <AppButton type='submit' sx={{fontFamily:'Poppins',marginTop:2,width:'60%',marginBottom:2}}  variant="contained" >Войти</AppButton>
            <Typography variant="body1" >У вас нет аккаунта?<span className={classes.incitingText} onClick={()=>navigate('/register')}>Регистрация</span></Typography>
        </>

    )
}

export default LoginPage;