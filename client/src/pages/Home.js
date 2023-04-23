import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <>
      <h1>Hello! My name is Jason Liu.</h1>
      <h3>
        I'm a full stack web developer with a passion for creating and learning
        new things.
      </h3>
      {/* <div className='bg'>
        <img
          src={require('../images/endless-constellation.png')}
          alt="bg"
        ></img>
      </div> */}
      <br />
      <br />
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
            style={{ width: '150px', marginLeft: '10px', marginRight: '10px' }}
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
    </>
  );
}
