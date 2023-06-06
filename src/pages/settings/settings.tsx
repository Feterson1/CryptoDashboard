import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { Grid, useTheme } from '@mui/material'
import TabPanel from '../../components/tab-panel/tabPanel'
import { tabProps } from '../../utils/helpers'
import { useAppDispatch } from '../../utils/hook'
import { tokens } from '../../theme'
import { useStyles } from './styles'
import SettingsPersonalInfoComponent from '../../components/settings-personal-info/settingsPersonalInfo'
import { getPublicUserInfo } from '../../store/thunks/auth/auth'



const SettingsComponent = () =>{

    const [value,setValue] = useState(0);
    
    const dispatch = useAppDispatch()
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const classes = useStyles()

    useEffect(()=>{
        dispatch(getPublicUserInfo())
    },[dispatch])

    const handleChange = (event: React.SyntheticEvent , newValue: number) => {
        setValue(newValue);

    }


    return(
         <Grid className={classes.root}>
        <Box className={classes.tabsWrapper}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Settings tabs"
                centered
                textColor="secondary"
                TabIndicatorProps={{
                    style: {
                        backgroundColor: colors.blue,
                    },
                }}
            >
                <Tab label="Персональные данные" {...tabProps(0)} />
                <Tab label="Изменить пароль" {...tabProps(1)} />
                <Tab label="Удалить аккаунт" {...tabProps(2)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
           <SettingsPersonalInfoComponent/>
        </TabPanel>
        <TabPanel value={value} index={1}>
           2
        </TabPanel>
        <TabPanel value={value} index={2}>
          3
        </TabPanel>
    </Grid>
    )
}

export default SettingsComponent;