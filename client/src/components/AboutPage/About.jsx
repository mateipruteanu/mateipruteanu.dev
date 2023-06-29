import React from "react";
import "../../Default.css";
import "./About.css";

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
    const email = "mateipruteanu1@gmail.com";
    const phone = "+40 742 042 244";
    const linkedin = "https://www.linkedin.com/in/mateipruteanu/";


    return (
        <div className={"about"}>
            <h1 className="hero-text">{heroTextContent}</h1>
            <h3 className="hero-subtext">{heroSubtextContent}</h3>
            <h2 className={"technologies-title"}>Technologies / Languages I’m comfortable with:</h2>
            <ul className={"technologies-list"}>
                {technologies.map((technology, index) => (
                    <li key={index} className={"technology"}>{technology}</li>
                ))}
            </ul>

            <p className={"contact-text"}>
                You can contact me by <span
                className={"main-gradient-text"}>email</span>: &lt; {email} &gt;
                by <span className={"main-gradient-text"}>phone</span>: &lt; {phone} &gt;
                or on <a target="_blank" className={"main-gradient-text"}
                         href={linkedin}>LinkedIn</a>.
            </p>

        </div>
    );
}

export default About;