import React, { useContext } from 'react';
import { MyContext } from '../Context';

const Footer = () => {

  const { state, dispatch } = useContext(MyContext);
  const { theme, data } = state;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`${theme}`}>
      <div className="back-to-top-bar" onClick={scrollToTop}>
          VOLVER A INICIO
        </div>
      <div className={`footer-content ${theme}`}>
        <img src="/images/DH.png" alt='DH-logo' className="dh-logo" />
        <div className="social-media-icons">
          <img src="/images/ico-facebook.png"  alt="Facebook Icon" />
          <img src="/images/ico-instagram.png" alt="Instagram Icon" />
          <img src="/images/ico-tiktok.png" alt="TikTok Icon" />
          <img src="/images/ico-whatsapp.png" alt="WhatsApp Icon" />
        </div>
      </div>
    </footer>
  )
}

export default Footer;
