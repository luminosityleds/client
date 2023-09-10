import React from "react";

type Props = {};

const Footer = (props: Props) =>{
  const flexBetween = "flex items-center justify-between";
  return <nav> 
    <div
      className={`${flexBetween} fixed bottom-0 z-30 w-full py-6`}
    >
        <div className = {`${flexBetween} w-full`}>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>

        </div>
    
      </div>
    
    </nav>
};


  export default Footer;