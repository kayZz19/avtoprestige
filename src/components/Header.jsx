import { useState, useEffect } from "react";

import SideMenu from "./SideMenu";

import menuIcon from "../images/image1.png";
import logo from "../images/logo.png";
import phoneIcon from "../images/free-icon-phone-call-5585562.png";
import locationIcon from "../images/free-icon-location-3699580.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactsOpen, setContactsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="header">
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Открыть меню"
        >
          <img src={menuIcon} alt="Меню" className="menu-icon" />
        </button>

        <div className="logo">
          <img src={logo} alt="Автошкола Автопрестиж" />
        </div>

        {/* ПК версия */}
        <div className="desktop-contacts">
          <div className="desktop-contact-card">
            <img src={phoneIcon} alt="" className="contact-icon" />

            <div className="desktop-contact-text">
              <a href="tel:89087550024">8-908-755-00-24</a>
              <a href="tel:88317022954">8-831-702-29-54</a>
            </div>
          </div>

          <div className="desktop-contact-card">
            <img src={locationIcon} alt="" className="contact-icon" />

            <div className="desktop-contact-text">
              <span>г. Богородск</span>
              <span>ул. Ленина, д. 218А</span>
            </div>
          </div>
        </div>

        {/* Мобильная версия */}
        <div className="mobile-actions">
          <button
            className="mobile-icon-btn"
            onClick={() => setContactsOpen(!contactsOpen)}
          >
            <img src={phoneIcon} alt="Контакты" />
          </button>

          <button
            className="mobile-icon-btn"
            onClick={() => setContactsOpen(!contactsOpen)}
          >
            <img src={locationIcon} alt="Адрес" />
          </button>
        </div>
      </header>

      <div className={`mobile-contacts ${contactsOpen ? "active" : ""}`}>
        <div className="mobile-contact-row">
          <img src={phoneIcon} alt="" />

          <div>
            <a href="tel:89087550024">8-908-755-00-24</a>

            <a href="tel:88317022954">8-831-702-29-54</a>
          </div>
        </div>

        <div className="mobile-contact-row">
          <img src={locationIcon} alt="" />

          <span>
            г. Богородск
            <br />
            ул. Ленина, д. 218А
          </span>
        </div>
      </div>

      <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export default Header;
