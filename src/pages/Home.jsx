import HeroSection from "../components/Home/HeroSection";
import AboutUsSection from "../components/Home/AboutUsSection";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { useEffect, useState } from "react";

function Home() {
  const [showNavBar, setShowNavBar] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const heroSectionHeight =
      document.getElementById("hero-section").offsetHeight;

    setShowNavBar(scrollPosition > heroSectionHeight * 0.5);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <FeaturedProducts />
      <NavigationBar showNavBar={showNavBar} />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default Home;
