import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

function Card({index, title, languages, description, linkText, linkImage, link}) {
    const highlightKeywords = (text, keywords) => {
        const parts = text.split(new RegExp(`(${keywords.join("|")})`, "gi"));
        return parts.map((part, index) => {
            if (keywords.includes(part)) {
                return <span key={index} className="bold">{part}</span>;
            }
            return part;
        });
    };

    const keywords = ["HTML", "CSS", "JS", "NodeJS", "microservice", "architecture", "screenshots", "GitHub", "personalized", "recommendations", "downloading", "TCP", "ReactJS", "Vercel"];

    return (
        <div className={"card " + "card_" + index}>
            <div className={"card-top"}>
                <h1 className={"card-title"}>{title}</h1>
                <p className={"card-languages"}>{languages}</p>
            </div>
            <p className={"card-description"}>{highlightKeywords(description, keywords)}</p>
            <a href={link} className={"card-button"} target={"_blank"}>
                <FontAwesomeIcon icon={faGithub} className={"icon"}/>
                <p className={"card-link-text"}>{linkText}</p>
            </a>
        </div>
    );
}

export default Card;
