import {NavLink, useLocation} from "react-router-dom";
import Button from "./Button.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import "../styles/Navbar.css";

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)
    const location = useLocation();


    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    }

    function setColor(newColor) {
        document.documentElement.style.setProperty('--nav-text-color', newColor);
    }

    useEffect(() => {
        if (location.pathname === "/") {
            setColor("#ffffff") // white
        } else {
            setColor("#000000"); // black
        }

        // for mobile navbar
        if (window.innerWidth < 672) {
            setColor("#ffffff") // white
        }

    }, [location, window]);


    return (
        <nav className={"navbar"}>
            <div className={"container"}>
                <h1 className={"name"}> mateipruteanu_ </h1>
                <div className={"menu-icon"} onClick={handleShowNavbar}>
                    <FontAwesomeIcon icon={showNavbar ? faXmark : faBars}/>
                </div>
                <div className={`nav-elements ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to={"/"}> Home </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/projects"}> Projects </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}> About </NavLink>
                        </li>
                        <li>
                            <Button buttonLink={"mailto: mateipruteanu1@gmail.com"} className={"blue-button"}
                                    buttonText={"GET IN TOUCH"}/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;