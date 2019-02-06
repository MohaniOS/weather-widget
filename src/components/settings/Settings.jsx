
import React, { Component } from "react";

import "./Settings.scss";

export default class Settings extends Component {

    render() {
        return (
            <div class="settings-container">
                <h1>Title</h1>
                <input class="wid-title" placeholder="Title of Widget" type="text" />
                <div class="temperature">
                    <h4>Temperature</h4>
                    <div class="temp-val">
                    <span class="wid-group">
                            <input type="radio" name="temp" value="C" checked="true" id="c" />
                            <label for="c">°C</label>
                        </span>
                        <span class="wid-group">
                            <input type="radio" name="temp" value="F" id="f" />
                            <label for="f">°F</label>
                        </span>
                        
                    </div>
                </div>
                <div class="temperature">
                    <h4>Wind</h4>
                    <div class="temp-val">
                        <span class="wid-group">
                            <input type="radio" name="wind" value="on" checked="true" id="on" />
                            <label for="on">On</label>
                        </span>
                        <span class="wid-group">
                            <input type="radio" name="wind" value="off" id="off" />
                            <label for="off">Off</label>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

