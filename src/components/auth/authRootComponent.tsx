import React from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import RegisterPage from './register/register';
import LoginPage from './login/login';
import './style.scss';
import { Box } from '@mui/system';
import { instance } from '../../utils/axios';
import { useAppDispatch } from '../../utils/hook';
import { login } from '../../store/slice/auth/auth';
import { AppErrors } from '../common/errors';
import { useForm } from 'react-hook-form';
import { LoginSchema, RegisterSchema } from '../../utils/yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { useStyles } from './styles';

const AuthRootComponent: React.FC = (): JSX.Element => {
    
   
    const location = useLocation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {register,
        formState:{errors},
        handleSubmit} = useForm({
         
            resolver: yupResolver(location.pathname === '/login'? LoginSchema : RegisterSchema),
        })
    const classes = useStyles();


        console.log('Errors',errors)
    const handleSubmitForm = async (data: any) => {
        console.log('data',data)
        if (location.pathname === '/login') {
            try {
                const userData = {
                    email: data.email,
                    password: data.password,
                }
                const user = await instance.post('auth/login', userData)
                await dispatch(login(user.data))
                navigate('/')
            }catch (e) {
                return e
            }
        } else {
            if (data.password === data.confirmPassword) {
                try {
                    const userData = {
                        firstName: data.firstName,
                        userName: data.userName,
                        email: data.email,
                        password: data.password,
                    }
                   
                    const newUser = await instance.post('auth/register', userData)
                    await dispatch(login(newUser.data))
                    navigate('/')
                }catch (e) {
                    console.log(e)
                    return e
                }
            } else {
                throw new Error(AppErrors.PasswordDoNotMatch)
            }
        }
    }

    return(
        <div className={classes.root}>
            <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth={640}
                    margin='auto'
                    padding={5}
                    borderRadius={5}
                    boxShadow={'-3px -2px 20px 1px #202020'}
                >
                    {
                        location.pathname === '/login'
                            ? <LoginPage
                               
                                navigate={navigate}
                                register={register}
                                errors={errors}
                            /> : location.pathname === '/register'
                                ? <RegisterPage
                                
                                    register={register}
                                    errors={errors}
                                    navigate={navigate}
                                />
                                : null
                    }
                </Box>
            </form>
        </div>
    )
};

export default AuthRootComponent;

