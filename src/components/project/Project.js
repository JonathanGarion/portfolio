import React, { Component } from 'react';
import ContentBlock from '../../components/contentBlock/ContentBlock.js';

class Project extends Component {
	constructor() {
		super();
		this.state = {
			
		}
	}

	render() {
		const { data } = this.props;

		const getSkills = () => {
			let skillList = [];

			for(let i = 0; i < data.skills.length; i++) {
				const skill = data.skills[i]

				if( i !== data.skills.length -1 ) {
					skillList.push(
						skill + ", "
					)
				} else {
					skillList.push(
						skill
					)
				}
			}
			return skillList
		}

		const hasContent = ( content ) => {
			if(content !== "") {
				return true;
			} else {
				return false;
			}
		}

		return (
			<article className="project">
				<ContentBlock title={ data.title } italic={ false } project={ true }>
					{ hasContent(data.intro) ? <p>{ data.intro }</p> : null }
					{ hasContent(data.explanation) ? <p>{ data.explanation }</p> : null }
					{
						hasContent(data.link)
						?<a className="project__link" href={ data.link }>{ data.link }</a>
						:null
					}
				</ContentBlock>
				<ContentBlock title={ "used skills" } italic={ true }>
					{ getSkills() }
				</ContentBlock>
				<img className="project__image" scr="" alt="" />
			</article>
		);
	}
}

export default Project;
