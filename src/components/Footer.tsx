import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const darkMode = 'cursor-pointer dark:text-dark dark:hover:text-hover-dark';
const lightMode = 'text-light hover:text-hover-light cursor-pointer';
const footerButtonUtils = 'flex items-center py-2 px-4';
const textPaddingSize = 'text-2xl p-3';
const footerDivStyle = 'bg-electric-blue dark:bg-duke-blue flex position:static space-x-48 px-48 py-8 pt-4 ';

const ICON_HEIGHT = "h-[48px]"
const iconsFA = [
  <FontAwesomeIcon
    icon={icon({ name: 'info-circle'})}
    className={ICON_HEIGHT}
  />,
  <FontAwesomeIcon
    icon={icon({ name: 'users' })}
    className={ICON_HEIGHT}
  />,
  <FontAwesomeIcon
    icon={icon({ name: 'github', style: 'brands' })}
    className={ICON_HEIGHT}
  />,
  <FontAwesomeIcon
    icon={icon({ name: 'lightbulb'})}
    className={ICON_HEIGHT}
  />,
  <FontAwesomeIcon
    icon={icon({ name: 'discord', style: 'brands'})}
    className={ICON_HEIGHT}
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
          <h1 className='text-2xl'>{iconTextName}</h1>
        </a>
  );
}

function Footer() 
{
  return (
    <div className = {`h-180 px-4 ${footerDivStyle}`}> 
      <div>
        <span className = {`px-8 text-3xl font-bold dark:text-dark`}>Organization</span>
        <FooterButton href='#' icon={iconsFA[0]} iconTextName='About' />
        <FooterButton href='#' icon={iconsFA[1]} iconTextName='Team' />
        <FooterButton href='#' icon={iconsFA[3]} iconTextName="What's New" />
      </div>
      <div>
        <span className = {`px-8 text-3xl font-bold dark:text-dark`}>Contact Us</span>
        <FooterButton href='https://github.com/luminosityleds' icon={iconsFA[2]} iconTextName='GitHub' />
        <FooterButton href='#' icon={iconsFA[4]} iconTextName='Discord' />
      </div>
    </div>
  );
}
export default Footer;