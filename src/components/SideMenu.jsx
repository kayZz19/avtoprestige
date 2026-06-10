import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";
import closeIcon from "../images/17047.png";

function SideMenu({ isOpen, onClose }) {
  const [documentsPage, setDocumentsPage] = useState(false);

  const handleClose = () => {
    setDocumentsPage(false);
    onClose();
  };

  const handleBack = () => {
    setDocumentsPage(false);
  };

  return (
    <div className={`side-menu ${isOpen ? "active" : ""}`}>
      <div className="side-menu__overlay" onClick={handleClose}></div>

      <div className="side-menu__content">
        <div className="side-menu__header">
          <img src={logo} alt="Автопрестиж" className="side-menu__logo" />

          <button className="side-menu__close" onClick={handleClose}>
            <img src={closeIcon} alt="Закрыть" />
          </button>
        </div>

        {!documentsPage ? (
          <nav className="side-menu__nav">
            <Link to="/" onClick={handleClose}>
              Основные сведения
            </Link>

            <button
              className="side-menu__documents-btn"
              onClick={() => setDocumentsPage(true)}
            >
              <span>Документы</span>

              <span className="side-menu__arrow">▶</span>
            </button>

            <Link to="/administration" onClick={handleClose}>
              Руководство
            </Link>

            <Link to="/certificate" onClick={handleClose}>
              Получение водительского удостоверения
            </Link>

            <Link to="/details" onClick={handleClose}>
              Реквизиты
            </Link>

            <Link to="/knowledge" onClick={handleClose}>
              Площадка знаний
            </Link>
          </nav>
        ) : (
          <>
            <button className="side-menu__back" onClick={handleBack}>
              ← Назад
            </button>

            <nav className="side-menu__nav">
              <Link to="/structure" onClick={handleClose}>
                Структура управления
              </Link>

              <Link to="/documents" onClick={handleClose}>
                Документы
              </Link>

              <Link to="/education" onClick={handleClose}>
                Образование
              </Link>

              <Link to="/standards" onClick={handleClose}>
                Образовательные стандарты
              </Link>

              <Link to="/materials" onClick={handleClose}>
                Материально-техническое обеспечение и оснащенность
                образовательного процесса
              </Link>
            </nav>
          </>
        )}
      </div>
    </div>
  );
}

export default SideMenu;
