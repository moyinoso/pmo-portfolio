import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatILookFor from "@/components/WhatILookFor";
import SelectedWork from "@/components/SelectedWork";
import Exploring from "@/components/Exploring";
import Problems from "@/components/Problems";
import Experience from "@/components/Experience";
import HumanSide from "@/components/HumanSide";
import Faith from "@/components/Faith";
import Elsewhere from "@/components/Elsewhere";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatILookFor />
        <SelectedWork />
        <Exploring />
        <Problems />
        <Experience />
        <HumanSide />
        <Faith />
        <Elsewhere />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
