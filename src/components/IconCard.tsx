import React from "react";

export const enum Orientation {
    north,
    east,
    south,
    west
}

type IconCardProps = {
    headingText: string,
    bodyText: string,
    iconSrc: string,
    iconAlt: string,
    orientation: Orientation,
    bgColor: string
}

export const IconCard = ({
    headingText, bodyText, iconSrc,
    iconAlt, orientation, bgColor}: IconCardProps) => {
    return(
        <div className={bgColor}>
            {textContainer(headingText, bodyText, "w-[50rem]")}
            <p>{orientation}</p>
            <img src={iconSrc} alt={iconAlt}></img>
        </div>
    )
}

function textContainer(headingText: string, bodyText: string, width: string) {
    return(
        <div className={width}>
            <p className="text-4xl pb-2">{headingText}</p>
            <p className="text-2xl">{bodyText}</p>
        </div>
    )
}

export default IconCard;