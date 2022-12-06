import "./App.css";
import { Component } from "react";
import ProfileCard from "./sections/ProfileCard";
import ProjectsCard from "./sections/ProjectsCard";

export default class App extends Component {
	render() {
		return (
			<div className="App content-center space-y-6 dark">
				<ProfileCard />
				<ProjectsCard />
			</div>
		);
	}
}
