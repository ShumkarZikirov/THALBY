
import React from 'react'
import './main-info2.css'
import img2 from '../../img/main-info2.png'
const MainInfo2 = () => {
    return(
        <div className='blocks2'>
            <div className='container block2'>
                <div className="main-info2">
                    <img  src={img2} alt=""/>
                </div>
                <div className="main-info-ttl">
                    <h2 className="info-ttl-h4">People and Society</h2>
                    <p className="info-ttl-p2">Our guides to society deliver all the social insight you need, helping you understand how people live, love and play today and why communities are the way they are.</p>
                    <a className='info-ttl-a2' href="">Shop Society Guides</a>
                </div>
            </div>
        </div>
    )
}
export default MainInfo2