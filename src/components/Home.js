import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Portfolio from "./Portfolio";
import Stories from "./Stories";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";

function Home({ scrollY }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };
  return (
    <>
      <Navigation
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Portfolio scrollY={scrollY} />
      <Stories />
    </>
  );
}

export default Home;
