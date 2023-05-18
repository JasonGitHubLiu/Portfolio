import { Link } from 'react-router-dom';
import data from '../data.js';

export default function Home() {
  const { feArr, beArr, cmArr, abArr } = data;

  let fe = feArr.map((x) => {
    return (
      <div className="skillIcon d-flex flex-column text-center col-5 col-sm-3 col-md-3 shadow col-lg-1 border border-primary rounded">
        <div className="skillImg">
          <img className="skills" src={`${x.img}`} alt={x.name} />
        </div>

        <div className="iconText">
          <strong>{x.name}</strong>
        </div>
      </div>
    );
  });
  // end of feArr

  let be = beArr.map((x) => {
    return (
      <div className="skillIcon d-flex flex-column text-center col-5 col-sm-3 col-md-3 shadow col-lg-1 border border-primary rounded">
        <div className="skillImg">
          <img className="skills" src={`${x.img}`} alt={x.name} />
        </div>

        <div className="iconText">
          <strong>{x.name}</strong>
        </div>
      </div>
    );
  });
  // end of beArr

  let cm = cmArr.map((x) => {
    return (
      <div className="skillIcon d-flex flex-column text-center col-5 col-sm-3 col-md-3 shadow col-lg-1 border border-primary rounded">
        <div className="skillImg">
          <img className="skills" src={`${x.img}`} alt={x.name} />
        </div>

        <div className="iconText">
          <strong>{x.name}</strong>
        </div>
      </div>
    );
  });

  let ab = abArr.map((x) => {
    return (
      <div className="skillIcon d-flex flex-column text-center col-5 col-sm-3 col-md-3 shadow">
        <div className="skillImg">
          <img className="skills" src={`${x.img}`} alt={x.name} />
        </div>

        <div className="iconText">
          <strong>{x.name}</strong>
        </div>
      </div>
    );
  });

  const currentYear = new Date().getFullYear();

  return (
    <>
      <br />
      <br />
      <section>
        <h1>Hello! My name is Jason Liu.</h1>
        <h3>
          I'm a full stack web developer with a passion for creating and
          learning new things.
        </h3>
        {/* <div className='bg'>
        <img
          src={require('../images/endless-constellation.png')}
          alt="bg"
        ></img>
      </div> */}
        <br />
        <br />

        {/* end of home  */}
      </section>
      {/* start of Skills */}
      <br />
      <br />
      <section>
        <br />
        <br />
        <h1 name="skills" id="skills">
          Skills
        </h1>

        <br />
        <br />
        <strong>
          <h1 className="bg-primary text-white">Frontend Development</h1>
        </strong>

        <br />
        <div className="flex-container container-fluid bg-black">{fe}</div>

        <br />
        <br />
        <br />
        <br />

        <h1 className="bg-primary text-white">Backend Development</h1>
        <br />
        <div className="flex-container container-fluid">{be}</div>
        {/* end of Backend */}

        <br />
        <br />
        <br />
        <br />
        <h1 className="bg-primary text-white">Creative Media</h1>
        <br />
        <div className="flex-container container-fluid bg-black">{cm}</div>
        <br />
        <br />
        <br />
        <br />
      </section>
      {/* end of skills */}
      {/* start of about */}
      <br />
      <br />
      <section>
        <br />
        <h1 name="about" id="about">
          {' '}
          About
        </h1>
        <br></br>
        <div className="aboutDiv">
          <h3>My name is Jason Liu, and I'm from Boston, Massachusetts.</h3>
          <br></br>
          <h3>
            I pursued my undergraduate studies at UMass Boston, focusing on
            Entrepreneurship and Marketing, and earned my Bachelor's degree in
            Management.{' '}
          </h3>
          <br></br>
          <h3>
            Following graduation, I shifted my focus to the technology industry
            and enrolled in the Software Engineering Bootcamp provided by Per
            Scholas, which I successfully completed.
          </h3>
          <br></br>
          <h3>I am a MERN Full-Stack Developer.</h3>
        </div>
        <br></br>
        <div className="flex-container container-fluid">{ab}</div>
        <br />
        <br />
      </section>
      {/* end of about */}
      {/* start of projects */}
      {/* <div> */}
      <section>
        {/* <h1>Hello Projects</h1> */}
        <br></br>
        {/* <div className='shadow-lg container-fluid border border-primary'></div> */}
        <h1 name="projects" id="projects">
          Projects:
        </h1>
        <br></br>
        <div className="container-fluid d-flex justify-content-center mx-0 bg-black">
          <div className="proj col-lg-3 projImg shadow mx-3 col-sm-12 border border-primary rounded p-3 project-overlay">
            <h2>Workout Journal/Log</h2>
            <a
              href="https://myworkoutlog-frontend.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require('../images/workOutHome.JPG')}
                alt="Workout Log"
              ></img>
              <h4>Mod 3 Project: The Full Stack MERN App</h4>
              <div className="project-overlay-text">
                <h3>The workout journal/log is an application designed to help you track and record your fitness activities.</h3>{' '}
                {/* Replace with your desired overlay text */}
              </div>
            </a>
          </div>
          <br />
          <br />
          <div className="proj col-lg-3 projImg shadow mx-3 col-sm-12 border border-primary rounded p-3 project-overlay">
          <h2>Rick and Morty API</h2>
            <a
              href="https://rick-and-morty-api1.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require('../images/rmpic.JPG')}
                alt="Rick and Morty API"
              ></img>
              <h4>Mod 2 Project: My First React Application</h4>
              <div className="project-overlay-text">
                <h3>The Rick and Morty API is a platform that provides access to a collection of information related to the popular TV show</h3>{' '}
                {/* Replace with your desired overlay text */}
              </div>
            </a>
          </div>
          <br />
          <div className="proj col-lg-3 projImg shadow mx-3 col-sm-12 border border-primary rounded p-3 project-overlay">
            <h2>Tic Tac Toe</h2>
            <a
              href="https://jasongithubliu.github.io/TicTacToeGame/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require('../images/tictactoe.JPG')}
                alt="Tic Tac Toe"
              ></img>
              <h4>Mod 1 Project: Game On!</h4>
              <div className="project-overlay-text">
                <h3>Tic Tac Toe for my very first game project</h3>{' '}
                {/* Replace with your desired overlay text */}
              </div>
            </a>
          </div>
          <br />
          <br />
          <br />
        </div>
        <br></br>
      </section>

      {/* </div> */}
      {/* end of projects */}
      <footer>
        {' '}
        Copyright {currentYear} © Jason
        <div className="btn-group" role="group">
          <Link to="https://www.linkedin.com/in/jasonliu-/" target="_blank">
            <button
              type="button"
              className="btn btn-secondary"
              style={{ width: '150px', marginRight: '10px' }}
            >
              <img
                src={
                  'https://res.cloudinary.com/ddl0mgnds/image/upload/v1681009128/Portfolio/icons8-linkedin-48_b6becc.png'
                }
                alt="LinkedIn"
              ></img>
              LinkedIn
            </button>
          </Link>
          <Link to="https://github.com/JasonGitHubLiu" target="_blank">
            <button
              type="button"
              className="btn btn-secondary"
              style={{
                width: '150px',
                marginLeft: '10px',
                marginRight: '10px',
              }}
            >
              <img
                src={
                  'https://res.cloudinary.com/ddl0mgnds/image/upload/v1681008367/Portfolio/icons8-github-48_mh4i7k.png'
                }
                alt="GitHub"
              ></img>
              GitHub
            </button>
          </Link>
        </div>
        <button
          type="button"
          className="btn btn-secondary"
          style={{ width: '150px', marginLeft: '10px' }}
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1sWi2yz1CBy1Sl0V216A3PV9hC5_WWHiC/view?usp=sharing',
              '_blank'
            )
          }
        >
          <img
            src={
              'https://res.cloudinary.com/ddl0mgnds/image/upload/v1681033283/Portfolio/icons8-resume-48_vcjlyl.png'
            }
            alt="Resume"
          ></img>
          Resume
        </button>
      </footer>
    </>
  );
}
