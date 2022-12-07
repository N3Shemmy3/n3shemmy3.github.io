import axios from "axios";
import { Component } from "react";
import ProjectCard from "../components/ProjectCard";
interface Project {
	owner: string;
	repo: string;
	description: string;
	link: string;
	image: string;
	language: string;
	languageColor: string;
	stars: string;
	forks: number;
}
interface State {
	projects: Project[];
}
export default class ProjectsCard extends Component<any, State> {
	setProjects(list: Project[]) {
		this.setState((state, props) => ({
			projects: list,
		}));
	}
	componentDidMount() {}

	componentWillUnmount() {}
	render() {
		let list: any[] = [
			{
				owner: "N3Shemmy3",
				repo: "n3shemmy3.github.io",
				description:
					"My personal website and portfolio where i showcase my skills and intersts",
				link: "https://github.com/N3Shemmy3/n3shemmy3.github.io",
				image:
					"https://opengraph.githubassets.com/1/N3Shemmy3/n3shemmy3.github.io",
				language: "TypeScript",
				languageColor: "#3178c6",
				stars: "1",
				forks: 0,
			},
			{
				owner: "N3Shemmy3",
				repo: "MNotes",
				description:
					"A material design multiplatform note taking app built using the vue js framework",
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
				description:
					"StackHub is a soon to be cross-platform net for software engneers to collaborate and socialize",
				link: "https://github.com/N3Shemmy3/StackHub-web",
				image: "https://opengraph.githubassets.com/1/N3Shemmy3/StackHub-web",
				language: "Vue",
				languageColor: "#41b883",
				stars: "1",
				forks: 0,
			},
		];
		axios
			.get("https://gh-pinned-repos.egoist.dev/?username=N3Shemmy3")
			.then((res) => {
				console.log(res);
				list = res.data;
				this.setProjects(list);
			})
			.catch((error) => {
				console.log(error);
			});

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
					{list.map((project: any, idx: number) => (
						<ProjectCard project={project} key={idx} />
					))}
				</div>
			</div>
		);
	}
}
