import React from "react";

function Banner(props) {
    return (
        <div>
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper container">
                        {/* click response will show here */}
                        <div className="left">{props.bannerText}</div>
                        <div className="right">Your Score: {props.curScore} | Top Score: {props.topScore}</div>
                    </div>
                </nav>
            </div>

            <div className="row">
                <div className="card-panel teal center-align">
                    <span className="white-text">
                    <h1>Poke-Memory!</h1>
                    Click on a Pokemon to earn points, but don't click on any more than once!
                    </span>
                </div>
            </div>
        </div>    
    );
}

export default Banner;