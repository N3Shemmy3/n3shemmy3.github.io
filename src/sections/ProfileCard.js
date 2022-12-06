import { Component } from "react";
import Button from "../components/Button";
import Github from "../assets/svg/github.svg";
import Telegram from "../assets/svg/telegram.svg";
import Instagram from "../assets/svg/instagram.svg";

export default class ProfileCard extends Component {
	constructor(props) {
		super(props);
		this.openWindow = this.openWindow.bind(this);
	}
	openWindow(url, name) {
		//window.open("https://github.com/N3Shemmy3", "Github");
	}
	render() {
		return (
			<div className="w-full max-w-md mx-auto h-fit p-4 flex flex-col justify-center content-center space-y-3">
				<img
					className="w-40 h-40 m-auto rounded-full drop-shadow-sm shadow-colorPrimary-light border border-colorOutline-dark"
					src="https://avatars.githubusercontent.com/u/67279072?v=4"
					alt="Avatar"
				/>

				<span className=" m-auto w-fit text-center text-colorOnBackground font-bold text-2xl md:text-4xl">
					Shemmy Nyirenda
				</span>
				<span className="m-auto text-center text-md md:text-lg font-thin">
					A 0x12 yo. Java & JavaScript Developer from Zambia.
				</span>

				<div className="flex space-x-2 justify-center content-center">
					<Button
						icon={Github}
						key="btn-github"
						name="Github"
						url="https://github.com/N3Shemmy3"
					/>
					<Button
						icon={Instagram}
						name="Instagram"
						url="https://www.instagram.com/n3shemmy3/"
					/>
					<Button
						url="https://t.me/N3Shemmy3"
						icon={Telegram}
						name="Telegram"
						key="btn-telegram"
					/>
				</div>
			</div>
		);
	}
}
