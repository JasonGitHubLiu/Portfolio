// export default function About() {
//   return (
//     <>
//       <h1>Hello About</h1>

//       {/* <div class="container text-center">
//   <div class="row">
//     <div class="col">
//     HTML
//     <img className='skills' src={require('../images/html.png')}></img>
//     </div>
//     <div class="col">
//     test
//     <img className='skills' src={require('../images/html.png')}></img>
//     </div>
//     <div class="col">
//       test2
//     <img className='skills' src={require('../images/html.png')}></img>
//     </div>
//     <div class="col">
//     <img className='skills' src={require('../images/html.png')}></img>
//       test3
//     </div>
//   </div>
// </div> */}
//       <h1>SKILLS</h1>
//       <h3>Frontend Development</h3>
//       <section className="flex-container ">
//         <div className=''>
//           <img className='skills' src={require('../images/html.png')}></img>
//            <strong><div>HTML</div></strong>
//         </div>
//         <div>
//           <img className='skills' src={require('../images/css.png')}></img>
//           <strong><div>CSS</div></strong>
//         </div>
//         <div>
//           <img className='skills' src={require('../images/js.png')}></img>
//           <strong><div>JavaScript</div></strong>
//         </div>
//         <div>
//           <img className='skills' src={require('../images/bootstrap.png')}></img>
//           <strong><div>Bootstrap</div></strong>
//         </div>
//         <div>
//           <img className='skills' src={require('../images/react.png')}></img>
//           <strong><div>React</div></strong>
//         </div>
//         <div>
//           <img className='skills' src={require('../images/illustrator.png')}></img>
//           <strong><div>Illustrator</div></strong>
//         </div>
//         {/* <div>
//           <img className='skills' src={require('../images/indesign.png')}></img>
//           <strong><div>InDesign</div></strong>
//         </div> */}
//         <div>
//           <img className='skills' src={require('../images/photoshop.png')}></img>
//           <strong><div>Photoshop</div></strong>
//         </div>
//         <div>
//           <img className='skills' src={require('../images/premierpro.png')}></img>
//           <strong><div>Premier Pro</div></strong>
//         </div>
//       </section>
//     </>
//   );
// }

import React from 'react';

export default function About() {
  return (
    <>
      <h1>Hello About</h1>
      <h1>SKILLS</h1>

      <br />
      <br />
      <h4>Frontend Development</h4>
      <section className="flex-container">
        <div className="skill">
          <img
            className="skills"
            src={require('../images/node.png')}
            alt="Node"
          />
          <strong>
            <div>Node.JS</div>
          </strong>
        </div>
        <div className="skill">
          <img
            className="skills"
            src={require('../images/react.png')}
            alt="React"
          />
          <strong>
            <div>ReactJS</div>
          </strong>
        </div>
        <div className="skill">
          <img
            className="skills"
            src={require('../images/js.png')}
            alt="JavaScript"
          />
          <strong>
            <div>JavaScript</div>
          </strong>
        </div>
        <div className="skill">
          <img
            className="skills"
            src={require('../images/html.png')}
            alt="HTML"
          />
          <strong>
            <div>HTML</div>
          </strong>
        </div>
        <div className="skill">
          <img
            className="skills"
            src={require('../images/css.png')}
            alt="CSS"
          />
          <strong>
            <div>CSS</div>
          </strong>
        </div>
        <div className="skill">
          <img
            className="skills"
            src={require('../images/bootstrap.png')}
            alt="Bootstrap"
          />
          <strong>
            <div>Bootstrap</div>
          </strong>
        </div>
      </section>{/* End of Frontend */} 
      <br/><br/>
      
      <h4>Backend Development</h4>
      <section className="flex-container">
        <div className="skill">
          <img
            className="skills"
            src={require('../images/node.png')}
            alt="Node"
          />
          <strong>
            <div>Node.JS</div>
          </strong>
        </div>
        <div className="skill">
          <img
            className="skills"
            src={require('../images/mongo.png')}
            alt="Mongo"
          />
          <strong>
            <div>MongoDB</div>
          </strong>
        </div>

      </section>{/* end of Backend */}
      
      <br />
      <br />
      <h4>Creative Media</h4>
      <section className="flex-container">
        <div className="skill">
          <img
            className="skills"
            src={require('../images/illustrator.png')}
            alt="Illustrator"
          />
          <strong>
            <div>Illustrator</div>
          </strong>
        </div>
        <div>
          <img className="skills" src={require('../images/indesign.png')}></img>
          <strong>
            <div>InDesign</div>
          </strong>
        </div>
        <div className="skill">
          <img
            className="skills"
            src={require('../images/photoshop.png')}
            alt="Photoshop"
          />
          <strong>
            <div>Photoshop</div>
          </strong>
        </div>
        <div className="skill">
          <img
            className="skills"
            src={require('../images/premierpro.png')}
            alt="Premier Pro"
          />
          <strong>
            <div>Premier Pro</div>
          </strong>
        </div>
      </section>
    </>
  );
}
