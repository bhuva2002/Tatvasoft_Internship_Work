import logo from './logo.svg';
import './App.css';
import { Routers, Route, Routes, Link,  BrowserRouter } from "react-router-dom"

import appStyle from './AppStyle.module.css'
import { globalsStyles } from './constants';
import { HomePage } from './HomePage';
import { Apple } from './Apple';
import { NotFound } from './NotFound';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles'

const App = () => ( 
  <>
    <ThemeProvider theme={theme}>

    {/* <img src={`${process.env.REACT_APP_HOSTED_URL}logo192.png`} alt="App Logo" /> */}
    <BrowserRouter>
      <div 
        // style={{
        //   ...globalsStyles.navbar,
        // }}
        className={appStyle.navbarStyle}
      >
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/apple">Apple</Link>
        <br></br>
        <Link to="/applet">Applet</Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/apple" element={<Apple/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  </>
);

export default App;
