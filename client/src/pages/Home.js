import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <>
      <h1>Hello! My name is Jason.</h1>
      <h3>
        I'm a full stack web developer with a passion for creating and learning
        new things.
      </h3>
      <br />
      <br />
      {/* <button className="btn">
        <Link to="https://www.linkedin.com/in/jasonliu-/">
          <img
            src={
              'https://res.cloudinary.com/ddl0mgnds/image/upload/v1681009128/Portfolio/icons8-linkedin-48_b6becc.png'
            }
          ></img>
        </Link>
        LinkedIn
      </button>

      <button className="btn">
        <Link to="https://github.com/JasonGitHubLiu">
          <img
            src={
              'https://res.cloudinary.com/ddl0mgnds/image/upload/v1681008367/Portfolio/icons8-github-48_mh4i7k.png'
            }
          ></img>
        </Link>
        Github
      </button> */}

<Link to="https://www.linkedin.com/in/jasonliu-/">
      <button
        type="button"
        class="btn btn-secondary "
      >
        <img
          src={
            'https://res.cloudinary.com/ddl0mgnds/image/upload/v1681009128/Portfolio/icons8-linkedin-48_b6becc.png'
          }
        ></img>

        LinkedIn
      </button>
        </Link>
      <br />
      <br />
      <Link to="https://github.com/JasonGitHubLiu">
      <button
        type="button"
        class="btn btn-secondary"
      >
          <img
            src={
              'https://res.cloudinary.com/ddl0mgnds/image/upload/v1681008367/Portfolio/icons8-github-48_mh4i7k.png'
            }
          ></img>
        Github
      </button>
        </Link>
    </>
  );
}
