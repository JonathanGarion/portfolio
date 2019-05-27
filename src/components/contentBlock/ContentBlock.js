import React, { Component } from 'react';

class ContentBlock extends Component {
	constructor() {
		super();
		this.state = {
			
		}
	}

	render() {
		const { title, italic, children, project } = this.props;

		const setContent = () => {
			if( project ) {
				return (
					<React.Fragment>
						{ children }
					</React.Fragment>
				)
			} else {
				if(italic) {
					return <ul>{ children }</ul>
				} else {
					return <p>{ children }</p>
				}
			}
		}

		return (
			<article className={ `content-block ${italic ? 'content-block--italic' : ''}` }>
				<h3>{ title }</h3>
				{
					setContent()
				}
			</article>
		);
	}
}

export default ContentBlock;
