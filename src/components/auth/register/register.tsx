import React from 'react';
import {TextField,Button,Typography} from '@mui/material';
import { iPropsRegister } from '../../common/types/auth';

const RegisterPage: React.FC <iPropsRegister> = (props: iPropsRegister ): JSX.Element => {

    const {setEmail,setPassword,setRepeatPassword,setUserName,setFirstName} = props;

    
    return(
        <>
        <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Регистрация</Typography>
        <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введите данные для регистрации.</Typography>
        <TextField fullWidth={true} margin='normal' id="outlined-basic" label="Имя" variant="outlined" placeholder='Введите ваше имя'

         onChange={(e)=> setFirstName(e.target.value )} />

        <TextField fullWidth={true} margin='normal' id="outlined-basic" label="UserName" variant="outlined" placeholder='Введите ваш ник'
        onChange={(e)=> setUserName(e.target.value )} />

        <TextField fullWidth={true} margin='normal' id="outlined-basic" label="Email" variant="outlined" placeholder='Введите ваш email'
        onChange={(e)=> setEmail(e.target.value )} />

        <TextField type='password' fullWidth={true} margin='normal' id="outlined-basic" label="Password" variant="outlined" placeholder='Введите ваш пароль'
        onChange={(e)=> setPassword(e.target.value )} />

        <TextField type='password' fullWidth={true} margin='normal' id="outlined-basic" label="Password" variant="outlined" placeholder='Повторите ваш пароль'
        onChange={(e)=> setRepeatPassword(e.target.value )} />

        <Button type='submit' sx={{fontFamily:'Poppins',marginTop:2,width:'60%',marginBottom:2}}  variant="contained" >Регистрация</Button>
        <Typography variant="body1" sx={{fontFamily:'Poppins',}}>Уже зарегистрированы?<span className='insicitingText'>Авторизация</span></Typography>
    </>
    )
}

export default RegisterPage;