import React, { useEffect } from "react";
import useLocalStorage from "use-local-storage";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Newsletter from "../components/Newsletter/Newsletter";
// import NewsletterMailchimp from "../components/Newsletter/NewsletterMailchimp";
import Featured from "../components/Featured/Featured";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  let defaultTheme = window.matchMedia("(prefers-color-scheme: light)").matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultTheme ? "dark" : "light",
  );

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme-color", theme);
  }, [theme]);

  return (
    <div>
      <NavBar toggleTheme={toggleTheme} />

      <Outlet />

      <Featured />
      {/* <NewsletterMailchimp /> */}
      <Newsletter />

      <Footer />
    </div>
  );
};

export default Layout;
