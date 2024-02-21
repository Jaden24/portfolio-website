import React from 'react';
import './works.css';
// import Project1 from '../../assets/portfolio-1.png';
// import Project2 from '../../assets/portfolio-1.png';
// import Project3 from '../../assets/portfolio-1.png';
// import Project4 from '../../assets/portfolio-1.png';
// import Project5 from '../../assets/portfolio-1.png';
// import Project6 from '../../assets/portfolio-1.png';



const Works = () => {
  return (
    <section id='works'>
        <h2 className="workstitle">My Project</h2>
        <span className="worksDesc">Here is my projects</span>
        <div className = "worksImgs">
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

export default Works
