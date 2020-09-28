import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../redux/slice/blogSlice";

const Blog = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const { blogs, loading, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getBlog());
  }, [dispatch]);

  console.log(blogs, error)

  return(
    <div className="blog">
      <div className="container">
        <div className="title-section">
          <span className="seperator"></span>
            <h2 className="flat-title"> 
              <span className="flat-title__default">{t("titleSection.blog")} </span> 
              <span className="flat-title__color">{t("titleSection.movie")}</span>
            </h2> 
          <span className="seperator"></span>
        </div>
        <div className="blog__grid">
          { loading ? <p>Loading...</p>
            : error ? <p>{error.message}</p>
            : blogs.map((e, i) => (
                <div className="blog__box" key={i}>
                  <div className="blog__poster">
                    <img src={e.image} alt="images" />
                  </div>
                  <div className="blog__content">
                    <h3 className="blog__title">
                      <a href="#">{e.name}</a>
                    </h3>
                    <p className="blog__description">{e.content}</p>
                  </div>
                </div>
              ))
          }
        </div>
      </div>
    </div>  
  );
}

export default Blog;
