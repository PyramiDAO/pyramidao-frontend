import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

// BEM -> Block Element Modifier

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);




    return (

        <div className="pydao__navbar">
            <div className="pydao__navbar-links">
                <div className="pydao__navbar-links_logo">
                    <img src={logo} />
                </div>
                <div className="pydao__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#whatPYRAMIDAO">What is PyramiDao?</a></p>
                    <p><a href="#possibility">Docs</a></p>
                    <p><a href="#features">Forum</a></p>
                    <p><a href="#blog">Blog</a></p>
                </div>
            </div>
            <div className="pydao__navbar-sign">
                
                <button type="button">Open App</button>
            </div>
            <div className="pydao__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="pydao__navbar-menu_container scale-up-center">
                        <div className="pydao__navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#whatPYRAMIDAO">What is PyramiDao?</a></p>
                            <p><a href="#possibility">Docs</a></p>
                            <p><a href="#features">Forum</a></p>
                            <p><a href="#blog">Stats</a></p>
                        </div>
                        <div className="pydao__navbar-menu_container-links-sign">
                            
                            <button type="button">Open App</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;