import React from "react";
import './footer.css'

const Footer = () => {
    return(
        <div className='footer'>
            <div className="container footer-flex">
                <div className="footer-left">
                    <h1 className="footer-h1">thalby</h1>
                    <div className="link">
                        <a href="" className="meta"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="" className="meta"><i className="fa-brands fa-instagram"></i></a>
                        <a href="" className="meta"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
                <div className="footer-center">
                    <h6 className="footer-h6">ABOUT</h6>
                    <ul>
                        <li><a href="" className="footer-center-a">About Us</a></li>
                        <li><a href="" className="footer-center-a">Privacy Policy</a></li>
                        <li><a href="" className="footer-center-a">Terms and Conditions</a></li>
                        <li><a href="" className="footer-center-a">Write for Us</a></li>
                    </ul>
                </div>
                <div className="footer-right">
                    <h6 className="footer-h6">CONTACT</h6>
                    <ul>
                        <li><a href="" className="footer-center-a">Email hi@thalby.com</a></li>
                        <li><a href="" className="footer-center-a">Help</a></li>
                    </ul>
                </div>
            </div>
            <h6 className="footer-fot-h6">Thalby LLC © 2021</h6>
        </div>
    )
}

export default Footer