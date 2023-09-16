import { Orientation} from "../components/IconCard"
import sunlightIcon from "../assets/light.svg"
import signalIcon from "../assets/signal.svg"
import barGraphIcon from "../assets/bars.svg"

export const iconCards = [
    {
        headingText: "Illuminate individual expression and creativity...",
        bodyText: "...with just the touch of a button.  A service that makes it easy to light up a room.",
        iconSrc: sunlightIcon,
        iconAlt: "Light Icon",
        orientation: Orientation.south,
    },
    {
        headingText: "Seamless integration and connection",
        bodyText: "Lights are setup to hook up straight to Wi-Fi with a few easy steps.",
        iconSrc: signalIcon,
        iconAlt: "Wifi Signal Icon",
        orientation: Orientation.east,
    },
    {
        headingText: "Track metrics and trends",
        bodyText: "Color, brightness, and whether or not the lights are on or off are tracked and easily accessible.",
        iconSrc: barGraphIcon,
        iconAlt: "Signal Bars Icon",
        orientation: Orientation.west,
    }
]
