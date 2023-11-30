import React from "react";
import FrontPage from "./components/FrontPage";
import Login from "./components/Login";
import Team from "./components/Team";
import { Route, Routes } from "react-router-dom"

import "./App.css";

function App() {
  return <Routes>
    <Route path="/" element={<FrontPage/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/team" element={<Team/>} />
  </Routes>
}

export default App;