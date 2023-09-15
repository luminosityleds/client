import React from "react";
// import About from ".../assets/About.svg"
// import Discord from ".../assets/Team.svg"
// import Github from "/assets/GitHub.svg"
// import whatsNewIcon from "/assets/WhatsNew.svg"
// import discordIcon from "/assets/Discord.svg"

type Props = {};

const Footer = (props: Props) =>{
  const flexBetween = "flex justify-evenly";
  return <nav> 
    <div
      className={`${flexBetween} fixed bottom-0 z-30 w-full py-6`}
    >
        <div className = {`${flexBetween} w-full gap-8 text-sm bg-white `}>
          <div className = {`${flexBetween} w-full text-footer-textSize pb-8`}>
            <li className = {`${flexBetween} hover:text-electric-blue `}>About</li>
            <li className = {`${flexBetween} hover:text-electric-blue `}>Team</li>
            <li className = {`${flexBetween} hover:text-electric-blue `}>GitHub</li>
            <li className = {`${flexBetween} hover:text-electric-blue `}>What's New</li>
            <li className = {`${flexBetween} hover:text-electric-blue `}>Discord</li>
          </div>
        </div>
      </div>
    </nav>
};


  export default Footer;