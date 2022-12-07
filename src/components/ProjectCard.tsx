import { Component } from "react";
import Group from "../assets/svg/group.svg"
import Star from "../assets/svg/stars.svg";

interface Props {
	project: Project;
}
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
export default class ProjectCard extends Component<Props> {
	render() {
		return (
			<a
				href={this.props.project.link}
				className="w-full shrink-1 md:w-70 cursor-pointer h-fit p-4 rounded-xl space-y-2 select-none bg-colorSurface-light border border-opacity-20 border-colorOutline-dark overflow-hidden "
			>
				<div className="flex flec-col">
					<a
						href={this.props.project.link}
						className=" w-fit text-colorOnSurface-light hover:text-colorPrimary-light"
					>
						<span className="text-xl">{this.props.project.owner + "/"}</span>
						<br></br>
						<span className="text-xl font-bold">{this.props.project.repo}</span>
					</a>
					<img
						src="https://avatars.githubusercontent.com/u/67279072?v=4"
						className="w-16 ml-auto h-16 rounded-md"
						alt="test"
					/>
				</div>
				<p className="text-colorOnSurface-light text-md select-text">
					{this.props.project.description}
				</p>
				<div className="flex gap-3 pt">
					<span className="mdi-button cursor-pointer select-none flex space-x-2 ">
						<img
							className=" w-6 h-6 fill-colorOnSurface-light "
							src={Group}
							alt=""
						/>
						<h6 className="h-fit w-max place-self-center text-xs text-colorOnSurface-light">
							{this.props.project.forks} Contributers
						</h6>
					</span>
					<span className="mdi-button cursor-pointer select-none flex space-x-1 ">
						<img
							className=" w-6 h-6  fill-colorOnSurface-light"
							src={Star}
							alt=""
						/>
						<h6 className="h-fit w-max place-self-center text-xs text-colorOnSurface-light">
							{this.props.project.stars} Stars
						</h6>
					</span>
				</div>
			</a>
		);
	}
}
