import Header from "../components/Header";
import TrainingCarousel from "../components/TrainingCarousel";

import class1 from "../images/class1.jpg";
import class2 from "../images/class2.jpg";
import class3 from "../images/class3.jpg";
import class5 from "../images/class5.jpg";

import avtodrom1 from "../images/avtodrom1.jpg";
import avtodrom2 from "../images/avtodrom2.jpg";
import avtodrom3 from "../images/avtodrom3.jpg";
import avtodrom4 from "../images/avtodrom4.jpg";

import auto1 from "../images/auto1.jpg";
import auto2 from "../images/auto2.jpg";
import auto3 from "../images/auto3.jpg";
import auto4 from "../images/auto4.jpg";
import auto5 from "../images/auto5.jpg";
import auto6 from "../images/auto6.jpg";
import auto7 from "../images/auto7.jpg";
import auto10 from "../images/auto10.jpg";

import "../styles/trainingPage.css";

function TrainingPage() {
  return (
    <main className="training-main">
      <h2 className="title">Площадка знаний</h2>

      <section className="training">
        <div className="training__content">
          <div className="training__left">
            <TrainingCarousel images={[class2, class3, class5, class1]} />
          </div>

          <div className="training__right">
            <div className="class-room">
              <h3 className="heading">
                <span>Теория без скуки:</span> от правил до реальных ситуациям
              </h3>

              <div className="numbering">
                <span className="circle-number">1</span>

                <span className="text-numbering">
                  Наши учебные классы оборудованы всем необходимым для
                  комфортного и эффективного изучения правил дорожного движения.
                  Просторные аудитории с мультимедийными проекторами.
                </span>
              </div>

              <div className="numbering">
                <span className="circle-number">2</span>

                <span className="text-numbering">
                  Мультимедийное оборудование — видеоразборы реальных ситуаций
                  на дороге.
                </span>
              </div>

              <div className="numbering">
                <span className="circle-number">3</span>

                <span className="text-numbering">
                  Макеты перекрёстков — визуализация сложных манёвров.
                </span>
              </div>

              <div className="numbering">
                <span className="circle-number">4</span>

                <span className="text-numbering">
                  Интерактивные тесты — мгновенная проверка знаний с
                  пояснениями.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="quote">
          <div className="illustration">
            <div className="quote-icon">❝</div>

            <div className="vertical-line"></div>

            <div className="quote-text">
              <p>
                «Теория — это фундамент безопасного вождения. Мы делаем всё,
                чтобы вы не просто запомнили правила, а поняли логику дорожного
                движения.»
              </p>

              <p>Автопрестиж</p>
            </div>
          </div>
        </div>
      </section>

      <div className="line"></div>

      {/* Автодром */}

      <section className="training">
        <div className="training__content">
          <div className="training__left">
            <TrainingCarousel
              images={[avtodrom1, avtodrom2, avtodrom3, avtodrom4]}
            />
          </div>

          <div className="training__right">
            <div className="class-room">
              <h3 className="heading">
                <span>Отработка навыков</span> в условиях, приближенных к
                реальным
              </h3>

              <div className="numbering">
                <span className="circle-number">1</span>

                <span className="text-numbering">
                  Наш автодром соответствует всем требованиям ГИБДД для приёма
                  практического экзамена.
                </span>
              </div>

              <div className="numbering">
                <span className="circle-number">2</span>

                <span className="text-numbering">
                  Разметка под экзамен — всё как на настоящем тестировании.
                </span>
              </div>

              <div className="numbering">
                <span className="circle-number">3</span>

                <span className="text-numbering">
                  Эстакада — отработка трогания на подъёме без отката.
                </span>
              </div>

              <div className="numbering">
                <span className="circle-number">4</span>

                <span className="text-numbering">
                  Освещение — возможность занятий в вечернее время.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="quote">
          <div className="illustration">
            <div className="vertical-line"></div>

            <div className="quote-text">
              <p>
                Целых 2400 м² — ни одного лишнего метра, каждый для вашей
                практики.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="line"></div>

      {/* Автомобили */}

      <section className="training">
        <div className="training__content">
          <div className="training__left">
            <TrainingCarousel
              images={[auto1, auto2, auto3, auto4, auto5, auto6, auto7, auto10]}
            />
          </div>

          <div className="training__right">
            <div className="class-room">
              <h3 className="heading">
                Учитесь на <span>современных автомобилях</span> с дуальным
                управлением
              </h3>

              <div className="numbering">
                <span className="circle-number">1</span>

                <span className="text-numbering">
                  Техническое обслуживание проводится строго по регламенту.
                </span>
              </div>

              <div className="numbering">
                <span className="circle-number">2</span>

                <span className="text-numbering">
                  Видеорегистраторы — разбор маршрута и ошибок.
                </span>
              </div>

              <div className="numbering">
                <span className="circle-number">3</span>

                <span className="text-numbering">
                  Инструктор всегда может помочь благодаря дополнительному
                  управлению.
                </span>
              </div>

              <div className="numbering">
                <span className="circle-number">4</span>

                <span className="text-numbering">
                  7 автомобилей одновременно в учебном процессе.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="quote">
          <div className="illustration">
            <div className="quote-icon">❝</div>

            <div className="vertical-line"></div>

            <div className="quote-text">
              <p>«Ваша безопасность — наш приоритет»</p>

              <p>Автопрестиж</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TrainingPage;
