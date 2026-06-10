import Header from "../components/Header";

import directorPhoto from "../images/administator.jpg";

import TeachersSection from "../components/TeachersSection";
import MastersSection from "../components/MastersSection";

function AdministrationPage() {
  return (
    <div className="page">

      <main className="main">
        <section className="administration">
          <h2 className="all_title">Администрация</h2>

          <div className="administration__director">
            <div className="administration__photo">
              <img src={directorPhoto} alt="Директор" />
            </div>

            <div className="administration__info">
              <p>Директор ЧУ КУЦ «Автопрестиж»: Кириллова Марина Михайловна</p>

              <p>Руководитель с 2018 года</p>
            </div>
          </div>

          <div className="administration__block">
            <h3 className="administration__subtitle">Часы приема</h3>

            <div className="grafic_cards">
              <article className="grafic_items grafic_items_SS">
                <span>Пн</span>
                <span>10:00 - 15:00</span>
              </article>

              <article className="grafic_items grafic_items_SS">
                <span>Ср</span>
                <span>10:00 - 15:00</span>
              </article>
            </div>
          </div>

          <div className="administration__block">
            <h3 className="administration__subtitle">График работы</h3>

            <div className="grafic_cards">
              <article className="grafic_items">
                <span>Пн</span>
                <span>8:00 - 17:00</span>
              </article>

              <article className="grafic_items">
                <span>Вт</span>
                <span>8:00 - 17:00</span>
              </article>

              <article className="grafic_items">
                <span>Ср</span>
                <span>8:00 - 17:00</span>
              </article>

              <article className="grafic_items">
                <span>Чт</span>
                <span>8:00 - 17:00</span>
              </article>

              <article className="grafic_items">
                <span>Пт</span>
                <span>8:00 - 17:00</span>
              </article>

              <article className="grafic_items grafic_items_SS">
                <span>Обед</span>
                <span>12:00 - 13:00</span>
              </article>
            </div>
          </div>
        </section>

        <div className="line"></div>

        <TeachersSection />

        <div className="line"></div>

        <MastersSection />
      </main>
    </div>
  );
}

export default AdministrationPage;
