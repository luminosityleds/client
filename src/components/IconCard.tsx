import React from 'react';

//Tailwind Classes
const HORIZONTAL_TEXT_WIDTH = "w-[500px]"
const VERTICAL_TEXT_WIDTH = "w-[1200px]"
const HORIZONTAL_CENTER = "justify-around"
const VERTICAL_CENTER = "items-center"
const HORIZONTAL_GAP = "" //"gap-20"
const VERTICAL_GAP = "" //"gap-10"
const HEADING_SIZE = "text-[64px]"
const BODY_SIZE = "text-[48px]"

export const enum Orientation { // orientation % 2 gives 0 for horizontal, 1 for vertical
    north,
    east,
    south,
    west
}

export interface ICardData {
    headingText: string,
    bodyText: string,
    orientation: Orientation // orientation of icon with respect to text
}
export type IconCardProps = {
    data: ICardData,
    bgColor: string
    icon: React.ReactNode

}

export const IconCard = ({ data, bgColor, icon }: IconCardProps) => {

    var size, center, flexDirection, gap, align

    if (isHorizontal(data.orientation)) {
        size = HORIZONTAL_TEXT_WIDTH
        center = HORIZONTAL_CENTER
        gap = HORIZONTAL_GAP
        flexDirection = (data.orientation === Orientation.west) ? "flex-row-reverse" : "flex-row"
    }
    else { //vertical
        size = VERTICAL_TEXT_WIDTH
        center = VERTICAL_CENTER
        gap = VERTICAL_GAP
        flexDirection = (data.orientation === Orientation.north) ? "flex-col-reverse" : "flex-col"
    }

    return (
        <div className={`px-8 py-20 flex ${flexDirection} ${gap} ${bgColor} ${center} ${align}`}>
            {textContainer(data.headingText, data.bodyText, size)}
            <div className="m-16 flex items-center">
                {icon}
            </div>
        </div>
    )
}

function textContainer(headingText: string, bodyText: string, width: string) {
    return (
        <div className={`${width} text-light dark:text-dark`}>
            <p className={`${HEADING_SIZE} pb-2`}>{headingText}</p>
            <p className={BODY_SIZE}>{bodyText}</p>
        </div>
    )
}

export function isHorizontal(orientation: Orientation) {
    return (Boolean(orientation % 2))
}

export default IconCard;