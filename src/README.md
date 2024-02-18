# Components
## `Content`
Page content between the Header and Footer components

## `IconCard`
A simple card that displays a heading text over a text body with an accompanying icon. The icon's placement with respect to the text is called its `orientation`, which is defined as an enum
in the component module. Data for icon cards is stored inside and array of objects of type `ICardData` in `src/assets/cardData.tsx`. To add another card, add a new object to the array and follow the interface defined in the component module.

For the present, card icons will be handled outside of the IconCardComponent, and should be passed to it as a prop when instantiating it. FontAwesome provides their own `FontAwesomeIcon` component, which can be passed in this way.

# Test Coverage
As part of our continuous integreation (CI) proceedures, we'll now test if this codebase's line coverage stays above 90% in every pull request before allowing a merge. This means that we should try to create unit tests for our code, going forward. This will ensure that our code is tested and working and allow us to catch breaking changes before mergeing to master. For more information on code coverage, see https://www.atlassian.com/continuous-delivery/software-testing/code-coverage.
For information on how to write tests using Vitest, see https://vitest.dev/.
For general information on testing in React, see https://www.freecodecamp.org/news/testing-react-hooks/.