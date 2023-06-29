function Card({index, title, languages, description, linkText, linkImage, link,}) {
    return (
        <div className={"card " + "card_" + {index}}>
            <h1 className={"card-title"}>{title}</h1>
            <p className={"card-languages"}>{languages}</p>
            <p className={"card-description"}>{description}</p>
            <a href={link} target={"_blank"} rel={"noreferrer"} className={"card-link"}>
                <img src={linkImage} alt={linkText} className={"card-link-image"}/>
                <p className={"card-link-text"}>{linkText}</p>
            </a>
        </div>
    );
}

export default Card;