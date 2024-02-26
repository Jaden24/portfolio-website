import React, {useRef} from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';
// import miso1 from '../../assets/miso1.png';
import miso2 from '../../assets/miso2.png';
// import Microsoft from '../../assets/walmart.png';
// import Facebook from '../../assets/walmart.png';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        const name = form.current['your_name'].value.trim();
        const email = form.current['your_email'].value.trim();
        const message = form.current['message'].value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        e.preventDefault();
    
        emailjs
          .sendForm('service_nyv4deb', 'template_npwp8ph', form.current, {
            publicKey: '5o51XMqKaNpE8Ana8',
          })
          .then(
            (result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent!');
            }
        )
        .catch((error) => {
            console.error('EmailJS Error:', error);
            alert('Failed to send email. Please check your template setup.');
        });
      };
  return (
    <section id="contactPage">
         <h1 className = "contactPageTitle">Internship</h1>
         <h2 class="title" className = "jobTitle">MISO Software Engineer Intern | June 2023 - Aug 2023</h2>

        <div className="client">


        <img src= {miso2} alt = "miso2" className="clientImg" />
        <div className="divider"></div>

        <div class="content">

            <p class="clientDesc"> 
                <ul>
                    <li>Used HTML/CSS/TypeScript and Kotlin.</li>
                    <li>Implemented Postman Automated Testing; Ensured Quality Assurance on REST APIs.</li>
                    <li>Collaborated on Frontend Development, utilized Angular framework to develop an Operator Interface(MISO Communication System) for operators and stakeholders.</li>
                    <li>Applied Istanbul Code Coverage Testing to promote code quality.</li>
                    <li>Participated in the SAFe team as an intern; followed the team level of the Agile framework.    </li>
                </ul>
               
            </p>
        </div>    
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
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder = 'Your Name' name = 'your_name'/>
                <input type="email" className="email" placeholder = 'Your Email' name='your_email'/>
                <textarea className = "msg" name="message" rows="5" placeholder = 'Your Message'></textarea>
                <button type = "submit" value = 'Send' className="submitBtn">Submit</button>
                <div className = "links">
                    {/* <img src="" alt="" className="link" />
                    <img src="" alt="" className="link" />
                    <img src="" alt="" className="link" />
                    <img src="" alt="" className="link" /> */}
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
