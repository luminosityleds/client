import React from "react";

//Tailwind Classes
const HORIZONTAL_TEXT_WIDTH = "w-[50rem]"
const VERTICAL_TEXT_WIDTH = "w-[24rem]"
const HORIZONTAL_CENTER = "items-center"
const VERTICAL_CENTER = "justify-center"

export const enum Orientation { // orientation % 2 gives 0 for vertical, 1 for horizontal
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
    headingText,
    bodyText,
    iconSrc,
    iconAlt,
    orientation,
    bgColor}: IconCardProps) => {

    var size, center, flexDirection

    if (orientation % 2) {
        size = VERTICAL_TEXT_WIDTH
        center = VERTICAL_CENTER
        flexDirection = "flex-row" + ((orientation===2) ? "reverse" : "")
    }
    else {
        size = HORIZONTAL_TEXT_WIDTH
        center = HORIZONTAL_CENTER
        flexDirection = "flex-col" + ((orientation===1) ? "reverse" : "")
    }

    return(
        <div className={`px-4 flex ${flexDirection} py-20 gap-4 ${bgColor} ${center}`}>
            {textContainer(headingText, bodyText, size)}
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