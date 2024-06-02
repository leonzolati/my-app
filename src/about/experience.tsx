import "./experience.scss"

function Experience(props: { svgPath: string, svgAlt: string, title: string, subTitle: string, description: string }) {
    return (
        <div className='Experience'>
            <img src={props.svgPath} alt={props.svgAlt} />
            <div id='text'>
                <div>
                    <h2>{props.title}</h2>
                    <h3>{props.subTitle}</h3>
                </div>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Experience;