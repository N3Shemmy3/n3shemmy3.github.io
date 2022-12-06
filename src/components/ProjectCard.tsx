import { Component } from "react";

interface Props {
	link: string;
	img: string;
	title: string;
	text: string;
	language: string;
}
export default class ProjectCard extends Component<Props> {
	render() {
		return (
			<a
				href={this.props.link}
				className="w-full shrink-1 md:w-70 cursor-pointer h-fit p-0 rounded-xl space-y-2 select-none bg-colorSurface-light border border-opacity-20 border-colorOutline-dark overflow-hidden "
			>
				<img
					src={this.props.img}
					className="w-full h-full hover:opacity-50"
					alt="test"
				/>
				{/**
				 * 
				<a
					href={this.props.link}
					className=" w-fit text-colorOnSurface-light text-lg font-semibold hover:text-colorPrimary-light"
				>
					{this.props.title}
				</a>
				<p className="text-colorOnSurface-light text-sm select-text">
					{this.props.text}
				</p>
				<div className="flex gap-3 pt">
					<span className="w-fit text-colorOnPrimary-dark text-xs sm:text-sm font-thin p-1 rounded-md bg-colorPrimary-dark border border-opacity-50 border-colorOutline-dark ">
						{this.props.language}
					</span>

					<span className="w-fit text-colorOnPrimary-dark text-xs sm:text-sm font-thin p-1 rounded-md bg-colorPrimary-dark border border-opacity-50 border-colorOutline-dark ">
						{this.props.language}
					</span>
				</div>
			*/}
			</a>
		);
	}
}
