// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import Navbar from "./components/Navbar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/HomePage/Home.jsx";
import Projects from "./components/ProjectsPage/Projects.jsx";
import About from "./components/AboutPage/About.jsx";
import * as insights from "insights-js";
import {parameters} from "insights-js";

// tracking page views
insights.init('SIbKVeVXPwRxphQW');
insights.trackPages();
insights.track({
    id: "open-page",
    parameters: {
        path: parameters.path(),
        screenType: parameters.screenType(),
        referrer: parameters.referrer()
    }
});

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
