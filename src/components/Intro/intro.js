import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';
// import btnImg from '../../assets/hireme.png'
// import bg from '../../assets/image.png'

const Intro = () => {
  return (
    <section id = "intro">
        <div className = "introContent">
            <span className = "hello">Hello,</span>
            <span className = "introText">I'm <span className = "introName">Junki</span> <br />Junior Computer Science student</span>
            <p className = "introPara">Rose Hulman Institue of Technology</p>
            <Link><button className="btn"><img src="" alt=""/> Hire Me</button></Link>
        </div>
        <img src = "" alt = "" className = "bg" />

    </section>
  )
}

export default Intro;