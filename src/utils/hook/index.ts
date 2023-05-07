import { useDispatch, useSelector,TypedUseSelectorHook} from "react-redux";
import { AppDispatch, RootState } from "../../store/store";



export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export const useAuth = () => {
    const {isLogged} = useAppSelector((state: RootState)=>state.auth);
    return isLogged;
}