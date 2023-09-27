import React from "react";
import './ComponentStyling.css'

const PreLoader = () => {

    return (
        <div className="preloader">
            <h1 className="heading__text">Cooking In Progress</h1>
            <div id="cooking">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>

                <div id="area">
                    <div id="sides">
                        <div id="pan"></div>
                        <div id="handle"></div>
                    </div>
                    <div id="pancake">
                        <div id="pastry"></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PreLoader