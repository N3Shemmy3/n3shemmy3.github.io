import "./App.css";
import ProfileCard from "./sections/ProfileCard";
import ProjectsCard from "./sections/ProjectsCard";

export default function App() {
	return (
		<div className="App content-center space-y-6 dark">
			<ProfileCard />
			<ProjectsCard />
		</div>
	);
}
