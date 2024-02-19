import { useToggle } from "../ts/ToggleHeader";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export const LightMode = () => {
  const lightMode = useToggle((state) => state.light);
  return (
    <div className={`"App" ${lightMode ? "" : "dark"}`}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default LightMode;
