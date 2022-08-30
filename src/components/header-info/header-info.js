import React from "react";
import './header-info.css';
import Images from "../../img/image1.png";
const HeaderInfo = () => {
    return(
        <div className='header-info'>
            <div className="container">
                <div className="header-info-left">
                    <div className="info-left-ttl">
                        <h1 className='ttl-h1'>Fall deeper in love with</h1>
                        <h1 className='ttl-h1'>humanity.</h1>
                    </div>
                    <div className="info-left-p">
                        <p className='left-p-p'>Get to know the world through our concise, informative and inspiring guides.</p>
                    </div>
                    <div className="info-left-btn">
                        <button className='left-btn-btn'>Shop Now</button>
                    </div>
                </div>
                <div className="header-info-right">
                    <img className='info-right-img' src={Images} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default HeaderInfo;