import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import {Box, Grid, TextField} from '@mui/material';
import AppLoadingButton from '../loading-button/loadingButton';
import { useStyles } from './styles';

import { updatePublicUserInfo } from '../../store/thunks/auth/auth';



const  SettingsPersonalInfoComponent = () => {

    const dispatch = useAppDispatch();
    const classes = useStyles();

    const [name,setName] = useState('');
    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');

    const {user} =useAppSelector((state) => state.auth.user);

    console.log(user);
    


    useEffect(()=>{

        if(user){
            setName(user.firstName)
            setUserName(user.userName);
            setEmail(user.email);

        }
        
       


    },[user]);

    const handleSubmit = (e : any) => {
        e.preventDefault();
        const data = {
            firstName: name,
            userName: userName,
            email: email,
        }

        dispatch(updatePublicUserInfo(data));
    }


  return (
        <Grid
    component={'form'}
    noValidate
    autoComplete='off'
    className={classes.root}
    onSubmit={handleSubmit}

    >
        <Box className={classes.formWrapper}>

            <TextField
            className={classes.inputField}
            type='text'
            label='Имя'
            variant='outlined'
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            
            />
            <TextField
            className={classes.inputField}
            type='text'
            label='Username'
            variant='outlined'
            value={userName}
            onChange={(e)=>{setUserName(e.target.value)}}
            
            />
            <TextField
            className={classes.inputField}
            type='text'
            label='Email'
            variant='outlined'
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            
            />
            <Box className={classes.buttonBlock}>
                <AppLoadingButton type='submit'>Сохранить</AppLoadingButton>
            </Box>
            
        </Box>

    </Grid>
  )
}



export default SettingsPersonalInfoComponent;