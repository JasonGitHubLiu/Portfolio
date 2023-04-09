import { Link } from 'react-router-dom';
// import data from '../data.js';

// const { feArr, beArr, cmArr, projArr } = data;

export default function Projects() {
  // let proj = projArr.map((x) => {
  //   return (
  //     <div className="skillIcon d-flex flex-column text-center col-5 col-sm-3 col-md-3 shadow">
  //       <div className="skillImg">
  //         <img className="skills" src={`${x.img}`} alt={x.name} />
  //       </div>

  //       <div className="iconText">
  //         <strong>{x.name}</strong>
  //       </div>
  //     </div>
  //   );
  // });
  return (
    <>
      <div>
        {/* <h1>Hello Projects</h1> */}
        <br></br>
        <h1>Projects:</h1>
        <br></br>
        <h4>Mod 3 Project: The Full Stack MERN App</h4>
        <div className="projImg shadow">
          <Link to="https://myworkoutlog-frontend.onrender.com/" target="_blank">
            <img src={require('../images/workOutHome.JPG')} alt='Workout Log'></img>
            <h1>Workout Journal/Log</h1>
          </Link>
        </div>
        <br />
        {/* <Link to="https://myworkoutlog-frontend.onrender.com/">
          Workout Journal/Log
        </Link> */}
        <br />
        <h4>Mod 2 Project: My First React Application</h4>
        <div className="projImg shadow">
          <Link to="https://rick-and-morty-api1.netlify.app/" target="_blank">
            <img src={require('../images/rmpic.JPG')} alt='Rick and Morty API'></img>
            <h1>Rick and Morty API</h1>
          </Link>
        </div>
        <br />
        <h4>Mod 1 Project: Game On!</h4>
        <div className="projImg shadow">
          <Link to="https://jasongithubliu.github.io/TicTacToeGame/" target="_blank">
            <img src={require('../images/tictactoe.JPG')} alt='Tic Tac Toe'></img>
            <h1>Tic Tac Toe</h1>
          </Link>
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
