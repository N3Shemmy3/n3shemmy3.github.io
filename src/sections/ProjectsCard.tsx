import axios from "axios";
import { useEffect, useState } from "react";
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
export default function ProjectsCard(props: any, state: State) {
	const [list, setList] = useState([]);

	useEffect(() =>{
		axios
		.get("https://gh-pinned-repos.egoist.dev/?username=N3Shemmy3")
		.then((res) => {
			console.log(res);
			setList(res.data);
		   })
		   .catch((error) => {
			   console.log(error);
		   });
	}, [])
	
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
