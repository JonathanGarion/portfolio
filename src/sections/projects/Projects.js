import React, { Component } from 'react';
import Project from '../../components/project/Project.js';

class Projects extends Component {
	constructor() {
		super();
		this.state = {
			data: require('../../database/db.json')
		}
	}

	render() {
		const { data } = this.state;
		const projects = data.projects;

		const getProjects = () => {
			let projectList = [];

			for(let i = 0; i < projects.length; i++) {
				const project = data.projects[i]

				projectList.push(
					<Project key={ i } data={ project } />
				)
			}
			return projectList
		}

		return (
			<section className="section projects">
				<h2 className="projects__title">projects</h2>
				<div className="projects__content">
					{ getProjects() }
				</div>
			</section>
		);
	}
}

export default Projects;
