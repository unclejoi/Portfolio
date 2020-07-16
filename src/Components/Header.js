import React, { useState } from 'react';
import {BrowserRouter as Router } from 'react-router-dom'
import { Link } from 'react-scroll';



export const Header = (props) => {


    const openPage = (pageName) => {
        console.log(pageName)
        document.getElementById(`page${pageName}`).style.width = "100%"
    }


    return (
        <>
            <Router>
                <div className="menu">
                    <div id="topnav" className={'topnav display'}>
                        <Link  spy={true} smooth={true} duration={500} offset={-200} to="home" className="active" id="home" >
                            <span style={{ marginRight: "20px" }}>
                                Home
                            </span>
                            <span style={{ float: "right" }}>
                                <i className="fas fa-home"></i>
                            </span>
                        </Link>
                        <Link  spy={true} smooth={true} duration={500} offset={-200} to="home" className="active" id="skills"  onClick={() => openPage(1)}>
                            <span style={{ marginRight: "20px" }}>
                                Skills
                            </span>
                            <span style={{ float: "right" }}>
                                <i className="fas fa-tasks"></i>
                            </span>
                        </Link>
                        <Link spy={true} smooth={true} duration={500} offset={0} to="skills" id="project"   onClick={() => openPage(2)}>
                            <span style={{ marginRight: "20px" }}>
                                Projects
                            </span>
                            <span style={{ float: "right" }}>
                                <i className="fas fa-folder"></i>
                            </span>
                        </Link>
                        <Link spy={true} smooth={true} duration={500} offset={0} to="skills" id="contact" onClick={() => openPage(3)}>
                            <span style={{ marginRight: "20px" }}>
                                Contact
                            </span>
                            <span style={{ float: "right" }}>
                                <i className="fas fa-address-card"></i>
                            </span>
                        </Link>
                    </div>
                </div>

            </Router>
        </>
    )
}

export default Header