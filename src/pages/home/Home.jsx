/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import "./home.css"

const Home = () => {

  return (
    <section className="home section grid">
      <img src={Profile} alt='' className='home__img' />

      <div className="home__content">
        <div className="home__data">
          <h1 className='home__title'>
            <span>I'm Arunalu Bamunusinghe.</span> FullStack developer
          </h1>
          <p className='home__description'>
            I'm a Back-end developer & front-end developer forcused on
            creafting clean & user-friendly experiences,I am passionate about
            building excellent sofware that improves the lives of those around
            me.
          </p>

          <Link to='/about' className='button' >
            More About Me {''}
            <span className='button__icon'>
              <FaArrowRight />
            </span>

          </Link>
        </div>
      </div>

      <div className="color__block" ></div>
    </section>
  );
};

export default Home;
