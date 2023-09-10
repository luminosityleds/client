import React from "react";
import sunlightIcon from "../assets/omega.svg"
import signalIcon from "../assets/signal.svg"
import barGraphIcon from "../assets/bar-graph.svg"

export const Content = () => {
    return (
<div className="flex flex-col font-inter text-left">
        {/*Card 1*/}
          <div className="flex flex-col items-center p-10 bg-luminosity-blue">
            {/*Text container*/}
            <div className="box-border pb-8">
              <p className="text-3xl pb-2">Illuminate individual expression and creativity...</p>
              <p className="text-xl">...with just the touch of a button.  A service that makes it easy to 
light up a room.</p>
            </div>
            <img className="h-32" src={sunlightIcon} alt="Sunlight Icon"></img>
          </div>
        {/*Card 2*/}
          <div className="flex flex-row py-20 justify-center bg-white">
            {/*Text container*/}
            <div className="box-border text-left w-1/4">
              <p className="text-3xl pb-2">Seamless integration 
and connection</p>
              <p className="text-xl">Lights are setup to hook up straight to Wi-Fi with a few easy steps.</p>
            </div>
              <img className="h-24 box-border pl-64" src={signalIcon} alt="Signal Icon"></img>
          </div>
        {/*Card 3*/}
          <div className="box-border flex flex-row py-20 justify-center bg-luminosity-blue">
            <img className="h-48 box-border pr-32" src={barGraphIcon} alt="Bar graph icon"></img>
            <div className="box-border text-left w-2/6">
              <p className="text-3xl pb-2">Track metrics and trends</p>
              <p className="text-xl">Color, brightness, and whether or not the lights are on or off are tracked and easily accessible. </p>
            </div>
          </div>
      </div>
    );
  };
  
  export default Content;