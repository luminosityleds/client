import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useToggle } from "../ts/ToggleHeader";

// Add the solid icons to the library
library.add(fas);

//Tailwind Classes
const HORIZONTAL_TEXT_WIDTH = "w-[500px]";
const VERTICAL_TEXT_WIDTH = "w-[1200px]";
const HORIZONTAL_CENTER = "justify-around";
const VERTICAL_CENTER = "items-center";
const HORIZONTAL_GAP = ""; //"gap-20"
const VERTICAL_GAP = ""; //"gap-10"
const HEADING_SIZE = "text-5xl";
const BODY_SIZE = "text-3xl";

export const enum Orientation { // orientation % 2 gives 0 for horizontal, 1 for vertical
  north,
  east,
  south,
  west,
}

export interface ICardData {
  headingText: string;
  bodyText: string;
  orientation: Orientation; // orientation of icon with respect to text
  icon?: string;
  buttons?: string[];
}
export type IconCardProps = {
  data: ICardData;
  bgColor: string;
  icon?: string;
  buttons?: string[];
};

const routeChange = () => {
  console.log("new route")
}

export const IconCard = ({ data, bgColor, icon, buttons }: IconCardProps) => {
  const lightMode = useToggle((state) => state.light);
  var size, center, flexDirection, gap, align;

  if (isHorizontal(data.orientation)) {
    size = HORIZONTAL_TEXT_WIDTH;
    center = HORIZONTAL_CENTER;
    gap = HORIZONTAL_GAP;
    flexDirection =
      data.orientation === Orientation.west ? "flex-row-reverse" : "flex-row";
  } else {
    //vertical
    size = VERTICAL_TEXT_WIDTH;
    center = VERTICAL_CENTER;
    gap = VERTICAL_GAP;
    flexDirection =
      data.orientation === Orientation.north ? "flex-col-reverse" : "flex-col";
  }

  return (
    <div
      className={`px-8 py-20 flex ${flexDirection} ${gap} ${bgColor} ${center} ${align}`}
    >
      {textContainer(data.headingText, data.bodyText, size)}
      {icon && (
        <FontAwesomeIcon
          // @ts-ignore
          icon={["fas", icon]}
          className="h-[250px] text-light dark:text-dark"
        />
      )}
      {buttons && buttons.map((button) => {
        console.log(button);
        return (
          <div
            className={`flex align-content place-content-evenly justify-content justify-items-center ${BODY_SIZE}`}
          >
            <Link
              className={`${
                lightMode
                  ? "bg-card-sky-blue border-black hover:bg-electric-blue"
                  : "bg-duke-blue text-white hover:bg-charcoal-black"
              } border-[3px] border-radius: 15px w-[720px] px-40 rounded-md flex align-content place-content-evenly justify-content justify-items-center`}
              to={"/" + button.toLocaleLowerCase()}
            >
              <button>{button}</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

function textContainer(headingText: string, bodyText: string, width: string) {
  return (
    <div className={`${width} text-light dark:text-dark`}>
      <p className={`${HEADING_SIZE} pb-2`}>{headingText}</p>
      <p className={BODY_SIZE}>{bodyText}</p>
    </div>
  );
}

export function isHorizontal(orientation: Orientation) {
  return Boolean(orientation % 2);
}

export default IconCard;
