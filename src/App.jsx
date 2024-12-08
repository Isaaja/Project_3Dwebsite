import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Contact,
  Dashboard,
  Experience,
  Hero,
  Navbar,
  Portofolio,
} from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
