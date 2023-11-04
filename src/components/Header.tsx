import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import LogoIcon from "./LogoIcon";
import {useTransition, useSpring, animated } from '@react-spring/web'

import { useToggle } from "../ts/ToggleHeader";
import { Link } from "react-router-dom";



export const Header = () => {

  const springs = useSpring({
    config:{
      duration: 300,
    },
    transform: useToggle.getState().light ? "translateX(15px)" : "translateX(0px)",
  })
  return (
    <div className="border-b border-black border-opacity-60">
      <nav className="nav flex justify-between items-center w-full bg-electric-blue dark:bg-duke-blue text-black dark:text-white">
        <div className="flex items-center space-x-4">
          <a href="/" className="site-logo hover:text-white">
            <LogoIcon />
          </a>
          <span className="text-lg font-sans hover:text-white cursor-pointer dark:text-white">
            Luminosity LEDs
          </span>
        </div>

        <div>
          <FontAwesomeIcon
            icon={icon({ name: "moon" })}
            className="h-8 px-4 text-black dark:text-white"
          />
          <animated.button  style={springs}
            
            onClick={() => {
              useToggle.setState({ light: !useToggle.getState().light });
              console.log(useToggle.getState().light);
            }}
          >
            {useToggle.getState().light ? (
              <FontAwesomeIcon
                icon={icon({ name: "circle" })}
                className="h-3.5 pr-4 py-2.5 text-black dark:text-white"
              />
            ) : (
              <FontAwesomeIcon
                icon={icon({ name: "circle" })}
                className="h-3.5 pr-4 py-2.5 text-black dark:text-white"
              />
            )}
          </animated.button>
          <FontAwesomeIcon
            icon={icon({ name: "sun" })}
            className="h-8 px-4 text-black dark:text-white"
          />
        </div>

        <ul className="flex space-x-4">
          <li>
            <Link to="/login">
              <button className="px-4 py-2 text-black rounded hover:bg-A6EDF2 hover:text-white font-sans text-base dark:text-white">
                Log In
              </button>
            </Link>
          </li>
          <li>
            <button className="px-4 py-2 text-black rounded hover:bg-A6EDF2 hover:text-white font-sans text-base dark:text-white">
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
