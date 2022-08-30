import React from "react";
import './main-info3.css';
import img3 from '../../img/main-info3.png'
const MainInfo3 = () => {
    return(
        <div className='blocks3'>
            <div className='container block'>
                <div className="main-info">
                    <img  src={img3} alt=""/>
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
export default MainInfo3;