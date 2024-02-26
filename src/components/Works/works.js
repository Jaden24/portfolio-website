import React from 'react';
import './works.css';

import geneticAlgo from '../../assets/geneticAlgo.png';
import mygym from '../../assets/mygym.png';
// import Project3 from '../../assets/portfolio-1.png';
// import Project4 from '../../assets/portfolio-1.png';
// import Project5 from '../../assets/portfolio-1.png';
// import Project6 from '../../assets/portfolio-1.png';



const Works = () => {
  return (
    <section id='works'>
        <h1 className="worksTitle">My Projects</h1>
        <h2 className="title">MYGYM Community Web Development | Aug 2023</h2>

        <div className="projectRow">
          <div className="project">
            <img src={mygym} alt="mygym" className="projectImg" />
            <div className="divider"></div>
            <div className="content">
              <p className="projectDesc">
                <ul>
                  <li>Developed a website using HTML/CSS/JavaScript, and Firebase enhancing accessibility for users by sharing GYM workouts or tips in structuralized categories.</li>
                  <li>Designed UI and flow with Figma to organize the mocks and project features.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <h2 className="title">Genetic Algorithm Project | Oct 2022 - Nov 2022</h2>


        <div className="projectRow">
          <div className="project">
            <img src={geneticAlgo} alt="geneticAlgo" className="projectImg" />
            <div className="divider"></div>
            <div className="content">
              <p className="projectDesc">
                <ul>
                  <li>Used JAVA OO Design Principle created an evolution simulator.</li>
                  <li>Implemented Genetic Algorithm's various fitness function, changes of evolution and diversity</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className="worksImgs">
          <img src="" alt="" className="worksImg" />
          <img src="" alt="" className="worksImg" />
          <img src="" alt="" className="worksImg" />
          <img src="" alt="" className="worksImg" />
          <img src="" alt="" className="worksImg" />
          <img src="" alt="" className="worksImg" />
        </div>
        <button className="workBtn">See More</button>
    </section>
  );
}

export default Works;