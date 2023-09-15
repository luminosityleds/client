import React from "react";
import aboutIcon from "../assets/About.svg"
import teamIcon from "../assets/Team.svg"
import githubIcon from "../assets/GitHub.svg"
import whatsNewIcon from "../assets/WhatsNew.svg"
import discordIcon from "../assets/Discord.svg"

type Props = {};

const Footer = (props: Props) =>{
  const flexBetween = "flex justify-evenly";
  return <nav> 
    <div
      className={`${flexBetween} fixed bottom-0  w-full pb-10`}
    >
        <div className = {`${flexBetween} w-full gap-8 text-sm bg-white `}>
          <div className = {`${flexBetween} w-full text-footer-textSize `}> 
            <div className="flex hover:text-electric-blue">
              <img className="h-7 mr-4  " src={aboutIcon} alt="About Icon"></img>             
              <li className = {`${flexBetween}  `}>About</li>
            </div>
            <div className="flex hover:text-electric-blue">
              <img className="h-7 mr-4  " src={teamIcon} alt="About Icon"></img>           
              <li className = {`${flexBetween}  `}>Team</li>
            </div>
            <div className="flex hover:text-electric-blue">
              <img className="h-7 mr-4  " src={githubIcon} alt="About Icon"></img>           
              <li className = {`${flexBetween}  `}>GitHub</li>
            </div>
            <div className="flex hover:text-electric-blue">
              <img className="h-7 mr-4  " src={whatsNewIcon} alt="About Icon"></img>           
              <li className = {`${flexBetween}  `}>What's New</li>
            </div>
            <div className="flex hover:text-electric-blue">
              <img className="h-7 mr-4  " src={discordIcon} alt="About Icon"></img>           
              <li className = {`${flexBetween}  `}>Discord</li>
            </div>
          </div>
        </div>
      </div>
    </nav>
};


  export default Footer;