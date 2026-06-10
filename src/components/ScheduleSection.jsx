import mapImage from "../images/map.png";
import mailIcon from "../images/4812721.png";
import phoneIcon from "../images/free-icon-phone-call-5585562.png";
import locationIcon from "../images/free-icon-location-3699580.png";
import clockIcon from "../images/3239945.png";

function ScheduleSection() {
  return (
    <section className="body_sections" id="time-work">
      <h2 className="body_title">
        Будем рады <span>вас видеть</span>
      </h2>

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
          <span>Сб - Вс</span>
          <span>8:00 - 17:00</span>
        </article>
      </div>

      <div className="contacts-block">
        <div className="contact-text">
          <img
            src={mapImage}
            alt="карта"
            className="contacts_map"
          />
        </div>

        <div className="contacts-info">
          <div className="contact-item">
            <img
              src={mailIcon}
              alt="почта"
              className="contacts_icon"
            />

            <div className="contact-text">
              <p>Адрес электронной почты:</p>

              <a
                href="mailto:avtoprestige52@mail.ru"
                className="contact-text"
              >
                avtoprestige52@mail.ru
              </a>
            </div>
          </div>

          <div className="contact-item">
            <img
              src={phoneIcon}
              alt="телефон"
              className="contacts_icon"
            />

            <div className="contact-text">
              <p>Телефон:</p>

              <a
                href="tel:+79087550024"
                className="contact-text"
              >
                8-908-755-00-24
              </a>

              <a className="contact-text">
                8-831-702-29-54
              </a>
            </div>
          </div>

          <div className="contact-item">
            <img
              src={locationIcon}
              alt="адрес"
              className="contacts_icon"
            />

            <div className="contact-text">
              <p>
                г. Богородск,
                <br />
                ул. Ленина,
                <br />
                д. 218а
              </p>
            </div>
          </div>

          <div className="contact-item">
            <img
              src={clockIcon}
              alt="время работы"
              className="contacts_icon"
            />

            <div>
              <p>Время работы:</p>

              <span>Пн-Чт 8:00-17:00</span>
              <br />

              <span>Пт 8:00-16:00</span>
              <br />

              <span>Сб-Вс — выходной</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScheduleSection;