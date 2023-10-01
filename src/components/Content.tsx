import React from "react";
import { IconCard } from "./IconCard"
import { iconCards } from "../assets/cardData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faWifi, faSignal} from '@fortawesome/free-solid-svg-icons'

var icons = [
  <FontAwesomeIcon icon={faLightbulb} className="h-36 fill-black dark:fill-white"/>,
  <FontAwesomeIcon icon={faWifi} className="h-36 fill-black dark:fill-white"/>,
  <FontAwesomeIcon icon={faSignal} className="h-36 fill-black dark:fill-white"/>
]

export const Content = () => {
    const cards = iconCards.map((card, index) => 
      <IconCard 
        data={card}
        //Alternate bgColor by row
        bgColor={(index % 2) ? "bg-white dark:bg-black" : "bg-card-light-blue dark:bg-duke-blue"}
        icon={icons[index]}/>)

    return (
      <div className="flex flex-col font-inter text-left dark">
        {cards}
      </div>
      )
  }

  export default Content;