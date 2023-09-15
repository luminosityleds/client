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
            <p>{headingText}</p>
            <p>{bodyText}</p>
            <p>{orientation}</p>
            <img src={iconSrc} alt={iconAlt}></img>
        </div>
    )
}

export default IconCard;