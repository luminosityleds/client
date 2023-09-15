import React from "react";
import { IconCard, Orientation } from "./IconCard"
import sunlightIcon from "../assets/omega.svg"
import signalIcon from "../assets/signal.svg"
import barGraphIcon from "../assets/bar-graph.svg"

export const Content = () => {
    return (
      <IconCard headingText="What is Lorem Ipsum?" bodyText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500" iconSrc={sunlightIcon} iconAlt="light" orientation={Orientation.north} bgColor="bg-electric-blue"/>
      )
  }
  
  export default Content;