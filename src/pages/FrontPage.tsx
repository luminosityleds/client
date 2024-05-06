import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
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