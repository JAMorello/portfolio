import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Acerca from "./pages/Acerca";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [currentPage, setCurrentPage] = useState("");

  return (
    <div style={{ height: "80%" }}>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setCurrentPage={setCurrentPage} />} />
        <Route
          path="/acerca"
          element={<Acerca setCurrentPage={setCurrentPage} />}
        />
        <Route
          path="/proyectos"
          element={<Proyectos setCurrentPage={setCurrentPage} />}
        />
        <Route
          path="/contacto"
          element={<Contacto setCurrentPage={setCurrentPage} />}
        />
      </Routes>
      <Footer currentPage={currentPage} />
    </div>
  );
};

export default App;
