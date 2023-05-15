import React from 'react';
import {TextField,Button,Typography} from '@mui/material';
import { iPropsRegister } from '../../common/types/auth';

const RegisterPage: React.FC <iPropsRegister> = (props: iPropsRegister ): JSX.Element => {

    const {register, errors, navigate} = props;

    
    return(
        <>
        <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Регистрация</Typography>
        <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введите данные для регистрации.</Typography>
        <TextField
        error={!!errors.firstName}
        fullWidth={true} 
        margin='normal' 
        id="outlined-basic" 
        label="Имя" 
        variant="outlined" 
        placeholder='Введите ваше имя'
        {...register('firstName',)}
        helperText={errors.firstName ? `${errors.firstName.message}` : ''}

         />

        <TextField 
        error={!!errors.userName}
        fullWidth={true} 
        margin='normal' 
        id="outlined-basic" 
        label="UserName" 
        variant="outlined" 
        placeholder='Введите ваш ник'
        {...register('userName',)}
        helperText={errors.userName ? `${errors.userName.message}` : ''}
        />

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

        <TextField 
        error={!!errors.confirmPassword}
        type='password' 
        fullWidth={true} 
        margin='normal' 
        id="outlined-basic" 
        label="Password" 
        variant="outlined" 
        placeholder='Повторите ваш пароль'
        {...register('confirmPassword',)}
        helperText={errors.confirmPassword ? `${errors.confirmPassword.message}` : ''}
         />

        <Button type='submit' sx={{fontFamily:'Poppins',marginTop:2,width:'60%',marginBottom:2}}  variant="contained" >Регистрация</Button>
        <Typography variant="body1" sx={{fontFamily:'Poppins',}}>Уже зарегистрированы?<span className='insicitingText' onClick={()=>navigate('/login')}>Авторизация</span></Typography>
    </>
    )
}

export default RegisterPage;