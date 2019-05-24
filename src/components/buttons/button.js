import React, { Component } from 'react';

class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		const { buttonText, buttonLink, buttonType } = this.props

		return (
			<button className={ `btn ${ buttonType ? `btn--${buttonType}`: '' } `} href={`${buttonLink}`}>
				{ buttonText }
			</button>
		);
	}
}

export default Button;
