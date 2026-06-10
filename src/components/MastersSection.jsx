import { useState, useEffect } from "react";

import TeacherCard from "./TeacherCard";
import InfoModal from "./InfoModal";

import mastersData from "../data/mastersData";

import teacherImage from "../images/1250689.png";
import closeIcon from "../images/17047.png";

function MastersSection() {
  const [selectedMaster, setSelectedMaster] = useState(null);

  const [hideHint, setHideHint] = useState(false);

  useEffect(() => {
    const sliders = document.querySelectorAll(".teachers__slider");

    const slider = sliders[1];

    if (!slider) return;

    const handleScroll = () => {
      setHideHint(true);
    };

    slider.addEventListener("scroll", handleScroll, {
      once: true,
    });

    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="administration">
        <h2 className="all_title">
          Сведения о мастерах <span>практического обучения</span>
        </h2>

        <div className="teachers">
          <div className={`teachers__hint ${hideHint ? "hidden" : ""}`}>→</div>

          <div className="teachers__slider">
            {mastersData.map((master) => (
              <TeacherCard
                key={master.id}
                image={teacherImage}
                name={master.name}
                description={master.categories}
                experience={master.experience}
                onOpen={() => setSelectedMaster(master)}
              />
            ))}
          </div>
        </div>
      </section>

      <InfoModal
        teacher={selectedMaster}
        closeIcon={closeIcon}
        onClose={() => setSelectedMaster(null)}
      />
    </>
  );
}

export default MastersSection;
