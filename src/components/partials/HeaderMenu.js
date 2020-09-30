import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  const { t } = useTranslation("common");

	return(
		<header className="header">
      <div className="container">
        <div className="header__flex">
          <div className="header__logo">
            <Link to="/" title="Logo">
              <img src="assets/images/logo/01.png" alt="images" />
            </Link>
          </div>
          <div className="menu__content">
            <div className="menu__nav">
              <nav>
                <ul className="menu">
                  <li className="menu__list">
                    <Link to="/" className="menu__list--link" href="#">{t("menu.home")}</Link> 
                  </li>
                  <li className="menu__list">
                    <Link to="/movie-list" className="menu__list--link" href="#">{t("menu.movie")}</Link>
                  </li>
                  <li className="menu__list">
                    <a className="menu__list--link" href="#">{t("menu.cinema")}</a>
                  </li>
                  <li className="menu__list">
                    <a className="menu__list--link" href="#">{t("menu.member")}</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
	);
}

export default HeaderMenu;