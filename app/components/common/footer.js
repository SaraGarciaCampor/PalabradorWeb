import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Year from './year'

function Footer() {
    
  return (
    <footer className="bg-dark text-light">
        <div className="footer-shape">
            <div className="item bottom">
                <img src="assets/img/shape/38.png" alt="Shape"/>
            </div>
            <div className="item">
                <img src="assets/img/shape/9.png" alt="Shape"/>
            </div>
        </div>
        <div className="container">
            <div className="f-items relative pt-70 pb-120 pt-xs-0 pb-xs-50">
                <div className="row">
                    <div className="col-lg-8 col-md-6 footer-item pr-50 pr-xs-15">
                        <div className="f-item about">
                            <img className="logo" src="assets/img/logo-light-solid.png" alt="Logo"/>
                            <p>
                                Over 25 years experience in translating technical, scientific, legal, journalistic and advertising documents.
                            </p>
                            <div className="opening-hours">
                                <h5>Opening Hours</h5>
                                <ul>
                                    <li> 
                                        <div className="working-day">Monday – Friday:</div>
                                        <div className="marker"></div>
                                        <div className="working-hour">2 pm – 8 pm</div>
                                    </li>
                                    <li>
                                        <div className="working-day">Saturday - Sunday:</div>
                                        <div className="marker"></div>
                                        <div className="working-hour">Off Days</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 footer-item">
                        <h4 className="widget-title">Newsletter</h4>
                        <p>
                            Social Media
                        </p>
                        <ul className="footer-social">
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faFacebookF} fixedWidth/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/algarsword/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} fixedWidth/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faLinkedinIn} fixedWidth/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                         <Year />
                    </div>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer