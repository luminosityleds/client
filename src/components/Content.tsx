import React from "react";
import { IconCard, Orientation } from "./IconCard"
import sunlightIcon from "../assets/omega.svg"
import signalIcon from "../assets/signal.svg"
import barGraphIcon from "../assets/bar-graph.svg"

export const Content = () => {
    return (
      <IconCard headingText="Heading" bodyText="Body" iconSrc={sunlightIcon} iconAlt="light" orientation={Orientation.north} bgColor="bg-electric-blue"/>
      )
  }
  
  export default Content;