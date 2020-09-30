import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCinemas } from "../../redux/slice/cinemasSlice";


const ChooseTick = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const { cinemas, loading, error } = useSelector((state) => state.cinemas);

  useEffect(() => {
    dispatch(getCinemas());
  }, [dispatch]);

  console.log(cinemas, error)
  return(
    <div>
    	<div class="breadcrumbs">
        <div class="container">
          <div class="breadcrumbs__link">
            <a href="#">Home</a>
            <a href="#">Movie detail</a>
            <a href="#">Buy ticket</a>
          </div>
        </div>
      </div>
	    <div class="booking-ticket">
            <h3 class="booking-ticket__title">Choose ticket / Food</h3>
            <table class="table buy-ticket__table">
              <thead>
                <tr class="buy-ticket__title">
                  <th>Ticket Type</th>
                  <th>Number</th>
                  <th>Price (VNĐ)</th>
                  <th>Total (VNĐ)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p><b>Adults</b></p>
                    <p>2D tickets</p>
                  </td>
                  <td>
                    <div class="buy-ticket__booking">
                      <button class="btn-addminus"> 
                        <i class="fa fa-minus" aria-hidden="true"></i>
                      </button>
                      <input type="number" />
                      <button class="btn-addminus"> 
                        <i class="fa fa-plus" aria-hidden="true"></i>
                      </button>
                    </div>
                  </td>
                  <td>90,000</td>
                  <td>0</td>
                </tr>
                <tr class="total">
                  <td colspan="3">Total</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
            <table class="table buy-ticket__table">
              <thead>
                <tr class="buy-ticket__title">
                  <th>Combo</th>
                  <th>Number</th>
                  <th>Price (VNĐ)</th>
                  <th>Total (VNĐ)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="buy-ticket__combo">
                      <div class="buy-ticket__feature">
                        <img width="100px" src="images/combo/01.jpg" />
                      </div>
                      <div class="buy-ticket__content">
                        <p><b>iCombo 1 Big</b></p>
                        <p>1 BẮP + 1 NƯỚC NGỌT 32 Oz</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="buy-ticket__booking">
                      <button class="btn-addminus"> 
                        <i class="fa fa-minus" aria-hidden="true"></i>
                      </button>
                      <input type="number" />
                      <button class="btn-addminus"> 
                        <i class="fa fa-plus" aria-hidden="true"></i>
                      </button>
                    </div>
                  </td>
                  <td>72,000</td>
                  <td>0</td>
                </tr>
                <tr class="total">
                  <td colspan="3">Total</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
  );
}

export default ChooseTick;