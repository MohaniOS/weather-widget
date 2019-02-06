
import React, { Component } from "react";

import Display from "../../components/display/Display"
import Settings from "../../components/settings/Settings"

import "./Widget.scss";

export default class Widget extends Component {

    render() {
        return (
            <div className="container">
                <Settings />
                <Display />
            </div>
        )
    };
}
