// index.js
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';


var App = createReactClass ({
  render() {
    return (
      <div>
        Welcome to React!
      </div>
    )
  }
});

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)