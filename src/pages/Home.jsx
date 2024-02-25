import HeroSection from "../components/Home/HeroSection";
import AboutUsSection from "../components/Home/AboutUsSection";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import NavigationBar from "../components/NavigationBar";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

function Home() {
  const [showNavBar, setShowNavBar] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  // const location = useLocation();

  useEffect(() => {
    // Check if success message has been displayed previously
    const paymentSuccessDisplayed = sessionStorage.getItem(
      "paymentSuccessDisplayed"
    );
    // console.log(paymentSuccessDisplayed);
    if (paymentSuccessDisplayed === "true") {
      // Clear the flag in session storage
      sessionStorage.removeItem("paymentSuccessDisplayed");
      // Set paymentStatus only if success message hasn't been displayed before
      setPaymentStatus("success");
    }
  }, []);

  function handleScroll() {
    const scrollPosition = window.scrollY;
    const heroSectionHeight =
      document.getElementById("hero-section").offsetHeight;

    setShowNavBar(scrollPosition > heroSectionHeight * 0.5);
  }

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
      <NavigationBar
        showNavBar={showNavBar}
        status={paymentStatus}
        setStatus={setPaymentStatus}
        successMessage={"Payment successful! Thank you for your purchase."}
      />
      <TestimonialsSection />
    </div>
  );
}

export default Home;
