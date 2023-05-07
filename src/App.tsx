import React from 'react';
import Home from './components/home';
import {Route,Routes} from 'react-router-dom';
import PrivateRoute from './utils/router/privateRoute';
import AuthRootComponent from './components/auth/authRootComponent';
import { ColorModeContext,useMode } from './theme';
import { CssBaseline,ThemeProvider } from '@mui/material';




function App() {


  const [theme,colorMode] = useMode();

  return (

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme = {theme}>
        <CssBaseline/>
      <div className="App">
      
      <Routes>
        <Route element = {<PrivateRoute/>}>
        <Route path='/' element = {<Home/>}/>
        </Route>
        <Route path='login' element = {<AuthRootComponent/>}/>
        <Route path='register' element = {<AuthRootComponent/>}/>
      </Routes>
     


    </div>
      </ThemeProvider>
    
    </ColorModeContext.Provider>
    
  );

}

export default App;
