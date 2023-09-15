import React from "react";
import { IconCard, Orientation } from "./IconCard"
import sunlightIcon from "../assets/omega.svg"
import signalIcon from "../assets/signal.svg"
import barGraphIcon from "../assets/bar-graph.svg"

var dummyHead = "What is Lorem Ipsum?"
var dummyBody = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"

export const Content = () => {
    return (
      <div className="flex flex-col font-inter text-left">
        <IconCard headingText={dummyHead} bodyText={dummyBody} iconSrc={sunlightIcon} iconAlt="light" orientation={Orientation.north} bgColor="bg-electric-blue"/>
        <IconCard headingText={dummyHead} bodyText={dummyBody} iconSrc={signalIcon} iconAlt="signal" orientation={Orientation.east} bgColor="bg-white" />
      </div>
      )
  }
  
  export default Content;