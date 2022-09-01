import React from 'react';
import "./Home.scss";
import Slider from "./Slider";
import Realeases from "./Realeases";


const Home = () => {
    return (
        <div className="Home">
            <div className="container">
                <div className="Home__section">
                    <h2 className="Home__title">Explore</h2>
                    <h2 className="Home__subTitle">What are you gonna watch today ?</h2>
                    <div className="Home__slider">
                        <Slider/>
                    </div>
                    <Realeases/>
                </div>
            </div>
        </div>
    );
};

export default Home;