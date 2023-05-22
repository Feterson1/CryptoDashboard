import { FieldValues, UseFormRegister, FieldErrors} from "react-hook-form/dist/types"


export interface iPropsLogin <
TFieldValues extends FieldValues = FieldValues,
TContext = any,
>{

  

    navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>;
    errors: FieldErrors<TFieldValues>;
    loading: boolean;


}
export interface iPropsRegister <
TFieldValues extends FieldValues = FieldValues,
TContext = any, 
>{

    
    register: UseFormRegister<TFieldValues>;
    errors: FieldErrors<TFieldValues>;

    navigate: (to: string) => void
    loading: boolean
}

export interface iAuthState {
    user: iPublicUser,
    isLogged: boolean,
    isLoading: boolean,
}

interface iPublicUser{
    id: number | null,

    firstName: string,

    userName: string,
    
    email: string,

    createdAt: string,

    updatedAt: string,

    watchlist: [iWatchList],
}

interface iWatchList{
    id: number | null,

    name: string,

    assetId: string,

    createdAt: string,

    updatedAt: string,

    user: number | null,


}

export interface iLoginData{
    email: string
    password: string
}

export interface iRegisterData{
    email: string
    password:string
    userName: string
    firstName: string
}