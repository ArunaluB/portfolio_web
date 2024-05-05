/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'; // Import SweetAlert library

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

import './contact.css';

const Contact = () => {
  const form = useRef();

  


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3gsocfs', 'template_hjdxklq', form.current, {
        publicKey: '1uFj43s1cWDnagEN1',
      })
      .then(
        () => {
          // If email sent successfully, show SweetAlert notification
          Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          // Reset the form after successful submission
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section className='contact section'>
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className='contact__container container grid'>
        <div className='contact__data'>
          <h3 className='contact__title'>Don't be Shy!</h3>

          <p className='contact__description'>
            Let's start a collaborative journey where my
            skills and achievements can make a
            meaningful impact on your goals. I look forward to
            connecting with you and exploring how we can
            achieve success together
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />

              <div>
                <span className='info__title'>Mail me</span>
                <h4 className='info__desc'>Arunalubamunusinghe75@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />

              <div>
                <span className='info__title'>Call me</span>
                <h4 className='info__desc'>0772187484</h4>
              </div>
            </div>

          </div>

          <div className='contact__socials'>
            <a href='https://www.facebook.com/sasindu.nanayakkara.98?mibextid=ZbWKwL' className='contact__social-link'>
              <FaFacebookF />
            </a>
            <a href='https://github.com/ArunaluB' className='contact__social-link'>
              <FaGithub />
            </a>
            <a href='https://www.youtube.com/@nanayakkarabamunusinghe' className='contact__social-link'>
              <FaYoutube />
            </a>
            <a href='www.linkedin.com/in/arunalu-bamunusinghe' className='contact__social-link'>
              <FaLinkedin />
            </a>

          </div>
        </div>

        <form className='contact__form' ref={form} onSubmit={sendEmail}>
          <div className='form__input-group'>
            <div className="form__input-div">
              <input
                type="text"
                placeholder='Your Name'
                name='to_name'
                className="form__control" />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder='Your Email'
                name='from_email'
                className="form__control" />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder='Your Subject'
                name="from_subject"
                className="form__control" />
            </div>


          </div>
          <div className="form__input-div">
            <textarea
            name="message"
              placeholder='Your Message'
              className='form__control textarea'></textarea>
          </div>

          <button className='button' value="Send">
            Send Message
            <span className='button__icon contact__button-icon'>
              <FiSend />
            </span>
          </button>
        </form>

      </div>


      <footer className="copyright-section">
        <div className="container">
          <p>&copy; 2023 Arunalu.com. All Rights Reserved. | Designed by <span className='span'> Arunalu Bamunusinghe</span> </p>
        </div>
      </footer>

    </section>
  );
};

export default Contact;
