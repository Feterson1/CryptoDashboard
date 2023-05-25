import * as yup from 'yup'
import { AppErrors } from '../../components/common/errors'


export const LoginSchema = yup.object().shape({
    email: yup.string()
    .email(AppErrors.invalidEmail)
    .required(AppErrors.RequiredField),
    password: yup.string()
    .min(8,AppErrors.minLength)
    .required(AppErrors.RequiredField)
    .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,AppErrors.invalidPassword),
    
    

    
})

export const RegisterSchema = yup.object().shape({
    email: yup.string()
    .email(AppErrors.invalidEmail)
    .required(AppErrors.RequiredField),
    password: yup.string()
    .min(8,AppErrors.minLength)
    .required(AppErrors.RequiredField)
    .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,AppErrors.invalidPassword),
    confirmPassword: yup.string()
    .min(8,AppErrors.minLength)
    .required(AppErrors.RequiredField)
    .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,AppErrors.invalidPassword),
    firstName: yup.string()
    .required(AppErrors.RequiredField),
    userName: yup.string()
    .required(AppErrors.RequiredField),
    

    
})