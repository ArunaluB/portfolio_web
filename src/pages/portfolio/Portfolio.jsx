/* eslint-disable no-unused-vars */
import React from 'react';
import { portfolio as portfolioData } from '../../data';
import PortfolioItem from '../../components/portfolioItem/PortfolioItem';
import "./portfolio.css"

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>

      <div className="portfolio__container container grid">
        {portfolioData.map((item) => {
          return <PortfolioItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
