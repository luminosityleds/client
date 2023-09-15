import React from "react";

const HORIZONTAL_TEXT_WIDTH = "w-[50rem]"
const VERTICAL_TEXT_WIDTH = "w-[24rem]"

export const enum Orientation { // orientation%2 gives 0 for vertical, 1 for horizontal
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
    headingText, bodyText, iconSrc, iconAlt, orientation, bgColor}: IconCardProps) => {
    var size = (orientation % 2) ? VERTICAL_TEXT_WIDTH : HORIZONTAL_TEXT_WIDTH
    return(
        <div className={bgColor}>
            {textContainer(headingText, bodyText, size)}
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