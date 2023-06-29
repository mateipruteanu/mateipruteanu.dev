// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import Navbar from "./components/Navbar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/HomePage/Home.jsx";
import Projects from "./components/ProjectsPage/Projects.jsx";
import About from "./components/AboutPage/About.jsx";


function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Routes>
                    <Route exact path={"/"} element={<Home/>}/>
                    <Route exact path={"/projects"} element={<Projects/>}/>
                    <Route exact path={"/about"} element={<About/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
