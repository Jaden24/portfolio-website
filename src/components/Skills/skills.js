import React from 'react';
import './skills.css';
// import UIDesign from '../../assets/ui-design.png';
// import webDesign from '../../assets/website-design.png';
// import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id = 'skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc"> the description of my myself: i'm a skilled..</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src="" alt="CompArch" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Computer Architecture</h2>
                    <p>This is a demo text, you can write your own content here.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src="" alt="DataStructureEx" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Data Structure and Algorithm</h2>
                    <p>This is a demo text, you can write your own content here.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src="" alt="InternEx" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Working as a intern</h2>
                    <p>This is a demo text, you can write your own content here.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
