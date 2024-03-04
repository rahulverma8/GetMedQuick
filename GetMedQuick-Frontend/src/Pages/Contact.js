import React from "react";
import "../Styles/Contact.css"
import ContactImage from "../Assets/bg-1.jpg";

const Contact = () => {
  return (
    <div id="Contact" className="contact">
      <img className="leftside" src={ContactImage} alt="Contact-food"/>
      <div className="rightside">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" type="text" placeholder="Enter Your Name" />
          <label htmlFor="email">Email</label>
          <input name="name" type="email" placeholder="Example@gmail.com" />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="7"
            placeholder="Enter Your Message"
          ></textarea>
          <button className="send-btn" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
