import React from "react";

const enum Orientation {
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

export const IconCard = () => {
    return(
        <p>Hello world!</p>
    )
}

export default IconCard;
