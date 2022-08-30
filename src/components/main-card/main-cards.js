import React from "react";
import './main-card.css';
import card1 from '../../img/card1.png';
import card2 from '../../img/card2.png';
import card3 from '../../img/card3.png';
const MainCards = () => {
    return(
        <div className='main-cards'>
            <div className='container'>
                <div className="cards-top">
                    <h1 className="cards-top-h1">Our guides explain countries and cultures.</h1>
                    <p className='cards-top-p'>Are you curious about the world around you? Our guides are for smart global citizens, world travelers and engaged residents who want to gain a deeper understanding of the cultures and societies they care about.</p>
                    <p className='cards-top-pt'>Available as ebooks here and on Amazon.</p>
                    <h1 className="cards-top-h1 ss">Our best sellers</h1>
                </div>
                <div className="cards-main">
                    <div className="card card-1">
                        <img src={card1} alt=""/>
                        <div className="card-info">
                            <h5 className='card-info-ttl'>Thalby Guide to French Culture and Heritage</h5>
                            <p className='card-price'>USD 6.99</p>
                            <a className='card-a' href="#">Add to cart</a>
                        </div>
                    </div>
                    <div className="card card-2">
                        <img src={card2} alt=""/>
                        <div className="card-info">
                            <h5 className='card-info-ttl'>Thalby Guide to French Culture and Heritage</h5>
                            <p className='card-price'>USD 6.99</p>
                            <a className='card-a' href="#">Add to cart</a>
                        </div>
                    </div>
                    <div className="card card-3">
                        <img src={card3} alt=""/>
                        <div className="card-info">
                            <h5 className='card-info-ttl'>Thalby Guide to French Culture and Heritage</h5>
                            <p className='card-price'>USD 6.99</p>
                            <a className='card-a' href="#">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCards;