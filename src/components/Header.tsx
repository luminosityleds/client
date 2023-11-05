import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import LogoIcon from "./LogoIcon";

import { useToggle } from "../ts/ToggleHeader";

export const Header = () => {
  return (
    <div className="">
      <nav className="nav flex justify-between items-center w-full bg-electric-blue dark:bg-duke-blue text-black dark:text-white">
        <div className="flex items-center space-x-4">
          <a href="/" className="site-logo hover:text-white">
            <LogoIcon />
          </a>
          <span className="text-lg font-sans hover:text-white cursor-pointer dark:text-white dark:hover:text-navbar-dark-grey">
            Luminosity LEDs
          </span>
        </div>

        <div>
          <FontAwesomeIcon
            icon={icon({ name: "moon" })}
            className="h-8 text-black dark:text-white"
          />
          <button
            onClick={() => {
              useToggle.setState({ light: !useToggle.getState().light });
              console.log(useToggle.getState().light);
            }}
          >
            {useToggle.getState().light ? (
              <FontAwesomeIcon
                icon={icon({ name: "toggle-on" })}
                className="h-8 px-4 text-black dark:text-white"
              />
            ) : (
              <FontAwesomeIcon
                icon={icon({ name: "toggle-off" })}
                className="h-8 px-4 text-black dark:text-white"
              />
            )}
          </button>
          <FontAwesomeIcon
            icon={icon({ name: "sun" })}
            className="h-8 text-black dark:text-white"
          />
        </div>

        <ul className="flex space-x-4">
          <li>
            <button className="px-4 py-2 text-black rounded hover:bg-A6EDF2 hover:text-white font-sans text-base dark:text-white dark:hover:text-navbar-dark-grey">
              Log In
            </button>
          </li>
          <li>
            <button className="px-4 py-2 text-black rounded hover:bg-A6EDF2 hover:text-white font-sans text-base dark:text-white dark:hover:text-navbar-dark-grey">
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
