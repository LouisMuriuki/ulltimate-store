import React from "react";
import TopSection from "./components/TopSection";
import Header from "./components/Header";
import HomeHeroLayout from "../homeherolayout/HomeHeroLayout";
import Services from "../../components/Services/services";
import HeroTwo from "../../components/HeroSection/HeroTwo/HeroTwo";
import HomeHero from "../../components/HeroSection/HomeHero/HomeHero";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col w-full ">
      <TopSection />
      <div className="container mx-auto px-16">
        <Header />
      </div>
      <div className="container mx-auto px-16">
        <HomeHeroLayout>
          <HomeHero/>
        </HomeHeroLayout>
      </div>
      <div className="container mx-auto py-10 px-16">
        <Services/>
      </div>
      <div className="container mx-auto py-10 px-16">
        <HeroTwo/>
      </div>
{children}
      
    </div>
  );
};

export default MainLayout;
