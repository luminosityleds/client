import React from "react";
import { IconCard } from "./IconCard";
import { iconCards } from "../assets/cardData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { IAccountData } from "../interfaces/IAccountData";

var icons = [
  <FontAwesomeIcon
    icon={icon({ name: "lightbulb" })}
    className="h-36 text-black dark:text-white"
  />,
  <FontAwesomeIcon
    icon={icon({ name: "wifi" })}
    className="h-36 text-black dark:text-white"
  />,
  <FontAwesomeIcon
    icon={icon({ name: "signal" })}
    className="h-36 text-black dark:text-white"
  />,
];

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
      icon={icons[index]}
    />
  ));

  return <div className="flex flex-col font-inter text-left">{cards}</div>;
};

export default Content;
