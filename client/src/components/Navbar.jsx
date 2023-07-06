import {NavLink, useLocation} from "react-router-dom";
import Button from "./Button.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import "../styles/Navbar.css";

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    const location = useLocation();

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const handleNavLinkClick = () => {
        setShowNavbar(false);
    };

    function setColor(newColor) {
        document.documentElement.style.setProperty("--nav-text-color", newColor);
    }

    useEffect(() => {
        if (location.pathname === "/") {
            setColor("#ffffff"); // white
        } else {
            setColor("#000000"); // black
        }

        // for mobile navbar
        if (window.innerWidth < 672) {
            setColor("#000000"); // black
            document.querySelector(".blue-button").classList.add("main-gradient-button");
            document.querySelector(".blue-button").style.color = "#ffffff";
        } else {
            document.querySelector(".blue-button").classList.remove("main-gradient-button");
            document.querySelector(".blue-button").style.color = "#000000";
        }
    }, [location, window]);

    return (
        <nav className={"navbar"}>
            <div className={"container"}>
                <h1 className={"name"}> mateipruteanu_ </h1>
                <div className={"menu-icon"} onClick={handleShowNavbar}>
                    <FontAwesomeIcon icon={showNavbar ? faXmark : faBars}/>
                </div>
                <div className={`nav-elements ${showNavbar && "active"}`}>
                    <ul>
                        <li>
                            <NavLink to={"/"} onClick={handleNavLinkClick}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/projects"} onClick={handleNavLinkClick}>
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"} onClick={handleNavLinkClick}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <Button
                                buttonLink={"mailto: mateipruteanu1@gmail.com"}
                                className={"blue-button"}
                                buttonText={"GET IN TOUCH"}
                                onClick={handleNavLinkClick}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
