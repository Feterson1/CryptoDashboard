import React from 'react';
import Home from './pages/home/home';
import {Route,Routes} from 'react-router-dom';
import PrivateRoute from './utils/router/privateRoute';
import AuthRootComponent from './components/auth/authRootComponent';
import { ColorModeContext,useMode } from './theme';
import { CssBaseline,ThemeProvider } from '@mui/material';
import LayoutComponent from './components/layout/LayoutComponent';
import WatchListPage from './pages/watchlist/watchlist';
import SettingsPage from './pages/settings/settings';
import SingleAssetPage from './pages/single-asset/singleAsset';
import NewsPage from './pages/news/news';





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
        <Route path='/watchlist' element = {<WatchListPage/>}/>
        <Route path='/news' element = {<NewsPage/>}/>
        <Route path='/settings' element = {<SettingsPage/>}/>
        <Route path='/single/:id' element = {<SingleAssetPage/>}/>
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
