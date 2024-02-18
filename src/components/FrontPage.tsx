import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useToggle } from "../ts/ToggleHeader";

export const FrontPage = () => {
  const lightMode = useToggle((state) => state.light);
  return (
    <div className={`"App" ${lightMode ? "" : "dark"}`}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default FrontPage;