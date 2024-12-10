import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="w-full flex justify-center h-screen">
      <Navbar/>
      <Hero />
    </div>
  );
}

export default App;
