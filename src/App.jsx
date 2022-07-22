import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import SubmitForm from "./pages/Submit/SubmitForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="submit" element={<SubmitForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
