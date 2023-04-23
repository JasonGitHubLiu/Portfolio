import React from 'react';
import data from '../data.js';

const { abArr } = data;

export default function About() {
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
  return (
    <>
      <br />
      <h1> About</h1>
      <br></br>
      <div className='aboutDiv'>
      <h3>My name is Jason Liu, and I'm from Boston, Massachusetts.</h3>
      <br></br>
      <h3>I pursued my undergraduate studies at UMass Boston, focusing on Entrepreneurship and Marketing, and earned my Bachelor's degree in Management. </h3>
      <br></br>
      <h3>Following graduation, I shifted my focus to the technology industry and enrolled in the Software Engineering Bootcamp provided by Per Scholas, which I successfully completed.</h3>
      <br></br>
      <h3>I am a MERN Full-Stack Developer.</h3>
      </div>
      <br></br>
      <section className="flex-container container-fluid">{ab}</section>
      <br />
      <br />

    </>
  );
}
