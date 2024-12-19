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
          <Route path="/konten3d" element={<Konten3D />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sepatu" element={<Sepatu />} />
          <Route path="/kaos" element={<Kaos />} />
          <Route path="/topi" element={<Topi />} />
          <Route path="/jam-tangan" element={<JamTangan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
