import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const darkMode = 'dark:text-white  dark:hover:text-suva-grey';
const lightMode = 'text-black hover:text-electric-blue';
const footerButtonUtils = 'flex items-center py-2 px-4';
const textPaddingSize = 'text-2xl p-3';
const footerDivStyle = 'dark:bg-black flex justify-between position:static py-8 pt-4 ';

const iconsFA = [
  <FontAwesomeIcon
    icon={icon({ name: 'info-circle'})}
  />,
  <FontAwesomeIcon
    icon={icon({ name: 'users' })}
  />,
  <FontAwesomeIcon
    icon={icon({ name: 'github', style: 'brands' })}
  />,
  <FontAwesomeIcon
    icon={icon({ name: 'lightbulb'})}
  />,
  <FontAwesomeIcon
    icon={icon({ name: 'discord', style: 'brands'})}
  />
];
interface FooterProps
 {
  href: string; //
  icon: React.ReactNode;
  iconTextName: string;
}

function FooterButton ({ href, icon, iconTextName}: FooterProps) 
{
  return (
        <a href={href} className= {`${darkMode} ${lightMode} ${footerButtonUtils}`}>
          <div className = {textPaddingSize} >
          {icon}
          </div>
          <h1>{iconTextName}</h1>
        </a>
  );
}

function Footer() 
{
  return (
    <div className = {footerDivStyle}> 
      <FooterButton href='#' icon={iconsFA[0]} iconTextName='About' />
      <FooterButton href='#' icon={iconsFA[1]} iconTextName='Team' />
      <FooterButton href='#' icon={iconsFA[2]} iconTextName='GitHub' />
      <FooterButton href='#' icon={iconsFA[3]} iconTextName="What's New" />
      <FooterButton href='#' icon={iconsFA[4]} iconTextName='Discord' />
    </div>
  );
}
export default Footer;