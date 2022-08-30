import React from "react";
import './main-colors.css';

const MainColors = () => {
    return(
        <div className='container-sm'>
            <div className="colors-ttl">
                <h2 className="h2">Some of the features that</h2>
                <h2 className="h2">make Thalby guides unique</h2>
            </div>
            <div className="colors-main">
                <div className="colors-div">
                    <span className='color col-1'></span>
                    <div className="color-div-p">
                        <p className='color-p'>Written by</p>
                        <p className='color-p'>locals</p>
                    </div>

                </div>
                <div className="colors-div">
                    <span className='color col-2'></span>
                    <div className="color-div-p">
                        <p className='color-p'>Packed with</p>
                        <p className='color-p'>insight</p>
                    </div>

                </div>
                <div className="colors-div">
                    <span className='color col-3'></span>
                    <div className="color-div-p">
                        <p className='color-p'>Interviews with</p>
                        <p className='color-p'>diverse voices</p>
                    </div>
                </div>
                <div className="colors-div">
                    <span className='color col-4'></span>
                    <div className="color-div-p">
                        <p className='color-p'>Key facts and</p>
                        <p className='color-p'>etiquette tips</p>
                    </div>
                </div>
                <div className="colors-div">
                    <span className='color col-5'></span>
                    <div className="color-div-p">
                        <p className='color-p'>A concise</p>
                        <p className='color-p'>1-hour read</p>
                    </div>

                </div>
                <div className="colors-div">
                    <span className='color col-6'></span>
                    <div className="color-div-p">
                        <p className='color-p'>Instant</p>
                        <p className='color-p'>digital access</p>
                    </div>

                </div>
            </div>
            <div className="colors-ttl-bot">
                <h3 className="h3">Each Thalby guide includes interviews with</h3>
                <h3 className="h3">a range of fascinating voices, such as</h3>
            </div>
        </div>
    )
}

export default MainColors;