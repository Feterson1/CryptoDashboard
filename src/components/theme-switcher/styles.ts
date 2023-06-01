import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { tokens } from "../../theme";


export const useStyles = makeStyles((theme:Theme)=>{

    const colors = tokens(theme.palette.mode);
    return ({
    
       
        iconBlock:{
            paddingRight: '37px',
            paddingTop: '10px',
          
        },
        themeIcon:{
            marginRight: '45px',
        },
       
       
    })
})