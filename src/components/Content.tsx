import React from "react";
import { IconCard } from "./IconCard"
import { iconCards } from "../assets/cardData"

export const Content = () => {
    const cards = iconCards.map((card, index) => 
      <IconCard 
        headingText={card.headingText}
        bodyText={card.bodyText} 
        iconSrc={card.iconSrc} iconAlt={card.iconAlt} 
        orientation={card.orientation}
        bgColor={(index % 2) ? "bg-white" : "bg-electric-blue"}/>)

    return (
      <div className="flex flex-col font-inter text-left">
        {cards}
      </div>
      )
  }

  export default Content;