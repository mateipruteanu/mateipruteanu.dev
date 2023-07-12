import Button from "../Button.jsx";
import HomeBlob from "./HomeBlob.jsx";
import Memoji from "./Memoji.jsx";
import "../../styles/Home.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import Navbar from "../Navbar.jsx";
import React from "react";


function Home() {
    return (
        <div className={"home"}>
            <HomeBlob className={"home-blob"}/>
            <Navbar/>
            <div className={"home-text"}>
                <h1 className={"hero-text"}>Hi there 👋🏼, I'm <span className={"main-gradient-text"}>Matei!</span></h1>
                <h3 className={"hero-subtext"}>I’m a <span
                    className={"main-gradient-text"}>Software Developer</span></h3>
                <h3 className={"hero-subtext"}> and Computer Science student.</h3>
                <div className={"hero-small-text"}>Interested in Web Development and Online Privacy.</div>
                <div className={"hero-buttons"}>
                    <Button buttonLink={"mailto: mateipruteanu1@gmail.com"}
                            className={"main-gradient-button hero-button"}
                            buttonText={"GET IN TOUCH"}/>

                    <a className={"blue-button hero-button"} target={"_blank"}
                       href={"https://github.com/mateipruteanu"}>
                        <FontAwesomeIcon icon={faGithub} className={"icon"}/>
                        GITHUB
                    </a>
                    <a className={"blue-button hero-button"} target={"_blank"}
                       href={"https://www.linkedin.com/in/mateipruteanu/"}>
                        <FontAwesomeIcon icon={faLinkedin} className={"icon"}/>
                        LINKEDIN
                    </a>
                </div>
            </div>
            <Memoji className={"memoji"}/>
        </div>
    )
}


export default Home;

