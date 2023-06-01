import React from "react";
import { AppBar, Grid,Toolbar, Typography, } from "@mui/material";
import { useAppSelector } from "../../utils/hook";
import {MenuOutlined} from '@mui/icons-material';
import { useStyles } from "./styles";
import FlexBetween from "../flexBetween";
import { iTopBarProps } from "../common/types/topbar";
import ThemeSwitcherComponent from "../theme-switcher/themeSwitcher";
import SearchBarComponent from "../search-bar/searchBar";
;

const TopBarComponent: React.FC<iTopBarProps> = (props:iTopBarProps): JSX.Element => {

    const {isOpen,setIsOpen,isNoneMobile} = props;

const user = useAppSelector( (state) => state.auth.user);


const classes = useStyles();


    return(

        <AppBar className={classes.root} position="static">
            <Toolbar className={classes.toolbar}>
            <Grid container justifyContent={'space-between'} alignItems={'center'}>
           <Grid item sm={3} lg={3}>
           <FlexBetween>
                <MenuOutlined className={classes.menuIcon} onClick={() => {setIsOpen(!isOpen)}}/>
                <Typography variant="h3">
                    Welcome {sessionStorage.getItem('name')}
                </Typography>
            </FlexBetween>
           </Grid>
            {isNoneMobile &&( 
                 <Grid item display={'flex'} justifyContent={'flex-end'} sm={9} lg={9}>
                    <ThemeSwitcherComponent/>
                    <SearchBarComponent/>
                
             </Grid>
                    )}
            </Grid>
            </Toolbar>
        </AppBar>


        
    )


}


export default TopBarComponent;