import React from "react";
import FrontPage from "./components/FrontPage";
import Login from "./components/Login";
import AccountPage from "./components/AccountPage";
import { Route, Routes } from "react-router-dom"

import "./App.css";

function App() {
  return <Routes>
    <Route path="/" element={<FrontPage/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/account" element={<AccountPage />} />
  </Routes>
}

export default App;