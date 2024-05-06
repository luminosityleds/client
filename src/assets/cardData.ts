import { Orientation, ICardData } from "../components/IconCard"

export const iconCards: ICardData[] = [
    {
        headingText: "LuminosityLEDs",
        bodyText: "Illuminate individual expression and creativity",
        orientation: Orientation.east,
        // https://fontawesome.com/icons/lightbulb?f=classic&s=solid
        buttons: ["Login", "Register"],
    },
    {
        headingText: "Illuminate individual expression and creativity...",
        bodyText: "...with just the touch of a button.  A service that makes it easy to light up a room.",
        orientation: Orientation.west,
        // https://fontawesome.com/icons/lightbulb?f=classic&s=solid
        icon: "lightbulb",
    },
    {
        headingText: "Seamless integration and connection",
        bodyText: "Lights are setup to hook up straight to Wi-Fi with a few easy steps.",
        orientation: Orientation.east,
        icon: "wifi",
    },
    {
        headingText: "Track metrics and trends",
        bodyText: "Color, brightness, and whether or not the lights are on or off are tracked and easily accessible.",
        orientation: Orientation.west,
        icon: "signal",
    }
]
