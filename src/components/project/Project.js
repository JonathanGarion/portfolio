import React, { Component } from 'react';
import ContentBlock from '../../components/contentBlock/ContentBlock.js';

class Project extends Component {
	constructor() {
		super();
		this.state = {
			open: false
		}
	}

	render() {
		const { data } = this.props;
		const { open } = this.state;
		const root = document.getElementById("root");
		const body = document.getElementById("body");
		console.log(body);

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

		const toggleProject = () => {
			if( open ) {
				body.classList.remove('noscroll')
				root.classList.remove('noscroll')
				this.setState({
					open: false
				})
			} else {
				body.classList.add('noscroll')
				root.classList.add('noscroll')
				this.setState({
					open: true
				})
			}
		}

		return (
			<section className={`project project__${open ? 'open' : 'closed'}`} style={{ backgroundImage: `url(/img${ data.img })` }}>
				<ContentBlock title={ data.title } italic={ false } project={ true }>
					{ hasContent(data.intro) ? <p>{ data.intro }</p> : null }
					{ hasContent(data.explanation) ? <p>{ data.explanation }</p> : null }
					{
						hasContent(data.link)
						?<a className="project__link" href={ data.link } target="_blank" rel="noopener noreferrer">{ data.link }</a>
						:null
					}
					<p>Employed and commissioned by: <b>{ data.employer }</b></p>
				</ContentBlock>
				<ContentBlock title={ "used skills" } italic={ true }>
					{ getSkills() }
				</ContentBlock>
				<button className="project__button" onClick={ e => toggleProject() } onTouchStart={ e => toggleProject() }></button>
			</section>
		);
	}
}

export default Project;
