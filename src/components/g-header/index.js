import React, { Component } from 'react';
// import logo from './logo.svg';
import './app.scss';

class Gheader extends Component {
    render() {
        return (
            <div className="header">
                <header className="h-logo">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <h1 className="App-title">CodeWall</h1>
                </header>
                <div className="h-nav">
                    <a href="" className="cw-btn">Python</a>
                    <a href="" className="cw-btn">Ruby</a>
                    <a href="" className="cw-btn">Front</a>
                    <a href="" className="cw-btn">IOS</a>
                </div>
            </div>
        );
    }
}

export default Gheader;
