"use client";
import HeroSection from "@/components/ImageTextComponent/HeroSection";
import AreasOfFocusComponent from "@/components/AreasOfFocusComponent/AreasOfFocusComponent";
import ServiceIncubation from "@/components/ServiceIncubationComponent/ServiceIncubation";
import StartupPortfolio from "@/components/StartupPortfolio/StartupPortfolio";
import ConceptInnovation from "@/components/ConceptInnovationComponent/ConceptInnovation";
import IncubationProgramme from "@/components/IncubationProgramm/IncubationProgramm";
import WhatWeBring from "@/components/WhatWeBring/WhatWeBring";
import WhatMatterMost from "@/components/WhatMatterMost/WhatMatterMost";
import SliderComponent from "@/components/SliderComponent/SliderComponent"
export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className="gray-background">
        <div className="container py-4 pt-5">
          <p className="text-upper text-primary fw-bold">Who We Are</p>
          <h2 className="lh-1 fs-4 fw-bold ">
            We Make Your Startup A Success Story
          </h2>
          <p className="mb-0">SINC Partners has a novel vision of making success available to everyone and democratizing the pain point of success. We are a next generation startup studio focus on building and supporting enterprises at scale and we help them raise service investments and funds across 3-5 deals from as low as $25k at start to up to $15m before you leave the lab.</p>
          <p >We are a Gasus Business, a business built on the foundation of Christian values and belief.</p>
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
      <SliderComponent/>
    </div>
  );
}
