import React from 'react';
import './App.scss';
import Landing from './sections/landing/Landing.js';
import About from './sections/about/About.js';
import Projects from './sections/projects/Projects.js';

function App() {
	return (
		<div className="App">
			<Landing />
			<About />
			<Projects />
		</div>
	);
}

export default App;
