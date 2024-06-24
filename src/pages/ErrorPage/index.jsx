import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import s from "./ErrorPage.module.css";
import NotFound from "../../media/icons/404.svg";

const ErrorPage = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`${darkMode ? s.dark : ''}`}>
      <section className={s.error_page}>
        <img 
          className={s.error_img}
          src={NotFound} 
          alt="Not Found" 
        />
        <div className={s.error_wrapper}>
          <h1>Page Not Found</h1>
          <p>We’re sorry, the page you requested could not be found.</p>
          <p className="homepage-link">Please go back to the homepage.</p>
          <NavLink to="/main_page" className={s.button_link}>
            <button className={s.button_return}>Go Home</button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;


