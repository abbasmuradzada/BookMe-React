import React, {FC} from 'react';
import logo from '../../Assets/Images/bookme.png';
import './style.scss';

const Footer:FC = () => {
  return (
    <div>
      <footer>
        <div className="container d-flex flex-wrap justify-content-between">
            <div className="footer-details">
                <img src={logo} alt="" />
                <p className="copyright">Copyright 2015. <br />
                    All Rights Reserved.</p>
            </div>
            <div className="footer-column">
                <a href="">home</a>
                <a href="">about me</a>
                <a href="">services</a>
                <a href="">contact us</a>
            </div>
            <div className="footer-column">
                <a href="">why me</a>
                <a href="">features</a>
                <a href="">contact us</a>
            </div>
            <div className="footer-column">
                <a href="">accounting</a>
                <a href="">tax consulting</a>
                <a href="">salary management</a>
                <a href="">legal advice</a>
            </div>
            <div className="footer-address d-flex">
                <div style={{backgroundColor: "gray"}} className="add-bg">
                    <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details d-flex flex-column justify-content-between">
                    <span className="contact-details_name">JOHNATHAN DOE</span>
                    <span className="contact-details_address">Address will be appear here, some text <br />
                        will here, City, State, Country</span>
                    <span className="contact-details_number">Call Me : <b>+215 123 4567</b></span>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default Footer;
