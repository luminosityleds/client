import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import LogoIcon from "./LogoIcon";
import { useSpring, animated } from '@react-spring/web'
import { useToggle } from "../ts/ToggleHeader";
import { Link } from "react-router-dom";

const iconsFA = [
  <FontAwesomeIcon
    icon={icon({ name: 'moon'})}
    className="h-8 px-2.5 text-black dark:text-white"
  />,
  <FontAwesomeIcon
    icon={icon({ name: "sun" })}
    className="h-8 px-2.5 text-black dark:text-white"
  />
];

export const Header = () => {

  const springs = useSpring({
    config: {
      duration: 225, //in mS
    },
    transform: useToggle.getState().light ? "translateX(16px)" : "translateX(0px)",
    from: { y: 1.6 }, 
  })

  return (
    <div className="border-b border-black border-opacity-60">
      <nav className="flex items-center justify-between w-full text-black nav bg-electric-blue dark:bg-duke-blue dark:text-white">
        <div className="flex items-center space-x-4">
          <a href="/" className="site-logo hover:text-white">
            <LogoIcon />
          </a>
          <span className="font-sans text-lg cursor-pointer hover:text-white dark:text-white dark:hover:text-suva-grey">
            Luminosity LEDs
          </span>
        </div>
        <div className="flex flex-row">
        {iconsFA[0]}
          <div className="relative flex flex-col justify-center h-5 m-2 bg-black rounded-full dark:bg-white w-9 ">
            <animated.button style={springs}
              onClick={() => {
                useToggle.setState({ light: !useToggle.getState().light });
                console.log(useToggle.getState().light);
              }}
            >
              {useToggle.getState().light ? (
                <FontAwesomeIcon
                  icon={icon({ name: "circle" })}
                  className="h-3.5  pr-4 py-1.5 text-electric-blue dark:text-duke-blue"
                /> 
              ) : (
                <FontAwesomeIcon
                  icon={icon({ name: "circle" })}
                  className="h-3.5  pr-4 py-1.5 text-electric-blue dark:text-duke-blue"
                />
              )}
            </animated.button>
          </div>
          {iconsFA[1]}
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/login">
              <button className="px-4 py-2 font-sans text-base text-black rounded hover:bg-A6EDF2 hover:text-white dark:text-white dark:hover:text-suva-grey">
                Log In
              </button>
            </Link>
          </li>
          <li>
            <Link to ="">
            <button className="px-4 py-2 font-sans text-base text-black rounded hover:bg-A6EDF2 hover:text-white dark:text-white dark:hover:text-suva-grey">
              Sign Up
            </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
