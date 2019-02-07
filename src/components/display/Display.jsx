
import React, { Component } from "react";

import "./Display.scss";
import WeatherImg from "../../images/weather.png"

export default class Display extends Component {

    render() {
        const { title, city, temperature, isWindEnabled, wind } = this.props.display;

        return (
            <div className="display-container">
                <h1>{title || "TITLE OF WIDGET"}</h1>
                <div className="imgContainer">
                    <img src={WeatherImg} alt="weather-img" height="100" width="100"/>
                </div>
                <div className="infoContainer">
                    <div className="city">{ city || "Sydney" }</div>
                    <div className="temp">{ temperature + '°' || "26°" }</div>
                    { isWindEnabled ? <div>
                        <div className="windLabel">Wind</div>
                        <div className="windText">{ wind || "NE 24km/h" }</div>
                    </div> : ''
                    }
                </div>
            </div>
        )
    }
}

