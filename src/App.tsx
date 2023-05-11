import React from 'react';
import Home from './components/home';
import {Route,Routes} from 'react-router-dom';
import PrivateRoute from './utils/router/privateRoute';
import AuthRootComponent from './components/auth/authRootComponent';
import { ColorModeContext,useMode } from './theme';
import { CssBaseline,ThemeProvider } from '@mui/material';
import LayoutComponent from './components/layout/LayoutComponent';
import WatchListComponent from './components/watchlist/watchlist';
import NewsComponent from './components/news/news';
import SettingsComponent from './components/settings/settings';




function App() {


  const [theme,colorMode] = useMode();

  return (

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme = {theme}>
        <CssBaseline/>
        

        <div className="App">
      <Routes>
        <Route element={<LayoutComponent/>}>
        <Route element = {<PrivateRoute/>}>
        <Route path='/' element = {<Home/>}/>
        <Route path='/watchlist' element = {<WatchListComponent/>}/>
        <Route path='/news' element = {<NewsComponent/>}/>
        <Route path='/settings' element = {<SettingsComponent/>}/>
        </Route>
        <Route path='login' element = {<AuthRootComponent/>}/>
        <Route path='register' element = {<AuthRootComponent/>}/>
        </Route>
        
      </Routes>
    </div>

        
      
      </ThemeProvider>
    
    </ColorModeContext.Provider>
    
  );

}

export default App;
