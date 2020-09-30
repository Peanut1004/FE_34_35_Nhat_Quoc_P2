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
  		<div className="breadcrumbs">
	      <div className="container">
	        <div className="breadcrumbs__link">
	          <a href="#">Home</a>
	          <a href="#">Seat Reservation</a>
	        </div>
	      </div>
	    </div>
	    <div className="seat-revervation">
	    	<div className="container">
			    <div className="seat__grid">
			    	
			        <div className="seat__scope">
			          <div className="seat__rows">
			            <span>I</span>
			            <ul>
			              <li>5</li>
			              <li>4</li>
			              <li>3</li>
			              <li>2</li>
			              <li>1</li>
			            </ul>
			            <span>I</span>
			          </div>
			          <div className="seat__rows">
			            <span>I</span>
			            <ul>
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
	    </div>
  	</div>
  );
}

export default ChooseSeat;