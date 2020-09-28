import React from "react";
import { useTranslation } from "react-i18next";

const HeaderMenu = () => {
  const { t } = useTranslation("common");

	return(
		<header className="header">
      <div className="container">
        <div className="header__flex">
          <div className="header__logo">
            <a href="index.html" title="Logo"><img src="assets/images/logo/01.png" alt="images" /></a>
          </div>
          <div className="menu__content">
            <div className="menu__nav">
              <nav>
                <ul className="menu">
                  <li className="menu__list">
                  <a className="active menu__list--link" href="#">{t("menu.home")}</a>
                    <ul className="menu__sub">
                      <li className="menu__sub--list">
                        <a className="active menu__sub--link" href="#">{t("menu.home")} 1</a>
                      </li>
                      <li className="menu__sub--list">
                        <a className="menu__sub--link" href="#">{t("menu.home")} 2</a>
                        </li>
                      <li className="menu__sub--list">
                        <a className="menu__sub--link" href="#">{t("menu.home")} 3</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu__list">
                    <a className="menu__list--link" href="#">{t("menu.buyTicket")}</a>
                  </li>
                  <li className="menu__list">
                    <a className="menu__list--link" href="#">{t("menu.movie")}</a>
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