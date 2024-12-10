import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";

function App() {
  return (
    <div className="w-full flex flex-col items-center  bg-accent min-h-screen">
      <Navbar/>
      <Hero />
      <Products/>
    </div>
  );
}

export default App;
