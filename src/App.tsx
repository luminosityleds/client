import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useToggle } from "./ts/ToggleHeader";

import "./App.css";

function App() {
  const lightMode = useToggle((state) => state.light);
  return (
    <div className={`"App" ${lightMode ? "" : "dark"}`}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;