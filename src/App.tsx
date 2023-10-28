import React from "react";
import FrontPage from "./components/FrontPage";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom"

import "./App.css";

function App() {
  return <Routes>
    <Route path="/" element={<FrontPage/>} />
    <Route path="/login" element={<Login />} />
  </Routes>
}

export default App;