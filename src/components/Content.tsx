import React from "react";
import { IconCard } from "./IconCard";
import { iconCards } from "../assets/cardData";

export const Content = () => {
  const cards = iconCards.map((card, index) => (
    <IconCard
      data={card}
      //Alternate bgColor by row
      bgColor={
        index % 2
          ? "bg-white dark:bg-black"
          : "bg-card-light-blue dark:bg-card-dark-blue"
      }
      icon={card.icon}
      buttons={card.buttons}
    />
  ));

  return <div className="flex flex-col font-inter text-left">{cards}</div>;
};

export default Content;
