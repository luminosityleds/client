import FrontPage from "./components/FrontPage";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Register from "./components/Register";

// Context Providers for State Management
import { ToggleHeaderProvider } from './state/ToggleHeader'

function App() {
  return (
    <ToggleHeaderProvider>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </ToggleHeaderProvider>
  );
}

export default App;
