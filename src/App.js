import React, { Component } from 'react';
import { connect } from "react-redux";
import { startAction } from "./actions/startAction";
import { stopAction } from "./actions/stopAction";
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		console.log("before loading", this.props);
		return (
			<div className="App">
			<header className="App-header">
			<img
			src={logo}
			className={
				"App-logo" +
				(this.props.rotating ? "":" App-logo-paused")
			}
			alt="logo"
			onClick={
				this.props.rotating ?
				this.props.stopAction: this.props.startAction
			}
			/>
			<p>
			Edit <code>src/App.js</code> and :w to reload.
			</p>
			<a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
			>
			Learn React
			</a>
			</header>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	...state
});
const mapDispatchToProps = dispatch => ({
	startAction: () => dispatch(startAction),
	stopAction: () => dispatch(stopAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
