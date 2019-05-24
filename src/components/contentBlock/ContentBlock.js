import React, { Component } from 'react';

class ContentBlock extends Component {
	constructor() {
		super();
		this.state = {
			
		}
	}

	render() {
		const { title, italic } = this.props;
		return (
			<article className={ `content-block ${italic ? 'content-block--italic' : ''}` }>
				<h3>{ title }</h3>
				{
					italic ? <p>{ this.props.children }</p> :
					<ul>{ this.props.children }</ul>
				}
			</article>
		);
	}
}

export default ContentBlock;
