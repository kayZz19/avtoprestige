import { useState, useEffect } from "react";

import TeacherCard from "./TeacherCard";
import InfoModal from "./InfoModal";

import teachersData from "../data/teachersData";

import teacherImage from "../images/1250689.png";
import closeIcon from "../images/17047.png";

function TeachersSection() {
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const [hideHint, setHideHint] = useState(false);

  useEffect(() => {
    const slider = document.querySelector(
      ".teachers-section .teachers__slider",
    );

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
      <section className="administration teachers-section">
        <h2 className="all_title">
          Сведения о преподавателях <span>учебных предметов</span>
        </h2>

        <div className="teachers">
          <div className={`teachers__hint ${hideHint ? "hidden" : ""}`}>→</div>

          <div className="teachers__slider">
            {teachersData.map((teacher) => (
              <TeacherCard
                key={teacher.id}
                image={teacherImage}
                name={teacher.name}
                description={teacher.subject}
                experience={teacher.experience}
                onOpen={() => setSelectedTeacher(teacher)}
              />
            ))}
          </div>
        </div>
      </section>

      <InfoModal
        teacher={selectedTeacher}
        closeIcon={closeIcon}
        onClose={() => setSelectedTeacher(null)}
      />
    </>
  );
}

export default TeachersSection;
