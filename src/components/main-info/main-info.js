import React from "react";
import './main-info.css';
import img from '../../img/main-info-1.png'
const MainInfo = () => {
    return(
        <div className='blocks'>
            <div className='container block'>
                <div className="main-info">
                    <img  src={img} alt=""/>
                </div>
                <div className="main-info-ttl">
                    <h2 className="info-ttl-h2">People and Society</h2>
                    <p className="info-ttl-p">Our guides to society deliver all the social insight you need, helping you understand how people live, love and play today and why communities are the way they are.</p>
                    <a className='info-ttl-a' href="">Shop Society Guides</a>
                </div>
            </div>
        </div>
    )
}

export default MainInfo;