
import React, { Component } from "react";

import Display from "../../components/display/Display";
import Settings from "../../components/settings/Settings";
import axios from "axios";
import "./Widget.scss";

export default class Widget extends Component {

    constructor () {
        super();
        this.state = {
            title: 'Widget Title',
            city:"Sydney",
            temperature: '32',
            tempRaw: '1',
            wind: 'NE 23km/h',
            isCelcious: true,
            isWindEnabled: true,
        }

    }

    

    componentDidMount() {
        let currentComponent = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const {latitude, longitude} = position.coords;
                const apiToken = 'c41118b90f7d2cba23b73b4bac9f5ac2';
                const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?';
                axios.get(`${apiUrl}APPID=${apiToken}lat=${latitude}&lon=${longitude}`)
                    .then(response => {
                        console.log(response);
                        currentComponent.setNewWeather(response);
                    })
                    .catch(error => {
                        const apiResponse = {
                            coord: {lon: 139,lat: 35},
                            sys: {country: 'JP',sunrise: 1369769524,sunset: 1369821049},
                            weather: [{id: 804, main: 'clouds', description: 'overcast clouds',icon: '04n'}],
                            main: {temp: 289.5, humidity: 89, pressure: 1013, temp_min: 287.04, temp_max: 292.04},
                            wind: {speed: 7.31,deg: 187.002},
                            rain: {'3h': 0},
                            clouds: {all: 92},
                            dt: 1369824698,
                            id: 1851632,
                            cod: 200
                        }
                        currentComponent.setNewWeather(apiResponse);
                    })
            });
        }
        
    } 

    setNewWeather = (data) => {
        this.setState({
            tempRaw: data.main.temp,
            temperature: Math.ceil(this.state.isCelcious ? (data.main.temp - 32) * 5/9 : data.main.temp),
            wind: `NE ${Math.ceil(data.wind.speed)}km/h`,
        });
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
        const temp = this.state.tempRaw;
        this.setState({
            temperature: Math.ceil(unit === "C" ? (temp - 32) * 5/9 : temp),
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
