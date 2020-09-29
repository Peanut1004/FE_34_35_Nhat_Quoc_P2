import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "../../redux/slice/movieListSlice";

const MovieListPage = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovieList());
  }, [dispatch]);

  console.log(movies, error)

  return(
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <div className="breadcrumbs__link">
            <a href="#">Home</a>
            <a href="#">List Movie</a>
          </div>
        </div>
      </div>
      <div className="list-movie">
        <div className="container">
          <div className="list-movie__grid">
            <div className="list-movie__feature">
              { loading ? <p>Loading...</p>
                : error ? <p>{error.message}</p>
                : movies.map((e, i) => (
                  <div className="list-movie__box">
                    <div className="list-movie__poster">
                      <img src={e.image} alt="images" />
                    </div>
                    <div className="list-movie__content">
                      <h3 className="list-movie__title">
                        <a href="#">{e.name}</a>
                      </h3>
                      <div className="list-movie__rating">
                        <span className="list-movie__rating--icon">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star-o" aria-hidden="true"></i>
                        </span>
                        <span className="list-movie__rating--votes">(37 Votes)</span>
                      </div>
                      <div className="list-movie__time">
                        <span className="list-movie__time--slot">G</span>
                        <span className="list-movie__time--icon">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>
                        </span>
                        <span className="list-movie__time--text">{e.time} Phút</span>
                      </div>
                      <p className="list-movie__description">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ...
                      </p>
                      <div className="list-movie__info">
                        <label className="release-date">Release Date :</label>
                        <span className="text">{e.releaseDate}</span>
                      </div>
                      <div className="list-movie__info">
                        <label className="release-date">Nation: </label>
                        <span className="text">Brazil, France, Germany, United States</span>
                      </div>
                      <div className="list-movie__info">
                        <label className="release-date">Year: </label>
                        <span className="text">2020</span>
                      </div>
                      <div className="list-movie__info">
                        <label className="release-date">Genre: </label>
                        <span className="text">{e.type}</span>
                      </div>
                      <div className="list-movie__info">
                        <label className="release-date">Actor: </label>
                        <span className="text">{e.actor}</span>
                      </div>
                      <div className="list-movie__info">
                        <label className="release-date">Director: </label>
                        <span className="text">{e.producer}</span>
                      </div>
                      <div className="list-movie__button">
                        <a href="#" className="list-movie__trailer">Trailer</a>
                        <a href="#" className="list-movie__det">Detail</a>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="list-movie__sidebar">
              <div className="widget-mg widget-sidebar__image">
                <a href="#"><img src="assets/images/sidebar/01.jpg" alt="images" /></a>
              </div>
              <div className="widget-mg widget-sidebar__posts">
                <h3 className="widget-sidebar__title">Recent Posts</h3>
                <div className="widget-sidebar__entryItem">
                  <div className="widget-sidebar__thumb">
                    <a href="#"><img src="assets/images/sidebar/01.jpg" alt="images" /></a>
                  </div>
                  <div className="widget-sidebar__content">
                    <h4 className="widget-sidebar__content--title">
                      <a href="#">Doctor Strange assembles with the Avengers</a>
                    </h4>
                    <div className="widget-sidebar__content--meta">
                      <span className="date">April 2, 2019</span>
                      <span className="comment">0 Comment</span>
                    </div>
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

export default MovieListPage;


