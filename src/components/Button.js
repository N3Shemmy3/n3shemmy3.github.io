import { Component } from "react";
class Button extends Component {
	render() {
		return (
			<a href={this.props.url} className="mdi-button cursor-pointer select-none flex py-2 px-3 bg-colorPrimary-light hover:opacity-75 rounded-full space-x-2 ">
				 {this.props.icon != null &&
				<img
					className=" w-6 h-6 "
					src={this.props.icon}
					alt=""
				/>
				 }
				<h6 className="h-fit w-max place-self-center text-xs md:text-sm text-colorOnPrimary-light">
					{this.props.name}
				</h6>
			</a>
		);
	}
}
export default Button;
