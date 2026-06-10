import locationIcon from "../images/free-icon-location-3699580.png";
import autodromIcon from "../images/37425.png";
import carsIcon from "../images/263057.png";
import roadIcon from "../images/1165924.png";
import staffIcon from "../images/912316.png";
import percentIcon from "../images/foni-papik-pro-4nd0-p-kartinki-protsent-na-prozrachnom-fone-10.png";

function AdvantagesSection() {
  return (
    <section className="body_sections" id="advantages">
      <h2 className="body_title">
        Почему клиенты выбирают
        <span> именно нас</span>
      </h2>

      <div className="advantages-wrapper">
        <article className="advantage-card">
          <img
            src={locationIcon}
            alt=""
            className="advantage-icon"
          />

          <h3>Центр города</h3>

          <p>удобное местоположение</p>
        </article>

        <article className="advantage-card">
          <img
            src={autodromIcon}
            alt=""
            className="advantage-icon"
          />

          <h3>Собственный автодром</h3>

          <p>практикуйтесь без очередей</p>
        </article>

        <article className="advantage-card">
          <img
            src={carsIcon}
            alt=""
            className="advantage-icon"
          />

          <h3>Большой парк автомобилей</h3>

          <p>никаких лишних ожиданий</p>
        </article>

        <article className="advantage-card">
          <img
            src={roadIcon}
            alt=""
            className="advantage-icon"
          />

          <h3>Транспортная развязка</h3>

          <p>легко отовсюду добраться</p>
        </article>

        <article className="advantage-card">
          <img
            src={staffIcon}
            alt=""
            className="advantage-icon"
          />

          <h3>Квалифицированные сотрудники</h3>

          <p>стаж более 10 лет</p>
        </article>

        <article className="advantage-card">
          <img
            src={percentIcon}
            alt=""
            className="advantage-icon"
          />

          <h3>Рассрочка обучения</h3>

          <p>платите без переплат</p>
        </article>
      </div>
    </section>
  );
}

export default AdvantagesSection;