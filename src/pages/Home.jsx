// pages/Home.jsx
import React from "react";
import Hero from "../components/sections/Hero";
import WelcomeMessage from "../components/sections/WelcomeMessage";
import OutreachSlideshow from "../components/sections/OutreachSlideshow";

const Home = () => {
  return (
    <div>
      <Hero />
      <WelcomeMessage />
      <OutreachSlideshow />
    </div>
  );
};

export default Home;
