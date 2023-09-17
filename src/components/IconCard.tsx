import React from "react";

//Tailwind Classes
const HORIZONTAL_TEXT_WIDTH = "w-[32rem]"
const VERTICAL_TEXT_WIDTH = "w-[50rem]"
const HORIZONTAL_CENTER = "justify-center"
const VERTICAL_CENTER = "items-center"
const HORIZONTAL_GAP = "gap-48"
const VERTICAL_GAP = "gap-8"
const ICON_HEIGHT = "h-40"

export const enum Orientation { // orientation % 2 gives 0 for horizontal, 1 for vertical
    north,
    east,
    south,
    west
}

export interface ICardData {
    headingText: string,
    bodyText: string,
    iconSrc: string, //url to the image source file
    iconAlt: string, //icon alternative text
    orientation: Orientation, // orientation of icon with respect to text
}
export type IconCardProps = {
    data: ICardData,
    bgColor: string
}

export const IconCard = ({data, bgColor}: IconCardProps) => {

    var size, center, flexDirection, gap

    if (isHorizontal(data.orientation)) {
        size = HORIZONTAL_TEXT_WIDTH
        center = HORIZONTAL_CENTER
        gap = HORIZONTAL_GAP
        flexDirection = (data.orientation===Orientation.west) ? "flex-row-reverse" : "flex-row"
    }
    else { //vertical
        size = VERTICAL_TEXT_WIDTH
        center = VERTICAL_CENTER
        gap = VERTICAL_GAP
        flexDirection = (data.orientation===Orientation.north) ? "flex-col-reverse" : "flex-col"
    }

    return(
        <div className={`px-4 py-20 flex ${flexDirection} ${gap} ${bgColor} ${center}`}>
            {textContainer(data.headingText, data.bodyText, size)}
            <img className={ICON_HEIGHT} src={data.iconSrc} alt={data.iconAlt}></img>
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


function isHorizontal(orientation: Orientation) {
    return(orientation % 2)
}

export default IconCard;