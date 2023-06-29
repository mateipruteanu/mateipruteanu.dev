import React from "react";

function Button({buttonLink, className, buttonText}) {
    let additionalClasses;
    if (Array.isArray(className))
        additionalClasses = className;
    else
        additionalClasses = [className];

    const combinedClasses = ["button", ...additionalClasses].join(" ");


    return (
        <a href={buttonLink} className={combinedClasses}> {buttonText} </a>
    );
}

export default Button;