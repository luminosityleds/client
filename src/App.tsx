import React from "react";
import FrontPage from "./components/FrontPage";
import Login from "./components/Login";
<<<<<<< HEAD
import AccountPage from "./components/AccountPage";
import { Route, Routes } from "react-router-dom"
=======
import { Route, Routes } from "react-router-dom";
>>>>>>> master

import "./App.css";
import Register from "./components/Register";

function App() {
<<<<<<< HEAD
  return <Routes>
    <Route path="/" element={<FrontPage/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/account" element={<AccountPage />} />
  </Routes>
=======
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
>>>>>>> master
}

export default App;
