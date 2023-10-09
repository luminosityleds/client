# Components
## `Content`
Page content between the Header and Footer components

## `IconCard`
A simple card that displays a heading text over a text body with an accompanying icon. The icon's placement with respect to the text is called its `orientation`, which is defined as an enum
in the component module. Data for icon cards is stored inside and array of objects of type `ICardData` in `src/assets/cardData.tsx`. To add another card, add a new object to the array and follow the interface defined in the component module.

For the present, card icons will be handled outside of the IconCardComponent, and should be passed to it as a prop when instantiating it. FontAwesome provides their own `FontAwesomeIcon` component, which can be passed in this way.