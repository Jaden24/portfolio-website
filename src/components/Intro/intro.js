import React from 'react';
import './intro.css';
// import {Link} from 'react-scroll';
// import btnImg from '../../assets/hireme.png'
// import profile from '../../assets/profile.png'

const Intro = () => {
  return (
    <section id = "intro">
        <div className = "introContent">
            <span className = "hello">Hello,</span>
            <span className = "introText">I'm <span className = "introName">Junki</span> <br />Junior Computer Science student</span>
            <p className = "introPara"> at Rose Hulman Institue of Technology</p>
            {/* <Link><button className="btn"><img src="" alt=""/> Hire Me</button></Link> */}
        </div>
        <img src = "" alt = "profile" className = "bg" />

    </section>
  )
}

export default Intro;