import React, { Component } from 'react';
import './App.css';
import AppWindow from './components/AppWindow';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<AppWindow title='test' width={350}>yeet</AppWindow>
				<AppWindow title='test' width={500}></AppWindow>
			</React.Fragment>
		);
	}
}

export default App;
