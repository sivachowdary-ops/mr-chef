import { useEffect } from "react";
import TickerBar from "@/components/TickerBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Hero from "@/sections/Hero";
import WhyPartner from "@/sections/WhyPartner";
import Packages from "@/sections/Packages";
import InvestmentTable from "@/sections/InvestmentTable";
import ModelComparison from "@/sections/ModelComparison";
import Menu from "@/sections/Menu";
import HowItWorks from "@/sections/HowItWorks";
import Gallery from "@/sections/Gallery";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";

function App() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="sticky top-0 z-50 w-full">
        <TickerBar />
        <Header />
      </div>
      <main>
        <Hero />
        <WhyPartner />
        <Packages />
        <InvestmentTable />
        <ModelComparison />
        <Menu />
        <HowItWorks />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
