import './contact.scss';
import ContactButton from './contactButton';

function Contact() {
    return (
        <div className='Contact'>
            <h1>Get In Touch</h1>
            <div id='buttons'>
                <ContactButton svgPath='Email.svg' svgAlt='email icon' title='Email' link='mailto:leonzolati@gmail.com' />
                <ContactButton svgPath='LinkedIn.svg' svgAlt='LinkedIn icon' title='LinkedIn' link='https://linkedin.com/in/zolati' />
                <ContactButton svgPath='GitHub.svg' svgAlt='GitHub icon' title='GitHub' link='https://github.com/leonzolati' />
            </div>
        </div>
    );
}

export default Contact;