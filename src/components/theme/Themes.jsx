/* eslint-disable no-undef */
/* eslint-disable no-import-assign */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { themes } from '../../data'
import ThemeItem from './ThemeItem '
import { FaCog } from "react-icons/fa"
import { BsSun, BsMoon } from 'react-icons/bs'
import './themes.css'

const getStorageColor = () => {
    let color = 'hsl(19, 96%, 52%)';
    if (localStorage.getItem('color')) {
        color = localStorage.getItem('color');
    }
    return color;
};

const getStorageTheme = () => {
    let color = 'light-theme';
    if(localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
    return theme;
};



const Themes = () => {
    const [showSwitcher, setShowSwitcher] = useState(false);
    const [color, setColor] = useState(getStorageColor());
    const [theme, setTheme] = useState('light-theme');

    const changeColor = (color) => {
        setColor(color);
    };

    const toggleTheme = (color) => {
        if (theme === 'light-theme') {
            setTheme('dark-theme')
        } else {
            setTheme('light-theme');
        }
    };

    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color);
        localStorage.setItem('color', color);
    }, [color]);

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div>
            <div className={`${showSwitcher ? 'show-switcher' : ''} style__switcher`}>
                <div className='style__switcher-toggler'
                    onClick={() => setShowSwitcher(!showSwitcher)}
                >
                    <FaCog />
                </div>

                <div className='theme__toggler' onClick={toggleTheme}>
                    {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                </div>

                <h3 className='style__switcher-title'>Style Switcher</h3>
                <div className="style__switcher-items">
                    {themes.map((themes, index) => {
                        return <ThemeItem key={index} {...themes} changeColor={changeColor} />;
                    })}
                </div>

                <div className="style__switcher-close"
                    onClick={() => setShowSwitcher(!showSwitcher)}>
                    &times;</div>
            </div>
        </div>
    )
}

export default Themes