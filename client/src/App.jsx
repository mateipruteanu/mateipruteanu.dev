// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import Navbar from "./components/Navbar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/HomePage/Home.jsx";


function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Routes>
                    <Route exact path={"/"} element={<Home/>}/>
                    {/*<Route exact path={"/projects"} component={Projects}/>*/}
                    {/*<Route exact path={"/about"} component={About}/>*/}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
