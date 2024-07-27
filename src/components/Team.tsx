
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Header from './Header';
import Footer from './Footer';
import { useToggle } from "../ts/ToggleHeader";

const darkMode = 'dark:text-white  ';
const lightMode = 'text-black ';

const iconsFA = [
  <FontAwesomeIcon
    icon={icon({ name: 'user' })}
  />,
  <FontAwesomeIcon
    icon={icon({ name: 'linkedin', style: 'brands' })}
  />,
  <FontAwesomeIcon
    icon={icon({ name: 'github', style: 'brands' })}
  />,
  <FontAwesomeIcon
    icon={icon({ name: 'instagram', style: 'brands' })}
  />,
  <FontAwesomeIcon
  icon={icon({ name: 'globe' })}
    />,
  <FontAwesomeIcon
    icon={icon({ name: 'discord', style: 'brands' })}
  />
];
interface TeamProps {
  href: string; //
  icon: React.ReactNode;
  iconTextName: string;
  LLrole: string;
}

function TeamButton({ href, icon, iconTextName, LLrole }: TeamProps) {
  return (
    <div className="flex justify-around ">
      <div className="bg-gray-200 rounded-lg p-6 m-6 py-16 ">
        <h1 className="flex items-center justify-center text-2xl">{icon}</h1>
        <h2 className=" flex items-center justify-center text-xl font-semibold mb-2">{iconTextName}</h2>
        <h1 className=" flex items-center justify-center text-sm ">{LLrole}</h1>
        <div className="flex  space-x-2">
          <a href="#" >LinkedIn</a>
          <a href="#" >Github</a>
        </div>
      </div>
    </div>
  );
}

function Team() {
  return (
    <span className="text-white px-2 ">
        Meet The<br />
        Team

    <div className=' '>
        <div className='grid grid-cols-3  '>
            <TeamButton href='#' icon={iconsFA[0]} iconTextName='Name1' LLrole='Role Example' />
            <TeamButton href='#'  icon={iconsFA[0]} iconTextName='Name2' LLrole='Role Example' />
            <TeamButton href='#' icon={iconsFA[0]} iconTextName='Name3' LLrole='Role Example' />
            <TeamButton href='#' icon={iconsFA[0]} iconTextName='Name4' LLrole='Role Example' />
            <TeamButton href='#'  icon={iconsFA[0]} iconTextName='Name5' LLrole='Role Example' />
            <TeamButton href='#' icon={iconsFA[0]} iconTextName='Name6' LLrole='Role Example' />
      </div>
    </div>
    </span>
  );
}
export default Team;