import React from 'react';
import './skills.css';
import learner from '../../assets/learner.png';
import challenge from '../../assets/challenge.png';
import teamwork from '../../assets/teamwork.png';

const Skills = () => {
  return (
    <section id = 'skills'>
        <span className="skillTitle">Who Am I</span>
        <span className="skillDesc">I am a driven and ambitious Computer Science student at Rose-Hulman Institute of Technology, passionate about delving into the intricacies of software development, tackling challenging problems, and continually expanding my expertise in the field.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src= {learner} alt="learner" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Passionate Learner</h2>
                    <p>Enthusiastic junior computer science student deeply committed to expanding my knowledge and skills in programming languages, algorithms, and software development practices.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src= {challenge} alt="challenge" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Problem Solver</h2>
                    <p>Proactive problem solver with a knack for dissecting complex problems and devising innovative solutions. Dedicated to applying computer science principles to real-world challenges.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src= {teamwork} alt="teamwork" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Collaborative Team Member</h2>
                    <p> Eager to contribute my expertise and collaborate on impactful initiatives within the field of computer science. I believe high-quality outcomes are from collaborating with peers and professionals with strong communication skill and teamwork.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills