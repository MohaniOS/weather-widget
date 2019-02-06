
import React, { Component } from "react";

import Display from "../../components/display/Display"
import Settings from "../../components/settings/Settings"

import "./Widget.scss";

export default class Widget extends Component {

    constructor () {
        super();
        this.state = {
            title: 'Widget Title',
            city:"Melbourne",
            temperature: '32°',
            wind: 'NE 23km/h',
            isCelcious: true,
            isWindEnabled: true
        }

    }

    enableWind = (isEnable) => {
        this.setState({
            isWindEnabled: isEnable
        });
    }

    titleDidChange = (title) => {
        this.setState({ title: title.currentTarget.value});
    }

    temperatureUnitDidChange = (unit) => {
        this.setState({
            temperature: unit === "C" ? "30°" : "86°",
            isCelcious: unit === "C"
        })
    }
    render() {
        return (
            <div className="container">
                <Settings 
                    titleDidChange = {this.titleDidChange}
                    enableWind = {this.enableWind}
                    isCelcious = {this.state.isCelcious}
                    isWindEnabled = {this.state.isWindEnabled}
                    temperatureUnitDidChange = {this.temperatureUnitDidChange}
                />
                <Display display={this.state}/>
            </div>
        )
    };
}
