import React from "react";
// import NavBar from "./components/NavBar/NavBar";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import SubmitForm from "./pages/Submit/SubmitForm";
import Contact from "./pages/Contact/Contact";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import { Routes, Route } from "react-router-dom";

function App() {
  // import { useLocation } from "react-router-dom";

  // export default function ScrollToTop() {
  //   const { pathname } = useLocation();

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [pathname]);

  //   return null;
  // }

  // useEffect(() => {
  //   window.history.scrollRestoration = "manual";
  // }, []);

  //   import { useEffect } from 'react';
  // import { useLocation } from 'react-router-dom';

  // export default function ScrollToTop() {
  //   const { pathname } = useLocation();

  //   useEffect(() => {
  //     window.scrollTo({
  //       top: 0,
  //       left: 0,
  //       behavior: 'smooth',
  //     });
  //   }, [pathname]);

  //   return null;
  // }

  return (
    <div className="App">
      {/* <NavBar toggleTheme={toggleTheme} /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="submit" element={<SubmitForm />} />
        </Route>
      </Routes>
      <ScrollButton />
    </div>
  );
}

export default App;
