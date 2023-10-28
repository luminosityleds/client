import React from "react";
import FrontPage from "./components/FrontPage";
import Login from "./components/Login";
import TestComponent from "./components/TestComponent";
import { Route, Routes } from "react-router-dom"
import "./App.css";

function App() {
  return <Routes>
    <Route path="/" element={<FrontPage/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/test" element={<TestComponent/>} />
  </Routes>
}

export default App;