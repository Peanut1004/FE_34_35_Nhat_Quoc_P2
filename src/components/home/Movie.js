import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../redux/slice/movieSlice";

const Movie = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  console.log(movies, error)

  const MOVIES = [

  ]

  return(
    <div className="newest-movie">
      <div className="container">
        <div className="title-section">
          <span className="seperator"></span>
            <h2 className="flat-title">
              <span className="flat-title__default">{t("titleSection.newest")} </span>
              <span className="flat-title__color">{t("titleSection.movie")}</span>
            </h2> 
          <span className="seperator"></span>
        </div>
        <div className="newest-movie__gird">
          { loading ? <p>Loading...</p>
            : error ? <p>{error.message}</p>
            : movies.map((e, i) => (
                <div className="movie__box" key={i}>
                  <div className="movie__poster">
                    <a href="#">
                      <img src={e.image} alt="images" />
                    </a>
                    <div className="movie__overlay">
                      <div className="movie__buy">
                        <a href="#" className="movie__buy--ticket">BUY TICKET</a>
                      </div>
                    </div>
                  </div>
                  <div className="movie__content">
                    <h3 className="movie__title">
                      <a href="#">{e.name}</a>
                    </h3>
                    <p className="movie__date">{e.releaseDate}</p>
                  </div>
                </div>
              ))
          } 
        </div>
      </div>
    </div>
  );
}

export default Movie;


















// import React from "react";

// const NewestMovie = () => {
//   return(
//     <div className="newest-movie">
//       <div className="container">
//         <div className="title-section">
//           <span className="seperator"></span>
//             <h2 className="flat-title">Newest <span className="flat-title__color">Movie</span></h2> 
//           <span className="seperator"></span>
//         </div>
//         <div className="newest-movie__gird">
//           <div className="movie__box">
//             <div className="movie__poster">
//               <a href="#">
//                 <img src="assets/images/poster_movie/01.jpg" alt="images" />
//               </a>
//               <div className="movie__overlay">
//                 <div className="movie__buy">
//                   <a href="#" className="movie__buy--ticket">BUY TICKET</a>
//                 </div>
//               </div>
//             </div>
//             <div className="movie__content">
//               <h3 className="movie__title">
//                 <a href="#">The Hurricane Heist</a>
//               </h3>
//               <p className="movie__date">May 6, 2017</p>
//             </div>
//           </div>
//           <div className="movie__box">
//             <div className="movie__poster">
//               <a href="#">
//                 <img src="assets/images/poster_movie/01.jpg" alt="images" />
//               </a>
//               <div className="movie__overlay">
//                 <div className="movie__buy">
//                   <a href="#" className="movie__buy--ticket">BUY TICKET</a>
//                 </div>
//               </div>
//             </div>
//             <div className="movie__content">
//               <h3 className="movie__title">
//                 <a href="#">The Hurricane Heist</a>
//               </h3>
//               <p className="movie__date">May 6, 2017</p>
//             </div>
//           </div>
//           <div className="movie__box">
//             <div className="movie__poster">
//               <a href="#">
//                 <img src="assets/images/poster_movie/01.jpg" alt="images" />
//               </a>
//               <div className="movie__overlay">
//                 <div className="movie__buy">
//                   <a href="#" className="movie__buy--ticket">BUY TICKET</a>
//                 </div>
//               </div>
//             </div>
//             <div className="movie__content">
//               <h3 className="movie__title">
//                 <a href="#">The Hurricane Heist</a>
//               </h3>
//               <p className="movie__date">May 6, 2017</p>
//             </div>
//           </div>
//           <div className="movie__box">
//             <div className="movie__poster">
//               <a href="#">
//                 <img src="assets/images/poster_movie/01.jpg" alt="images" />
//               </a>
//               <div className="movie__overlay">
//                 <div className="movie__buy">
//                   <a href="#" className="movie__buy--ticket">BUY TICKET</a>
//                 </div>
//               </div>
//             </div>
//             <div className="movie__content">
//               <h3 className="movie__title">
//                 <a href="#">The Hurricane Heist</a>
//               </h3>
//               <p className="movie__date">May 6, 2017</p>
//             </div>
//           </div>
//           <div className="movie__box">
//             <div className="movie__poster">
//               <a href="#">
//                 <img src="assets/images/poster_movie/01.jpg" alt="images" />
//               </a>
//               <div className="movie__overlay">
//                 <div className="movie__buy">
//                   <a href="#" className="movie__buy--ticket">BUY TICKET</a>
//                 </div>
//               </div>
//             </div>
//             <div className="movie__content">
//               <h3 className="movie__title">
//                 <a href="#">The Hurricane Heist</a>
//               </h3>
//               <p className="movie__date">May 6, 2017</p>
//             </div>
//           </div>
//           <div className="movie__box">
//             <div className="movie__poster">
//               <a href="#">
//                 <img src="assets/images/poster_movie/01.jpg" alt="images" />
//               </a>
//               <div className="movie__overlay">
//                 <div className="movie__buy">
//                   <a href="#" className="movie__buy--ticket">BUY TICKET</a>
//                 </div>
//               </div>
//             </div>
//             <div className="movie__content">
//               <h3 className="movie__title">
//                 <a href="#">The Hurricane Heist</a>
//               </h3>
//               <p className="movie__date">May 6, 2017</p>
//             </div>
//           </div>
//           <div className="movie__box">
//             <div className="movie__poster">
//               <a href="#">
//                 <img src="assets/images/poster_movie/01.jpg" alt="images" />
//               </a>
//               <div className="movie__overlay">
//                 <div className="movie__buy">
//                   <a href="#" className="movie__buy--ticket">BUY TICKET</a>
//                 </div>
//               </div>
//             </div>
//             <div className="movie__content">
//               <h3 className="movie__title">
//                 <a href="#">The Hurricane Heist</a>
//               </h3>
//               <p className="movie__date">May 6, 2017</p>
//             </div>
//           </div>
//           <div className="movie__box">
//             <div className="movie__poster">
//               <a href="#">
//                 <img src="assets/images/poster_movie/01.jpg" alt="images" />
//               </a>
//               <div className="movie__overlay">
//                 <div className="movie__buy">
//                   <a href="#" className="movie__buy--ticket">BUY TICKET</a>
//                 </div>
//               </div>
//             </div>
//             <div className="movie__content">
//               <h3 className="movie__title">
//                 <a href="#">The Hurricane Heist</a>
//               </h3>
//               <p className="movie__date">May 6, 2017</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NewestMovie;