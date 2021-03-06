
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

                const apiToken = 'c41118b90f7d2cba23b73b4bac9f5ac2'; //Apikey is created and its not activated yet. it will work once activated. 
                const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?';
                
                axios.get(`${apiUrl}APPID=${apiToken}&lat=${latitude}&lon=${longitude}`)
                    .then(response => {
                        currentComponent.setNewWeather(response.data);
                    })
                    .catch(error => {
                        const apiResponse = {
                            coord: {lon: 139,lat: 35},
                            sys: {country: 'JP',sunrise: 1369769524,sunset: 1369821049},
                            weather: [{id: 804, main: 'clouds', description: 'overcast clouds',icon: '04n'}],
                            main: {temp: 89.5, humidity: 89, pressure: 1013, temp_min: 287.04, temp_max: 292.04},
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

    /**
     * This function is used to update the weather from API response.
     * @param(data) - This will be the json of API response data
     */
    setNewWeather = (data) => {
        if (!data) return;
        this.setState({
            //need to set the city name with the lat and lang attribute.
            //Direction should be calculated by the degrees available in this API response. as of now hardcoded as 'NE'
            city: data.name,
            tempRaw: data.main.temp / 10,
            temperature: Math.ceil(this.state.isCelcious ? data.main.temp / 10 : ((data.main.temp / 10) - 32) * 5/9),
            wind: `NE ${Math.ceil(data.wind.speed)}km/h`,
        });
    }

    /**
     * This function is called when the wind on - off radio button changed.
     * @param(isEnable) - boolean value, and its default value is true.
     */
    enableWind = (isEnable = true) => {
        this.setState({
            isWindEnabled: isEnable
        });
    }

    /**
     * This function is called when title is changed.
     * @param(title) - string.
     */
    titleDidChange = (title) => {
        this.setState({ title: title.currentTarget.value});
    }

    /**
     * This function is called when the Temperature metric radio button changed.
     * @param(unit) - String value, either "C" or "F".
     */
    temperatureUnitDidChange = (unit) => {
        const temp = this.state.tempRaw;
        this.setState({
            temperature: Math.ceil(unit === "C" ? temp : (temp * 9/5) + 32),
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
