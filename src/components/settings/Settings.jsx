
import React, { Component } from "react";

import "./Settings.scss";

export default class Settings extends Component {

    showWindInfo = (event) => {
        this.props.enableWind(event.currentTarget.value === "on");
    }

    handleTemparatureUnitChange = (event) => {
        this.props.temperatureUnitDidChange(event.currentTarget.value);
    }

    render() {
        return (
            <div className="settings-container">
                <h1>Title</h1>
                <input className="wid-title" placeholder="Title of Widget" onChange={this.props.titleDidChange} type="text" />

                <div className="temperature">
                    <h4>Temperature</h4>
                    <div className="temp-val">
                        <form>
                            <span className="wid-group">
                                <input type="radio" name="temp" value="C" id="celcious"
                                    onChange={this.handleTemparatureUnitChange}
                                    checked={this.props.isCelcious} />
                                <label htmlFor="celcious">°C</label>
                            </span>
                            <span className="wid-group">
                                <input type="radio" name="temp" value="F" id="fahrenheit"
                                    onChange={this.handleTemparatureUnitChange}
                                    checked={!this.props.isCelcious} />
                                <label htmlFor="fahrenheit">°F</label>
                            </span>
                        </form>
                        
                    </div>
                </div>

                <div className="temperature">
                    <h4>Wind</h4> 
                    <div className="temp-val">
                        <form>
                            <span className="wid-group">
                                <input type="radio" name="wind" value={"on"} id="on"
                                    onChange={this.showWindInfo} 
                                    checked={this.props.isWindEnabled} />
                                <label htmlFor="on">On</label>
                            </span>
                            <span className="wid-group">
                                <input type="radio" name="wind" value={"off"} id="off"
                                    onChange={this.showWindInfo}
                                    checked={!this.props.isWindEnabled} />
                                <label htmlFor="off">Off</label>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

