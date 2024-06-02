import { link } from "fs";
import "./contactButton.scss"

function ContactButton(props: { svgPath: string, svgAlt: string, title: string, link: string}) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div className='ContactButton'>
                <img src={props.svgPath} alt={props.svgAlt} />
                <h3>{props.title}</h3>
            </div>
        </a>

    );
}

export default ContactButton;