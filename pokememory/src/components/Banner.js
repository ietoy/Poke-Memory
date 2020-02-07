import React from "react";

function Banner() {
    return (
        <div>
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                        {/* click response will show here */}
                        <div className="left">Click a Pokemon to Start!</div>
                        <div className="right">Scores here!</div>
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