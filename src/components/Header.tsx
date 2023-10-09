import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

import { create } from 'zustand';


interface ToggleState {
  light: boolean;
  toggleShow: () => void;
}

const useToggle = create<ToggleState>((set) => ({
  light: true,
  toggleShow: () => set((state) => ({ light: !state.light})),
}))

export const Header = () => {
  return (
    <nav className="nav flex justify-between items-center w-full bg-[#90E9EF] text-black p-4">
      <div className="flex items-center space-x-4">
        <a href="/" className="site-logo hover:text-white">
          <img src="/images/luminosity-home-logo.ico" alt="Home-logo"></img>
        </a>
        <span className="text-lg font-semibold font-sans hover:text-white cursor-pointer">
          Luminosity LEDs
        </span>
      </div>

      <div>
        <FontAwesomeIcon icon={icon({name: 'moon'})} className="h-8 text-black dark:text-white"/>
        <FontAwesomeIcon onClick={console.log} icon={icon({name: 'toggle-on'})} className="h-8 px-4 text-black dark:text-white"/>
        <FontAwesomeIcon icon={icon({name: 'sun'})} className="h-8 text-black dark:text-white"/>
      </div>

      <ul className="flex space-x-4">
        <li>
          <button className="px-4 py-2 text-black rounded hover:bg-A6EDF2 hover:text-white font-sans text-base">
            Log In
          </button>
        </li>
        <li>
          <button className="px-4 py-2 text-black rounded hover:bg-A6EDF2 hover:text-white font-sans text-base">
            Sign Up
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
