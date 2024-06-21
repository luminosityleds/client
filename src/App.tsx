import React from "react";
import FrontPage from "./components/FrontPage";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom"
import "./App.css";
import { TestLogin } from "./components/TestLogin";

function App() {
  return <Routes>
    <Route path="/" element={<FrontPage/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/googlelogin" element={<TestLogin />} />
  </Routes>
}

export default App;