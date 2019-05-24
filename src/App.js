import React from 'react';
import './App.scss';
import Landing from './sections/landing/Landing.js';
import About from './sections/about/About.js';

function App() {
	return (
		<div className="App">
			<Landing />
			<About />
		</div>
	);
}

export default App;
