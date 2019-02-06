
import React, { Component } from "react";

import "./Display.scss";
import WeatherImg from "../../images/weather.png"

export default class Display extends Component {

    render() {
        return (
            <div class="display-container">
                <h1>TITLE OF WIDGET</h1>
                <div className="imgContainer">
                    <img src={WeatherImg} alt="weather-img" height="100" width="100"/>
                </div>
                <div className="infoContainer">
                    <div className="city">Sydney</div>
                    <div className="temp">26°</div>
                    <div>
                        <div className="windLabel">Wind</div>
                        <div className="windText">NE 24km/h</div>
                    </div>
                </div>
            </div>
        )
    }
}

