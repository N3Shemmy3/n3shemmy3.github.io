interface Props {
	url: string;
	icon: string;
	name: string;
}

export default function Button(props: Props) {
	function onClick(url: string){
		window.open(props.url, props.name);
	}
	return (
		<div
		onClick={()=>{onClick(props.url)}}
			className="mdi-button cursor-pointer select-none flex py-2 px-3 bg-colorPrimary-light hover:opacity-75 rounded-full space-x-2 "
		>
			{props.icon != null && (
				<img className=" w-6 h-6 " src={props.icon} alt="" />
			)}
			<h6 className="h-fit w-max place-self-center text-xs md:text-sm text-colorOnPrimary-light">
				{props.name}
			</h6>
		</div>
	);
}
