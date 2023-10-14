import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { library } from '@fortawesome/fontawesome-svg-core'


//defaul style for the text and padding of the footer
const textStyle =
{
  fontSize: 'footer-textSize',
  padding: '0.5em',
};

//main features of the footer which declare the type 
//this includes the hyperlink, the physical icon image, and text besides the icon
interface footerFeatures
 {
  href: string; //
  iconFA?: typeof library;
  iconTextName: string;
}

//main function of the footer which positions and formats the three properties in the interface
function FooterStyling ({ href, iconFA, iconTextName,  }: footerFeatures) 
{
  return (
        <a href={href} className="text-black hover:text-footer-blue flex items-center py-2 px-4">
          <div style={textStyle}>
            <FontAwesomeIcon icon={iconFA} />
          </div>
          <h1>{iconTextName}</h1>
        </a>
  );
}

// final function to instantiate FooterStyling and declare the properties 
function Footer() 
{
  return (
    <div className = "flex justify-between position:static py-8 pt-4"> 
      {FooterStyling({ href: '#', iconTextName: 'About', iconFA: icon({ name: 'info-circle'  })})}
      {FooterStyling({ href: '#', iconTextName: 'Team', iconFA: icon({ name: 'users' }) })}
      {FooterStyling({ href: '#', iconTextName: 'GitHub', iconFA: icon({ name: 'github', style: 'brands' }) })}
      {FooterStyling({ href: '#', iconTextName: "What's New", iconFA: icon({ name: 'lightbulb', style: 'regular' }) })}
      {FooterStyling({ href: '#', iconTextName: 'Discord', iconFA: icon({ name: 'discord', style: 'brands' }) })} 
    </div>
  );
}

export default Footer;