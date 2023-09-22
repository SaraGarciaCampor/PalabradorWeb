import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Header() {
  return (
    <header>
        <nav className="navbar secondary mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed white no-background">
            <div className="container d-flex justify-content-between align-items-center">            
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <a className="navbar-brand" href="index.html">
                        <img src="assets/img/logo-light-solid.png" className="logo logo-display" alt="Logo"/>
                        <img src="assets/img/logo-blue.png" className="logo logo-scrolled" alt="Logo"/>
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="navbar-menu">

                    <div className="collapse-header">
                        <img src="assets/img/logo-blue.png" alt="Logo" />
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                    
                    <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                        <li><a href="#about">About me</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#resources">Resources</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="attr-right">
                    <div className="attr-nav">
                        <ul>
                            <li className="button">
                                <a href="#">Get 20% off</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>   
            <div className="overlay-screen"></div>
        </nav>
    </header>
  )
}

export default Header