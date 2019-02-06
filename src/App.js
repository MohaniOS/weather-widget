import React, { Component } from 'react';

import Widget from "./containers/widget/Widget"

class App extends Component {
  render() {
    return (
      <div>
        <h1>Weather Widget</h1>
        <Widget />
      </div>
    );
  }
}

export default App;
