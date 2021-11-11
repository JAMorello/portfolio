import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Acerca from "./pages/Acerca";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <div className="bg-home h-screen bg-no-repeat bg-cover">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
