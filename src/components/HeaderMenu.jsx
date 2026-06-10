import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";

import { mainMenu, documentsMenu } from "../data/menuData";

function MobileMenu({ isOpen, onClose }) {
  const [page, setPage] = useState("main");

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      setPage("main");
    }
  }, [isOpen]);

  const menuItems = page === "main" ? mainMenu : documentsMenu;

  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
      <div className="mobile-menu__overlay" onClick={onClose}></div>

      <div className="mobile-menu__content">
        <div className="mobile-menu__header">
          <img src={logo} alt="Автопрестиж" />

          <button className="mobile-menu__close" onClick={onClose}>
            ✕
          </button>
        </div>

        {page === "documents" && (
          <button className="mobile-menu__back" onClick={() => setPage("main")}>
            ← Назад
          </button>
        )}

        <nav className="mobile-menu__nav">
          {menuItems.map((item) => {
            if (item.submenu) {
              return (
                <button
                  key={item.title}
                  className="mobile-menu__link mobile-menu__submenu"
                  onClick={() => setPage("documents")}
                >
                  <span>{item.title}</span>
                  <span>▶</span>
                </button>
              );
            }

            return (
              <Link
                key={item.title}
                to={item.path}
                className="mobile-menu__link"
                onClick={onClose}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
