import React, { useState } from 'react'

import {FormGroup, Grid, Typography,FormControlLabel, Checkbox,useTheme, Button} from '@mui/material';
import { useStyles } from './styles';
import { tokens } from '../../theme';
import AppButton from '../app-button/appButton';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../utils/hook';
import { deleteUser } from '../../store/thunks/auth/auth';



const DeleteUserComponent:React.FC = ():JSX.Element => {

    const [checked,setChecked] = useState(false);
    const theme = useTheme();
   
    const colors = tokens(theme.palette.mode);

    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(deleteUser());

        sessionStorage.removeItem('token');
        sessionStorage.removeItem('name');
        navigate('/login');
    }

  return (

    <Grid 
    container
    className={classes.root}
    
    >
        <Grid 
        item 
        className={classes.tabHeading}>
            <Typography variant='h2'>Удаление аккаунта</Typography>
        </Grid>
        <Grid
        item
        className={classes.alertMessage}
        >
            <Typography variant='body1'>Уважаемый пользователь, удаляя свой аккаунт, 
            вы удаляете всю персональную информацию. 
            После удаление все сохраненая вами информация будет недоступна. </Typography>

        </Grid>
        <Grid 
        item
        className={classes.checkBoxBlock}
        >
            <FormGroup
            
            >
                <FormControlLabel
                sx={{
                    justifyContent:'center',
                }} 
                control={<Checkbox 
                    checked={checked}
                    onChange={()=>{setChecked(!checked)}}
                    sx={{
                    color: colors.blue,
                    '&.Mui-checked':{
                        color: colors.blue,
                    }
                

                }} defaultChecked />} 
                label="Я соглашаюсь" />
                
        </FormGroup>

        </Grid>
        <Grid 
        item
        className={classes.buttonBlock}
        >
            <Button
                    color="success"
                    variant="outlined"
                    disabled={!checked}
                    onClick={handleDelete}
                >
                  Удалить аккаунт
                </Button>

        </Grid>

    </Grid>

  )
}


export default DeleteUserComponent;