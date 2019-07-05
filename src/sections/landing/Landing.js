import React, { Component } from 'react';
import Button from '../../components/buttons/button.js';

class Landing extends Component {
	constructor() {
		super();
		this.state = {
			
		}
	}

	render() {
		return (
			<section className="section landing">
				<h1 className="heading heading--1">Jonathan<span className="dot"></span></h1>
				<div className="landing__btn-row">
					<Button buttonText='about' buttonLink='#about' buttonType='home' />
					<Button buttonText='projects' buttonLink='#projects' buttonType='home' />
				</div>
			</section>
		);
	}
}

export default Landing;
