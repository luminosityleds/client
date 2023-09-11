import React from "react";
import sunlightIcon from "../assets/omega.svg"
import signalIcon from "../assets/signal.svg"
import barGraphIcon from "../assets/bar-graph.svg"

export const Content = () => {
    return (
<div className="flex flex-col font-inter text-left">
        {/*Card 1*/}
          <div className="px-4 flex flex-col py-20 items-center gap-4 bg-electric-blue">
            {/*Text container*/}
            <div className="w-[42rem]">
              <p className="text-3xl pb-2">Illuminate individual expression and creativity...</p>
              <p className="text-xl">...with just the touch of a button.  A service that makes it easy to 
light up a room.</p>
            </div>
            <img className="h-32" src={sunlightIcon} alt="Sunlight Icon"></img>
          </div>
        {/*Card 2*/}
          <div className="px-4 flex flex-row gap-36 py-20 justify-center bg-white">
            {/*Text container*/}
            <div className="w-80">
              <p className="text-3xl pb-2">Seamless integration 
and connection</p>
              <p className="text-xl">Lights are setup to hook up straight to Wi-Fi with a few easy steps.</p>
            </div>
              <img className="h-32" src={signalIcon} alt="Signal Icon"></img>
          </div>
        {/*Card 3*/}
          <div className="px-4 flex flex-row gap-36 py-20 justify-center bg-electric-blue">
            <img className="h-44" src={barGraphIcon} alt="Bar graph icon"></img>
            <div className="w-80">
              <p className="text-3xl pb-2">Track metrics and trends</p>
              <p className="text-xl">Color, brightness, and whether or not the lights are on or off are tracked and easily accessible. </p>
            </div>
          </div>
      </div>
    );
  };
  
  export default Content;