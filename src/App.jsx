import React, { useState, createContext } from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import SubmitForm from "./pages/Submit/SubmitForm";
import Footer from "./components/Footer/Footer";
import ScrollButton from "./components/ScrollButton/ScrollButton";

const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme ? "light" : "dark"));
  };

  return (
    <div className="App" id={theme}>
      <Router>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <NavBar toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="submit" element={<SubmitForm />} />
          </Routes>
          <Footer />
          <ScrollButton />
        </ThemeContext.Provider>
      </Router>
    </div>
  );
}

export default App;
