import { Component } from "react";
import ProjectCard from "../components/ProjectCard";

export default class ProjectsCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [
				{
					owner: "N3Shemmy3",
					repo: "MNotes",
					link: "https://github.com/N3Shemmy3/MNotes",
					image: "https://opengraph.githubassets.com/1/N3Shemmy3/MNotes",
					language: "Vue",
					languageColor: "#41b883",
					stars: "2",
					forks: 0,
				},
				{
					owner: "N3Shemmy3",
					repo: "StackHub-web",
					link: "https://github.com/N3Shemmy3/StackHub-web",
					image: "https://opengraph.githubassets.com/1/N3Shemmy3/StackHub-web",
					language: "Vue",
					languageColor: "#41b883",
					stars: "1",
					forks: 0,
				},
				{
					owner: "N3Shemmy3",
					repo: "AndroidNavigation",
					link: "https://github.com/N3Shemmy3/AndroidNavigation",
					description:
						"A library managing navigation, nested Fragment, StatusBar, Toolbar for Android",
					image:
						"https://opengraph.githubassets.com/1/N3Shemmy3/AndroidNavigation",
					language: "Java",
					languageColor: "#b07219",
					stars: 0,
					forks: 0,
				},
			],
		};
	}
	readJson() {
		var list;
		fetch("https://gh-pinned-repos.egoist.dev/?username=N3Shemmy3")
			.then((response) => {
				if (!response.ok) {
					throw new Error("HTTP error " + response.status);
				}
				this.state.projects = response.json;
				return response.json();
			})
			.then((json) => {
				this.projects = json;
				this.state.projects = json;
				this.list = json;
				//console.log(this.state.projects);
			})
			.catch(function () {
				//this.dataError = true;
			});
			return list;
	}
	render() {
		var projects = this.readJson();
		return (
			<div>
				<div className="w-full max-w-md mx-auto h-fit p-4 flex flex-col justify-center content-center">
					<span className="w-fit text-colorOnBackground font-bold text-xl md:text-2xl">
						Projects
					</span>
					<span className="w-fit text-md font-regular">
						A list of projects i have worked on
					</span>
				</div>

				<div className="w-full max-w-6xl m-auto gap-4 h-fit p-4 md:p-8 grid md:grid-cols-2 lg:grid-cols-3">
					{this.state.projects.map((project, idx) => (
						<ProjectCard
							title={project.repo}
							img={project.image}
							text={project.description}
							link={project.link}
							language={project.language}
							key={idx}
						></ProjectCard>
					))}
				</div>
			</div>
		);
	}
}
