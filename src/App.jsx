import React from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import SubmitForm from "./pages/Submit/SubmitForm";
import Contact from "./pages/Contact/Contact";
import PageNotFound from "./pages/Error/PageNotFound";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="submit" element={<SubmitForm />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <ScrollButton />
    </div>
  );
}

export default App;
