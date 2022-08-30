import React from "react";
import './main-people.css'
import chel1 from '../../img/chel1.png';
import chel2 from '../../img/chel2.png';
import chel3 from '../../img/chel3.png';

const MainPeople = () => {
    return(
        <div className='main-chels'>
            <div className='container chelchel'>
                <div className="position">
                    <div className="people1">
                        <img src={chel1} alt=""/>
                        <p className="people-p">"I don’t like things to be conventional. If it’s too nice, I bring disorder."</p>
                        <p className="people-p2">Camille Muller, <br/> Landscape Designer, France</p>
                        <a href="" className="people-a">Discover</a>
                    </div>
                    <div className="people2">
                        <img src={chel2} alt=""/>
                        <p className="people-p">"Magic is not magic in the sense that I can just wish for anything."</p>
                        <p className="people-p2">Sonia Kowalewski, <br/> Witch, Germany</p>
                        <a href="" className="people-a">Discover</a>
                    </div>
                    <div className="people3">
                        <img src={chel3} alt=""/>
                        <p className="people-p">"I was eight years old when I entered my first competition. I won it."</p>
                        <p className="people-p2">Lilly Stoephasius, <br/> Skateboarder, Germany</p>
                        <a href="" className="people-a">Discover</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainPeople;