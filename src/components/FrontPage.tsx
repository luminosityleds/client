import LightMode from "./LightMode";

export const FrontPage = () => {
  return (
    <div>
      <LightMode />
    </div>
  );
};

export default FrontPage;

// TODO: Light mode state needs to persist through refresh and exiting same browser(non incognito mode) and moving through different pages.
// TODO: https://stackoverflow.com/questions/28314368/how-to-maintain-state-after-a-page-refresh-in-react-js