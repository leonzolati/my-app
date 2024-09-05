import './about.scss';
import './experience'
import Experience from './experience';

function About() {
  return (
    <div className='About'>
      <Experience svgPath='UTAS.svg' svgAlt='University of Tasmania Logo' title='University of Tasmania' subTitle='High Achiever Program' description='In 2020 I completed a year long course offered to high academic achievers throughout my year twelve studies. This included both introductory software development and AI/ML courses which further cemented my love of computer science and software development.' />
      <Experience svgPath='ANU.svg' svgAlt='Australian National University Logo' title='Australian National University' subTitle='Bachelor of Computing' description='I then went on to study at the ANU completing my degree in 2024. During this time I primarily focused on data structures, algorithms, computer architecture, networks, and software development processes but also took a number of Korean language courses.' />
      <Experience svgPath='AD.svg' svgAlt='Agile Digital Logo' title='Agile Digital' subTitle='Software Developer' description='While completing my second year of studies at the ANU, I began working at a Canberra-based software development company Agile Digital. Through this I gained valuable work experience while developing several internal tools and completing client work as I began to hone my skills as a software engineer.' />
      <Experience svgPath='Atlassian.svg' svgAlt='Atlassian Logo' title='Atlassian' subTitle='Intern and Graduate Software Developer' description='Then over the summer of 2023-24, I interned at Atlassian working within the Sandbox team on onboarding the Validation Engine to the data migration pipeline allowing users to perform preflight checks prior to starting a migration. I then received my graduate offer and will begin working full time as a software developer in 2025.' />

    </div>
  );
}

export default About;