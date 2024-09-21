import { useToggleHeader } from "../state/ToggleHeader";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export const LightMode = () => {
  const { light } = useToggleHeader();
  return (
    <div className={`"App" ${light ? "" : "dark"}`}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default LightMode;
