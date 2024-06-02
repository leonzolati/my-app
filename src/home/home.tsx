import './home.scss';

function Home() {
  return (
    <div className='Home'>
      <div id='container'>
        <div id='text'>
          <h3>
            Hey, I'm Leon 👋
          </h3>
          <h1>
            Full Stack<br />
            Developer
          </h1>
          <h3>
            I'm a junior developer based in Australia, passionate about all things software engineering.
          </h3>
        </div>
        <div id='hero'>
          <img src="hero.svg" alt='Leon Zolati' />
        </div>
      </div>
    </div>
  );
}

export default Home;