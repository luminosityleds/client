import React from "react";



type Props = {};

const Footer = (props: Props) =>{
  const flexBetween = "flex items-center justify-between";
  return <nav> 
    <div
      className={`${flexBetween} fixed bottom-0 z-30 w-full py-6`}
    >
        <div className = {`${flexBetween} w-full gap-8 text-sm bg-white `}>
          <div className = {`${flexBetween} w-full `}>
            <li className = {`${flexBetween} hover:electric-blue `}>About</li>
            <li className = {`${flexBetween} hover:electric-blue `}>Team</li>
            <li className = {`${flexBetween} hover:electric-blue `}>GitHub</li>
            <li className = {`${flexBetween} hover:electric-blue `}>What's New</li>
            <li className = {`${flexBetween} hover:electric-blue `}>Discord</li>
          </div>
        </div>
      </div>
    </nav>
};


  export default Footer;