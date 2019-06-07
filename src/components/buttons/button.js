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
			<a className={ `btn ${ buttonType ? `btn--${buttonType}`: '' } `} href={ buttonLink }>
				{ buttonText }
			</a>
		);
	}
}

export default Button;
