import logo from './logo.svg';
import './App.css';
import { Routers, Route, Routes, Link,  BrowserRouter } from "react-router-dom"

import { HomePage } from './HomePage';
import { Apple } from './Apple';
import { NotFound } from './NotFound';

const App = () => ( 
  <BrowserRouter>
    <div>
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
);

export default App;
