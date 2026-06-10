import { useEffect } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import CategoriesSection from "../components/CategoriesSection";
import AdvantagesSection from "../components/AdvantagesSection";
import ScheduleSection from "../components/ScheduleSection";
import ReviewsSection from "../components/ReviewsSection";
import FAQSection from "../components/FAQSection";

function HomePage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://res.smartwidgets.ru/app.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="page">
      <main className="main">
        <Navigation />
        <CategoriesSection />
        <div className="line"></div>
        <AdvantagesSection />
        <div className="line"></div>
        <ScheduleSection />
        <div className="line"></div>
        <ReviewsSection />
        <div className="line"></div>
        <FAQSection />
      </main>
    </div>
  );
}

export default HomePage;
