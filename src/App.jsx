import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './components/HomePage/Home.jsx';
import Projects from './components/ProjectsPage/Projects.jsx';
import About from './components/AboutPage/About.jsx';
import './styles/App.css';
import * as insights from 'insights-js';
import {parameters} from 'insights-js';
import Loading from "./components/Loading.jsx";

// tracking page views
insights.init('SIbKVeVXPwRxphQW');
insights.trackPages();
insights.track({
    id: 'open-page',
    parameters: {
        path: parameters.path(),
        screenType: parameters.screenType(),
        referrer: parameters.referrer(),
    },
});

function App() {
    // const [isContentLoaded, setIsContentLoaded] = useState(false);

    // useEffect(() => {
    //     setIsContentLoaded(false);
    // }, []);

    // const handleContentLoad = () => {
    //     setIsContentLoaded(true);
    // }

    return (
        <div>
            <Routes>
                <Route
                    exact
                    path={'/'}
                    element={<Home/>}
                />
                <Route
                    exact
                    path={'/projects'}
                    element={<Projects/>}
                />
                <Route
                    exact
                    path={'/about'}
                    element={<About/>}
                />
            </Routes>
        </div>
    );
}

export default App;
