import React, { Component } from 'react';
import ContentBlock from '../../components/contentBlock/ContentBlock.js';
// import Button from '../../components/buttons/button.js';

class About extends Component {
	constructor() {
		super();
		this.state = {
			
		}
	}

	render() {
		return (
			<section className="section about" id="about">
				<img className="about__image" src="/img/hoofd.png" alt="mooiejongen" />
				<h2 className="about__title">Nice to meet you!</h2>
				<div className="about__content">
					<ContentBlock title={ "my story" } italic={ false }>
						My name is Jonathan Kerkhoven.<br />
						I'm a Front-End developer with experience as scrum master. 
						My specialties are in styling and UX to make the most out 
						of the user interaction of web applications. My preference 
						lies in working with Sass and JavaScript, in order to get 
						the best result in projects.
					</ContentBlock>
					<ContentBlock title={ "skills" } italic={ true }>
						HTML, CSS, SASS, JavaScript, React, Grunt, Gulp, WebPack
					</ContentBlock>
					<ContentBlock title={ "let's connect" } italic={ false }>
						<a href="https://github.com/JonathanGarion" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-alt"></i></a>
						<a href="https://www.linkedin.com/in/jonathan-kerkhoven-26683bab/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square"></i></a>
					</ContentBlock>
				</div>
			</section>
		);
	}
}

export default About;
