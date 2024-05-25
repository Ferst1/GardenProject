
import { NavLink } from "react-router-dom";
import s from "./ErrorPage.module.css";
import NotFound from "../../media/images/404.png";

const ErrorPage = () => {
  return (
    <div>
      <section className={s.error_page}>
        <img 
        className={s.error_img}
        src={NotFound} 
        alt="Not Found" />
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

