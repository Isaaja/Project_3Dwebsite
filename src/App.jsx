import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Konten3D from "./pages/Konten3D";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div className="font-inter overflow-x-hidden">
      <Navbar />
      <Dashboard />
      <Konten3D />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
