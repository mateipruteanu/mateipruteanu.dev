import React from "react";
import AboutBlob from "./AboutBlob.jsx";
import "../../styles/Default.css";
import "../../styles/About.css";

function About() {
    const heroTextContent = (
        <>
            I'm <span className={"italic-bold-text"}>&lt;Matei Pruteanu&gt;</span>
        </>);
    const heroSubtextContent = (
        <>
            I am a 3rd year student at the <span className={"italic-bold-text"}>Faculty of Computer Science</span>,
            UAIC, Iași.
        </>);
    const technologies = [
        "React",
        "NodeJS",
        "HTML/CSS/JS",
        "Java",
        "Relational DB (MySQL, Oracle...)"];
    const email = (
        <a href={"mailto:mateipruteanu1@gmail.com"}>
            mateipruteanu1@gmail.com
        </a>
    );
    const phone = (
        <a href={"tel:+40 742 042 244"}>
            +40 742 042 244
        </a>
    );
    const linkedin = "https://www.linkedin.com/in/mateipruteanu/";


    return (
        <>
            <div className={"about-page"}>
                <div className={"about-container"}>
                    <div className={"about-information-div"}>
                        <h1 className="hero-text">{heroTextContent}</h1>
                        <h3 className="hero-subtext">{heroSubtextContent}</h3>
                    </div>
                    <div className={"technologies-div"}>
                        <h2 className={"technologies-title"}>Technologies / Languages I’m comfortable with:</h2>
                        <ul className={"technologies-list"}>
                            {technologies.map((technology, index) => (
                                <li key={index} className={"technology"}>{technology}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={"contact-div"}>
                        <div className={"contact-container"}>
                            <p className={"contact-text"}>
                                <span
                                    className={"main-gradient-text"}>Email</span>: &lt; {email} &gt;
                            </p>
                            <p className={"contact-text"}>
                                <span className={"main-gradient-text"}>Phone</span>: &lt; {phone} &gt;
                            </p>
                            <p className={"contact-text"}>
                                <a target="_blank" className={"blue-button"}
                                   href={linkedin}>LinkedIn</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <AboutBlob className={"aboutBlob"}/>
        </>
    );
}

export default About;