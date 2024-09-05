import "./experience.scss";

function Experience(props: {
	svgPath: string;
	svgAlt: string;
	title: string;
	subTitle: string;
	description: string;
}) {
	return (
		<div className="Experience">

			<div id="experienceImage">
				<img src={props.svgPath} alt={props.svgAlt} />
			</div>

			<div id="experienceTitle">
				<h2>{props.title}</h2>
				<h3>{props.subTitle}</h3>
			</div>

			<div id="experienceDescription">
				<p>{props.description}</p>
			</div>

		</div>
	);
}

export default Experience;
