import { Routes, Route } from "react-router-dom";
import BgParticles from "./components/BgParticles";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Acerca from "./pages/Acerca";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div style={{ height: "80%" }}>
      <Navbar />
      <BgParticles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
