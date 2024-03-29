import React from 'react';
import {TextField,Typography, Box} from '@mui/material';
import AppLoadingButton from '../../loading-button/loadingButton';
import { useStyles } from './styles';
import { iPropsRegister } from '../../../common/types/auth';


const RegisterPage: React.FC <iPropsRegister> = (props: iPropsRegister ): JSX.Element => {

    const {register,errors,navigate,loading} = props;

    const classes = useStyles();

    
    return(
        <>
        <Typography variant="h2" textAlign='center'>Регистрация</Typography>
        <Typography variant="body1" marginBottom={3}  textAlign='center'>Введите данные для регистрации.</Typography>
        <Box marginBottom={2}>
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
        </Box>

        <AppLoadingButton type='submit' loading={loading}  variant="contained" >Регистрация</AppLoadingButton>

        <Box margin={'20px 0px'}>

        <Typography variant="body1" sx={{fontFamily:'Poppins',}}>Уже зарегистрированы?<span className={classes.incitingText} onClick={()=>navigate('/login')}>Авторизация</span></Typography>
        </Box>

       
    </>
    )
}

export default RegisterPage;