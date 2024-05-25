import React from "react";
import s from "./Footer.module.css";
import instagram from "../../media/icons/instagram-dark-icon.svg";
import whatsap from "../../media/icons/whatsapp-dark-icon.svg";
const Footer = () => {
  return (
    <div className={`${s.footer} container`}>
      <h1>Contact</h1>
      <div className={s.footer_wrapper}>
        <div className={s.footer_phone}>
          <p>Phone</p>
          <h4>+49 999 999 99 99</h4>
        </div>
        <div className={s.footer_socials}>
          <p>Socials</p>
          <div className={s.social_wrapper}>
            <span>
              <a href="https://www.instagram.com" target="_blank">
                <img src={instagram} alt="instagram icon" />
              </a>
            </span>
            <span>
              <a href="https://www.whatsapp.com" target="_blank">
                <img src={whatsap} alt="instagram icon" />
              </a>
            </span>
          </div>
        </div>
        <div className={s.address}>
          <p>Address</p>
          <h4>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</h4>
        </div>
        <div className={s.working_hours}>
          <p>Working hours</p>
          <h4>24 hours a day</h4>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d2610767.4624827346!2d9.492239489362438!3d50.28114511898316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d48.1144341!2d11.5284937!4m5!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran%2C%20Linkstra%C3%9Fe%202%2F8%20Etage%2C%2010785%20Berlin!3m2!1d52.5079329!2d13.3750447!5e0!3m2!1sru!2sde!4v1716492162690!5m2!1sru!2sde"
          width="1360"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className={s.map}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
