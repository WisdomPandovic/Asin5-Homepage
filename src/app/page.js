"use client";
import HeroSection from "@/components/ImageTextComponent/HeroSection";
import AreasOfFocusComponent from "@/components/AreasOfFocusComponent/AreasOfFocusComponent";
import ServiceIncubation from "@/components/ServiceIncubationComponent/ServiceIncubation";
import StartupPortfolio from "@/components/StartupPortfolio/StartupPortfolio";
import ConceptInnovation from "@/components/ConceptInnovationComponent/ConceptInnovation";
import IncubationProgramme from "@/components/IncubationProgramm/IncubationProgramm";
import WhatWeBring from "@/components/WhatWeBring/WhatWeBring";
import WhatMatterMost from "@/components/WhatMatterMost/WhatMatterMost"

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className="gray-background">
        <div className="container py-4 pt-5">
          <p className="text-upper text-primary fw-bold">Who are we</p>
          <h2 className="lh-1 fs-4 fw-bold ">
            We Make Your Startup A Success Story
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button className="btn btn-dark btn-sm mt-3">READ ABOUT US</button>
        </div>
      </div>

      <AreasOfFocusComponent />
      <ServiceIncubation />
      <StartupPortfolio />
      <ConceptInnovation/>
      <IncubationProgramme/>
      <WhatWeBring/>
      <WhatMatterMost/>
    </div>
  );
}
