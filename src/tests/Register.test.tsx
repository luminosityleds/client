import * as React from "react";
import * as ReactDOM from "react-dom";
import Register from "../components/Register";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>,
    div
  );
});
