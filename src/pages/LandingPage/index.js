import React, { useEffect } from "react";
import Header from "./Header/Header";
import Hero from "./Hero/index";
import Product from "./Product";
import Popular from "./Popular/popular";
import Strength from "./Strength/strength";
import Footer from "./Footer/footer";

import "./Hero/hero.scss";

export default function LandingPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div className="bg-landing-page">
      <Header />
      <Hero />
      <Product />
      <Popular />
      <Strength />
      <Footer />
    </div>
  );
}
