import React from 'react';
import data from '../data.js';

const { feArr, beArr, cmArr } = data;

// FLIP ICONS AND DISPLAY DETAILS ON THE BACK

export default function About() {
  let fe = feArr.map((x) => {
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
  // end of feArr

  let be = beArr.map((x) => {
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
  // end of beArr

  let cm = cmArr.map((x) => {
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
  // end of cmArr
  return (
    <>
      <br />
      <h1> About</h1>
      <br />
      <br />
      <br />
      <br />
      <h1>SKILLS</h1>

      <br />
      <br />
      <strong>
        <h1 className="bg-primary text-white">Frontend Development</h1>
      </strong>

      <br />
      <section className="flex-container container-fluid">{fe}</section>

      <br />
      <br />
      <br />
      <br />

      <h1 className="bg-primary text-white">Backend Development</h1>
      <br />
      <section className="flex-container container-fluid">{be}</section>
      {/* end of Backend */}

      <br />
      <br />
      <br />
      <br />
      <h1 className="bg-primary text-white">Creative Media</h1>
      <br />
      <section className="flex-container container-fluid">{cm}</section>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
