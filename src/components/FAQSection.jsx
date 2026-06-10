import { useState } from "react";

import plusIcon from "../images/plus.png";

import faqData from "../data/faqData";

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="body_sections" id="questions">
      <h2 className="body_title">
        Поможем разобраться с<span> вопросами</span>
      </h2>

      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
        >
          <div className="faq-header" onClick={() => toggleQuestion(index)}>
            <h3 className="faq-title">{item.question}</h3>

            <img src={plusIcon} alt="Открыть ответ" className="faq-icon" />
          </div>

          <div className="faq-content">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default FAQSection;
