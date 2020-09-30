import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCombo } from "../../redux/slice/comboSlice";


const ChooseTick = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const { combo, loading, error } = useSelector((state) => state.combo);

  useEffect(() => {
    dispatch(getCombo());
  }, [dispatch]);

  console.log(combo, error)
  return(
    <div>
    	<div className="breadcrumbs">
        <div className="container">
          <div className="breadcrumbs__link">
            <a href="#">{t("breadcrumbs.home")}</a>
            <a href="#">{t("breadcrumbs.listDetails")}</a>
            <a href="#">{t("breadcrumbs.buyTicket")}</a>
          </div>
        </div>
      </div>
	    <div className="buy-ticket">
        <div className="container">
          <div className="buy-ticket__grid">
            <div className="frame-choose">
              <div className="frame-choose__inner">
                <h3 className="frame-choose__title">{t("titleBooking.chooseTiketFood")}</h3>
                <table className="table buy-ticket__table">
                  <thead>
                    <tr className="buy-ticket__title">
                      <th>{t("chooseTiket.ticketType")}</th>
                      <th>{t("chooseTiket.number")}</th>
                      <th>{t("chooseTiket.price")}</th>
                      <th>{t("chooseTiket.totalItem")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p><b>{t("chooseTiket.adults")}</b></p>
                        <p>{t("chooseTiket.ticket2D")}</p>
                      </td>
                      <td>
                        <div className="buy-ticket__booking">
                          <button className="btn-addminus"> 
                            <i className="fa fa-minus" aria-hidden="true"></i>
                          </button>
                          <input type="number" />
                          <button className="btn-addminus"> 
                            <i className="fa fa-plus" aria-hidden="true"></i>
                          </button>
                        </div>
                      </td>
                      <td>45,000</td>
                      <td>0</td>
                    </tr>
                    <tr className="total">
                      <td colSpan="3">{t("chooseTiket.totalAllItems")}</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
                <table className="table buy-ticket__table">
                  <thead>
                    <tr className="buy-ticket__title">
                      <th>{t("chooseTiket.combo")}</th>
                      <th>{t("chooseTiket.number")}</th>
                      <th>{t("chooseTiket.price")}</th>
                      <th>{t("chooseTiket.totalItem")}</th>
                    </tr>
                  </thead>
                  <tbody>
                  { loading ? <p>Loading...</p>
                    : error ? <p>{error.message}</p>
                    : combo.map((e, i) => (
                      <tr>
                        <td>
                          <div className="buy-ticket__combo">
                            <div className="buy-ticket__feature">
                              <img src={e.image} alt="images" />
                            </div>
                            <div className="buy-ticket__content">
                              <p><b>iCombo 1 Big</b></p>
                              <p>1 BẮP + 1 NƯỚC NGỌT 32 Oz</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="buy-ticket__booking">
                            <button className="btn-addminus"> 
                              <i className="fa fa-minus" aria-hidden="true"></i>
                            </button>
                            <input type="number" />
                            <button className="btn-addminus"> 
                              <i className="fa fa-plus" aria-hidden="true"></i>
                            </button>
                          </div>
                        </td>
                        <td>72,000</td>
                        <td>0</td>
                      </tr>
                      ))
                    }
                    <tr className="total">
                      <td colSpan="3"><th>{t("chooseTiket.totalAllItems")}</th></td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="buy-ticket__sidebar">
            <div className="ticket-movie__wrap">
              <div className="ticket-movie__feature">
                <Link to="/choose-seat">
                  <img src="assets/images/poster_movie/01.jpg" alt="images" />
                </Link>
              </div>
              <div className="ticket-movie__detail">
                <h3 className="ticket-movie__movie-name">CINEMA NAME</h3>
                <ul className="ticket-movie__info">
                  <li className="ticket-movie__theater">
                    <span className="ticket-movie__title">{t("buyTicket.cinema")}</span>
                    <span></span>
                  </li>
                  <li className="ticket-movie__showshow">
                    <span className="ticket-movie__title">{t("buyTicket.screening")}</span>
                    <span></span>
                  </li>
                  <li className="ticket-movie__date">
                    <span className="ticket-movie__title">{t("buyTicket.date")}</span>
                    <span></span>
                  </li>
                  <li className="ticket-movie__combo">
                    <span className="ticket-movie__title">{t("buyTicket.combo")}</span>
                    <span></span>
                  </li>
                  <li className="ticket-movie__seat">
                    <span className="ticket-movie__title">{t("buyTicket.seat")}</span>
                    <span></span>
                  </li>
                  <li className="ticket-movie__total">
                    <span className="ticket-movie__title">{t("buyTicket.total")}</span>
                    <span></span>
                  </li>
                </ul>
                <div className="ticket-movie__button">
                  <button>{t("buyTicket.continue")}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ChooseTick;