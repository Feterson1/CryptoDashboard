import React,{ useContext }from 'react'
import { useStyles } from './styles';
import { ColorModeContext } from "../../theme";
import {Grid, IconButton, useTheme } from '@mui/material';
import {LightMode,DarkMode,NotificationsNone} from '@mui/icons-material';

function ThemeSwitcherComponent() {

    const theme = useTheme();
    const colorMode: any = useContext(ColorModeContext);
    const classes = useStyles()

  return (
    <Grid className={classes.iconBlock}>
    <IconButton onClick={colorMode.toggleColorMode} className={classes.themeIcon}>
       {theme.palette.mode === 'dark'? (<DarkMode/>) : (<LightMode/>) }
    </IconButton>
    <IconButton>
        <NotificationsNone/>
   </IconButton>
</Grid>
  )
}

export default ThemeSwitcherComponent;