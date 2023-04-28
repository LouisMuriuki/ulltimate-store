import React from "react";
import TopSection from "./components/TopSection";
import Header from "./components/Header";
import HomeHero from "../homeherolayout/HomeHero";
import Services from "../../components/Services/services";
import HeroTwo from "../../components/HeroTwo/HeroTwo";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col w-full">
      <TopSection />
      <div className="container mx-auto px-16">
        <Header />
      </div>
      <div className="container mx-auto px-16">
        <HomeHero />
      </div>
      <div className="container mx-auto pt-10 px-16">
        <Services/>
      </div>
      <div className="container mx-auto pt-10 px-16">
        <HeroTwo/>
      </div>
{children}
      
    </div>
  );
};

export default MainLayout;
