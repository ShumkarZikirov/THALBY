import React from "react";
import './header.css';

const HeaderNav = () => {
    return(
        <div className='container'>
            <div className='header-nav'>
                <div className="left-nav">
                    <ul className='left-nav-ul'>
                        <li><a className='left-nav-a' href="#">Shop</a></li>
                        <li><a className='left-nav-a' href="#">Collections</a></li>
                        <li><a className='left-nav-a' href="#">Try a Free Guide</a></li>
                        <li><a className='left-nav-a' href="#">Stories</a></li>
                    </ul>
                </div>
                <div className="logo"><a className='logo-a' href="#">thalby</a></div>
                <div className="right-nav">
                    <ul className='right-nav-ul'>
                        <li><a className='right-a' href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a className='right-a' href="#"><i className="fa-solid fa-magnifying-glass"></i>
                        </a></li>
                        <li><a className='right-a' href="#"><i className="fa-solid fa-basket-shopping"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderNav;