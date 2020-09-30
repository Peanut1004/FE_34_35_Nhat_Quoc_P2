import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCombo } from "../../redux/slice/comboSlice";


const ChooseSeat = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const { combo, loading, error } = useSelector((state) => state.combo);

  useEffect(() => {
    dispatch(getCombo());
  }, [dispatch]);

  console.log(combo, error)
  return(
  	<div>
  		<div class="breadcrumbs">
	      <div class="container">
	        <div class="breadcrumbs__link">
	          <a href="#">Home</a>
	          <a href="#">Seat Reservation</a>
	        </div>
	      </div>
	    </div>
	    <div class="seat__dt">
            <div class="seat__scope">
              <div class="seat__rows">
                <span>I</span>
                <ul class="seat__row">
                  <li>10</li>
                  <li>9</li>
                  <li>8</li>
                  <li>7</li>
                  <li>6</li>
                  <li>5</li>
                  <li>4</li>
                  <li>3</li>
                  <li>2</li>
                  <li>1</li>
                </ul>
                <span>I</span>
              </div>
              <div class="seat__rows">
                <span>I</span>
                <ul class="seat__row">
                  <li>10</li>
                  <li>9</li>
                  <li>8</li>
                  <li>7</li>
                  <li>6</li>
                  <li>5</li>
                  <li>4</li>
                  <li>3</li>
                  <li>2</li>
                  <li>1</li>
                </ul>
                <span>I</span>
              </div>
             
            </div>
          </div>
  	</div>
  );
}

export default ChooseSeat;