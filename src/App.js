import React, { Component } from 'react';

import Search from './Search';
import Calc from './Calculator';
import Game from './Game'


class App extends Component {
  render() {
    return (
      <div className="App">

          <Search />
          <br/>
          <p>Here Is a Calculator Created with ReactJS</p>
          <Calc />
          <Game />
          
      </div>
    );
  }
}

export default App;
