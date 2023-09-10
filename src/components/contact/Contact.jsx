import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineInstagram} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q0yksjs', 'template_82b0tmd"', form.current, 'qE64s7b4KhVIb9Rvk')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact' >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>muzamal503@gmail.com</h5>
            <a href="mailto:muzamal503@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          
          <article className="contact__option">
            <AiOutlineInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>@mzml_0</h5>
            <a href="https://www.instagram.com/mzml_0/" target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+92 3154237255</h5>
            <a href="https://api.whatsapp.com/send?phone=923154237255" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="10" placeholder='Your message here' required></textarea>
            <button type='submit' className='btn btn-primary'>Send message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact
