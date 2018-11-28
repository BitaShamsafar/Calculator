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
          
          <Calc />
          <Game />
          
      </div>
    );
  }
}

export default App;
