import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Konten3D from "./pages/Konten3D";
import Sepatu from "./pages/Sepatu";
import Topi from "./pages/Topi";
import Kaos from "./pages/Kaos";
import JamTangan from "./pages/JamTangan";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetails from "./pages/ItemDetails";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);


  return (
    <Router>
      <div className="font-inter overflow-x-hidden">
        <Navbar />
        <Routes>
          { }
          <Route
            path="/"
            element={
              <>
                <Dashboard />
                <Konten3D />
                <Experience />
                <Contact />
              </>
            }
          />
          { }
          <Route path="/" element={<Dashboard />} />
          <Route path="/item-details/:id" element={<ItemDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
