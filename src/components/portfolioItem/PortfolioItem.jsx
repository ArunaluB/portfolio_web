/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Close from "../../assets/close.svg";
import { FiExternalLink } from 'react-icons/fi';

const PortfolioItem = ({ img, title, details }) => {
    const [model, setModal] = useState(false);

    const toggleModel = () => {
        setModal(!model);
    }

    const openGitHubRepo = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="portfolio__item">
            <img src={img} alt='' className="portfolio__img" />

            <div className="portfolio__hover" onClick={toggleModel}>
                <h3 className="portfolio__title"> {title} </h3>
            </div>

            {model && (
                <div className="portfolio__model">
                    <div className="portfolio__model-content">
                        <img src={Close} alt='' className='model__close' onClick={toggleModel} />

                        <h3 className="model__title"> {title} </h3>

                        <ul className="model__list grid">
                            {details.map(({ icon, title, desc, github }, index) => {
                                return (
                                    <li className="model__item" key={index}>
                                        <span className="item__icon"> {icon} </span>

                                        <div>
                                            <span className="item__title"> {title} </span>
                                            {title === 'Preview : ' ? (
                                                <span className="item__details" onClick={() => openGitHubRepo(desc)}>
                                                    {desc} <FiExternalLink />
                                                </span>
                                            ) : (
                                                <span className="item__details"> {desc} </span>
                                            )}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>

                        <img src={img} alt='' className='model__img' />
                    </div>
                </div>
            )}
        </div>
    )
}

export default PortfolioItem;
