import React from 'react'
import './contact.css';
// import Walmart from '../../assets/walmart.png';
// import Adobe from '../../assets/walmart.png';
// import Microsoft from '../../assets/walmart.png';
// import Facebook from '../../assets/walmart.png';


const Contact = () => {
  return (
    <section id="contactPage">
        <div className="clients">
            <h1 className = "contactPageTitle">My things</h1>
            <p className = "clientDesc">
                I have the opportunity wor wwork 
            </p>
            <div classname = "clientImgs">
                <img src="" alt="" classname= "clientImg"/>
                <img src="" alt="" classname= "clientImg"/>
                <img src="" alt="" classname= "clientImg"/>
                <img src="" alt="" classname= "clientImg"/>

            </div>
        </div>

        <div className="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to reach out to me!</span>
            <form action="contactForm">
                <input type="text" className="name" placeholder = 'Your Name' />
                <input type="email" className="email" placeholder = 'Your Email'/>
                <textarea className = "msg" name="message" rows="5" placeholder = 'Your Message'></textarea>
                <button type = "submit" value = 'send' className="submitBtn">Submit</button>
                <div className = "links"></div>
                    <img src="" alt="" className="link" />
                    <img src="" alt="" className="link" />
                    <img src="" alt="" className="link" />
                    <img src="" alt="" className="link" />
            </form>
        </div>
    </section>
  )
}

export default Contact
