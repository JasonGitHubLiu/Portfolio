import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <>
      <div>
        <h1>Hello Projects</h1>
        <br></br>
        <h1>Projects:</h1>
        <br></br>
        <h4>Mod 3 Project: The Full Stack MERN App</h4>
        <div className="projImg">
        <Link to="https://myworkoutlog-frontend.onrender.com/">
          <img className="rpe" src={require('../images/workOutHome.JPG')}></img>
          Workout Journal/Log
        </Link>
        </div>
        <br/>
        {/* <Link to="https://myworkoutlog-frontend.onrender.com/">
          Workout Journal/Log
        </Link> */}
        <br />
        <h4>Mod 2 Project: My First React Application</h4>

        <Link to="https://rick-and-morty-api1.netlify.app/">
          Rick and Morty API
        </Link>
        <br />
        <h4>Mod 1 Project: Game On!</h4>
        <Link to="https://jasongithubliu.github.io/TicTacToeGame/">
          Tic Tac Toe
        </Link>
      </div>
    </>
  );
}
