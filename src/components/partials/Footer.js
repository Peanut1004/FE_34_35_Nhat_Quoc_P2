import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("common");

	return(
		<footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__grid">
            <div className="widget__col">
              <div className="widget__logo">
                <a href="index.html" title="Logo"><img src="assets/images/logo/02.png" alt="images" /></a>
              </div>
              <p className="widget__description">{t("widget.description")}</p>
              <div className="widget__list-social">
                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
              </div>
            </div>
            {/*widget__col*/}
            <div className="widget__col">
              <h3 className="widget__title">{t("widget.introduce")}</h3>
              <ul className="widget__menu">
                <li className="widget__menu--items">
                  <a href="#" className="widget__menu--link">{t("widget.aboutUs")}</a>
                </li>
                <li className="widget__menu--items">
                  <a href="#" className="widget__menu--link">{t("widget.convenient")}</a>
                </li>
                <li className="widget__menu--items">
                  <a href="#" className="widget__menu--link">{t("widget.regulation")}</a>
                </li>
                <li className="widget__menu--items">
                  <a href="#" className="widget__menu--link">{t("widget.privacyPolicy")}</a>
                </li>
              </ul>
            </div>
            {/*widget__col*/}
            <div className="widget__col">
              <h3 className="widget__title">{t("widget.cinemaCorner")}</h3>
              <ul className="widget__menu">
                <li className="widget__menu--items">
                  <a href="#" className="widget__menu--link">{t("widget.movieGenre")}</a>
                </li>
                <li className="widget__menu--items">
                  <a href="#" className="widget__menu--link">{t("widget.movieCommentary")}</a>
                </li>
                <li className="widget__menu--items">
                  <a href="#" className="widget__menu--link">{t("widget.blogMovies")}</a>
                </li>
                <li className="widget__menu--items">
                  <a href="#" className="widget__menu--link">{t("widget.movieMonth")}</a>
                </li>
              </ul>
            </div>
            {/*widget__col*/}
            <div className="widget__col">
              <h3 className="widget__title">{t("widget.support")}</h3>
              <ul className="widget__contacts">
                <li className="widget__contacts--list">
                  <a href="#" className="widget__contacts--address">{t("widget.address")}</a>
                </li>
                <li className="widget__contacts--list">
                  <a href="#" className="widget__contacts--email">{t("widget.gmail")}</a>
                </li>
                <li className="widget__contacts--list">
                  <a href="#" className="widget__contacts--phone">{t("widget.phone")}</a>
                </li>
              </ul>
            </div>
            {/*widget__col*/}
          </div>
        </div>
      </div>
      <div className="bottom text-center">
        <h4 className="bottom__name">CINEMA</h4>
      </div>
    </footer>
	);
}

export default Footer;