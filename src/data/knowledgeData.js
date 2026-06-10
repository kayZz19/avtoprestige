import class1 from "../images/class1.jpg";
import class2 from "../images/class2.jpg";
import class3 from "../images/class3.jpg";
import class5 from "../images/class5.jpg";

import autodrom from "../images/1634386334-36-p-ploshchadka-dlya-avtomobilya-foto-39.jpg";

import auto1 from "../images/auto1.jpg";
import auto2 from "../images/auto2.jpg";
import auto3 from "../images/auto3.jpg";
import auto4 from "../images/auto4.jpg";
import auto5 from "../images/auto5.jpg";
import auto6 from "../images/auto6.jpg";
import auto7 from "../images/auto7.jpg";
import auto10 from "../images/auto10.jpg";

const knowledgeData = [
  {
    id: 1,

    title: (
      <>
        <span>Теория без скуки:</span> от правил до реальных ситуаций
      </>
    ),

    items: [
      "Наши учебные классы оборудованы всем необходимым для комфортного и эффективного изучения правил дорожного движения. Просторные аудитории с мультимедийными проекторами",
      "Мультимедийное оборудование — видеоразборы реальных ситуаций на дороге",
      "Макеты перекрёстков — визуализация сложных манёвров",
      "Интерактивные тесты — мгновенная проверка знаний с пояснениями",
    ],

    images: [class2, class3, class5, class1],

    quote:
      "«Теория — это фундамент безопасного вождения. Мы делаем всё, чтобы вы не просто запомнили правила, а поняли логику дорожного движения.»",

    author: "Автопрестиж",

    showQuoteIcon: true,
  },

  {
    id: 2,

    title: (
      <>
        <span>Отработка навыков</span> в условиях, приближенных к реальным
      </>
    ),

    items: [
      "Наш автодром соответствует всем требованиям ГИБДД для приёма практического экзамена.",
      "Разметка под экзамен — всё как на настоящем тестировании в ГИБДД",
      "Эстакада — отработка трогания на подъёме без отката",
      "Освещение — возможность занятий в вечернее время",
    ],

    images: [autodrom],

    quote:
      "Целых 2 400 м² — ни одного лишнего метра, каждый — для вашей практики",

    showQuoteIcon: false,
  },

  {
    id: 3,

    title: (
      <>
        Учитесь на <span>современных автомобилях</span> с дуальным управлением
      </>
    ),

    items: [
      "Техническое обслуживание проводится строго по регламенту.",
      "Видеорегистраторы — разбор маршрута и ошибок",
      "Инструктор всегда может помочь вам с помощью вспомогательного технического оснащения",
      "7 автомобилей одновременно в учебном процессе",
    ],

    images: [auto1, auto2, auto3, auto4, auto5, auto6, auto7, auto10],

    quote: "«Ваша безопасность — наш приоритет»",

    author: "Автопрестиж",

    showQuoteIcon: true,
  },
];

export default knowledgeData;
