import React from "react";
import {Link} from "react-router-dom";
import Button from "./Button.jsx";

function NavbarButtons() {
    return (
        <nav>
            <ul className={"navbar-buttons"}>
                <li className={"navbar-button"}>
                    <Link to={"/"} className={"navbar-button"}> Home </Link>
                </li>
                <li className={"navbar-button"}>
                    <Link to={"/projects"} className={"navbar-button"}> Projects </Link>
                </li>
                <li className={"navbar-button"}>
                    <Link to={"/about"} className={"navbar-button"}> About </Link>
                </li>
                <li className={"navbar-button"}>
                    <Button buttonLink={"mailto: mateipruteanu1@gmail.com"} className={"blue-button"}
                            buttonText={"GET IN TOUCH"}/>
                </li>
            </ul>
        </nav>
    )
}

export default NavbarButtons;