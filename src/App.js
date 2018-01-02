import React, { Component } from 'react';
import Gheader from './components/g-header';
import Gmain from './pages/main';
import Gfooter from './components/g-footer';

class App extends Component {
  render() {
    return (
        <div>
            <Gheader />
            <Gmain />
            <Gfooter />
        </div>
    );
  }
}

export default App;