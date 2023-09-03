import React from "react";
import Card from "./Card.jsx";
import "../../styles/Default.css";
import "../../styles/Projects.css";
import Navbar from "../Navbar.jsx";


function Projects() {
    class Project {
        constructor(index, title, languages, description, linkText, linkImage, link) {
            this.index = index;
            this.title = title;
            this.languages = languages;
            this.description = description;
            this.linkText = linkText;
            this.linkImage = linkImage;
            this.link = link;
        }
    }

    const projects = [
        new Project(1, "CroG", "NodeJS, MySQL, HTML, CSS, JS", "Website for finding resources related to Creative Coding built with HTML, CSS and JS for the frontend and NodeJS for the backend, with a microservice architecture. You can find a detailed description of the project and screenshots on GitHub!", "GitHub", "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", "https://github.com/mateipruteanu/CroG#readme"),
        new Project(2, "Recipe App", "ReactJS, Java, Spring Boot, Spring Security, JPA, MySQL", "Recipe app that I'm building as part of a personal project. It is secured using Spring Security and it uses JWTs in order to authenticate users. The database of choice for this project is MySQL. For the frontend I used the MaterialUI library. You can find a detailed description and see a demo on GitHub!", "GitHub", "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", "https://github.com/mateipruteanu/RecipeAppFrontend#readme"),
        new Project(3, "ReadsProfiler", "C++, QT (GUI)", "Desktop app for searching through a book library, getting personalized recommendations and downloading books from the server (over TCP using sockets). You can find a detailed description of the project and screenshots on GitHub!", "GitHub", "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", "https://github.com/mateipruteanu/readsProfiler_Client#readme"),
        new Project(4, "Portofolio Website", "ReactJS, HTML, CSS", "My portofolio website (the one you are currently viewing) built using ReactJS, HTML and CSS and is hosted on Vercel. You can find a detailed description of the project and screenshots on GitHub!", "GitHub", "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", "https://github.com/mateipruteanu/mateipruteanu.dev#readme")
    ];

    return (
        <>
            <Navbar/>
            <div className={"projects"}>
                <div className={"projects-cards"}>
                    {projects.map((project) => (
                        <Card key={project.index} index={project.index} title={project.title} link={project.link}
                              linkImage={project.linkImage} linkText={project.linkText}
                              description={project.description}
                              languages={project.languages}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Projects;