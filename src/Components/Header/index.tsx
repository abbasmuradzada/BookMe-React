import React, {FC} from 'react';
import './style.scss';
import logo from '../../Assets/Images/bookme.png';
import callImg from '../../Assets/Images/call.png';
import Box from '@material-ui/core';


const Header:FC = () => {
  return (
    <>
        <header className="container d-flex flex-wrap justify-content-between align-items-center">
        <div className="header-left d-flex align-items-center">
            <img src={logo} alt="" />
            <span className="account">Accountant &nbsp;<i className="fas fa-angle-down"></i></span>
        </div>
        <div className="header-right d-flex flex-column align-items-end justify-content-between">
            <div className="header-contact d-flex align-items-center">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-google-plus-g"></i>
                <p className="quotation-text">ABSOLUTELY Free <br />
                    QUOTATION NOW
                </p>
                <div className="partition"></div>
                <p className="call-number d-flex align-items-center">
                    <img src={callImg} alt="" />
                    215 123 4567
                </p>
            </div>
            <nav>
                <ul className="d-flex">
                    <li className="active nav-home"><a>home</a></li>
                    <li className="nav-about"><a>about me</a></li>
                    <li className="nav-services"><a>services</a></li>
                    <li className="nav-whyme"><a>why me</a></li>
                    <li className="nav-features"><a>features</a></li>
                    <li className="nav-home"><a href="./blog.html">blog</a></li>
                    <li className="nav-contact"><a>contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    </>
  );
}

export default Header;
