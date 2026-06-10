import motorcycleImage from "../images/pngtree-black-motorcycle-side-view-png-image_12015725.png";
import carImage from "../images/Belyj-avtomobil.png";
import guardImage from "../images/1691588701_grizly-club-p-kartinki-okhrannik-bez-fona-54.png";

function CategoriesSection() {
  return (
    <section className="sectionCategories" id="price">
      <div className="cardsCategories">
        <div className="photoCategories">
          <p className="big_letter">А</p>

          <img
            src={motorcycleImage}
            alt="Иконка мотоцикла"
            className="icon_motorcycle"
          />
        </div>

        <div className="categoriaA-info">
          <div className="category-card__header">
            <h2 className="category-card__title">Категория</h2>

            <span className="category-card__title_span">A</span>
          </div>

          <div className="category-card__content">
            <div className="category-card__column-left">
              <p className="category-card__text">
                Стоимость обучения категории «A» 20.000 руб с учётом ГСМ
              </p>

              <p className="category-card__text">
                Плату за обучение можно произвести врассрочку
              </p>
            </div>

            <div className="category-card__divider"></div>

            <div className="category-card__column-right">
              <p className="category-card__text category-card__text--right">
                Срок обучения 2,5 месяца
              </p>

              <p className="category-card__text category-card__text--right">
                Оплатить можно, как картой, так и наличными
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cardsCategories-B">
        <div className="photoCategories">
          <p className="big_letter">В</p>

          <img src={carImage} alt="Иконка автомобиля" className="icon_avto" />
        </div>

        <div className="categoriaA-info">
          <div className="category-card__header">
            <h2 className="category-card__title">Категория</h2>

            <span className="category-card__title_span">В</span>
          </div>

          <div className="category-card__content">
            <div className="category-card__column-left">
              <p className="category-card__text">
                Стоимость обучения категории «В» 20.000 руб с учётом ГСМ
              </p>

              <p className="category-card__text">
                Плату за обучение можно произвести врассрочку
              </p>
            </div>

            <div className="category-card__divider"></div>

            <div className="category-card__column-right">
              <p className="category-card__text category-card__text--right">
                Срок обучения 2,5 месяца
              </p>

              <p className="category-card__text category-card__text--right">
                Оплатить можно, как картой, так и наличными
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="guard-training">
        <img
          src={guardImage}
          alt="Охранник"
          className="guard-training__image"
        />

        <h2 className="guard-training__title">
          Обучение на <span>охранника</span>
        </h2>

        <div className="guard-training__cards">
          <div className="guard-card">
            <p className="guard-card__text">
              Стоимость обучения на охранника 4 разряда
            </p>

            <div className="guard-card__line"></div>

            <p className="guard-card__text">4 000 руб.</p>
          </div>

          <div className="guard-card">
            <p className="guard-card__text">
              Повышение квалификации охранника 4 разряда
            </p>

            <div className="guard-card__line"></div>

            <p className="guard-card__text">4 000 руб.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
