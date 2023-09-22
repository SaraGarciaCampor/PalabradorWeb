import { faFacebookF, faLinkedinIn, faTwitter, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import some_image from "../../../public/assets/img/shape/38.png"
import logo_light from "../../../public/assets/img/logo-light-solid.png"

function Footer() {
  return (
    <footer className="bg-dark text-light">
        <div className="footer-shape">
            <div className="item bottom">
                <Image src={some_image} alt="Shape"/>
            </div>
        </div>
        <div className="container">
            <div className="f-items relative pt-70 pb-120 pt-xs-0 pb-xs-50">
                <div className="row">
                    <div className="col-lg-4 col-md-6 footer-item pr-50 pr-xs-15">
                        <div className="f-item about">
                            <Image className="logo" src={logo_light} alt="Logo" width={250}/>
                            <p>
                                Excellence decisively nay man twins impression maximum contrasted remarkably is perfect.
                            </p>
                            <div className="opening-hours">
                                <h5>Opening Hours</h5>
                                <ul>
                                    <li> 
                                        <div className="working-day">Monday – Sunday:</div>
                                        <div className="marker"></div>
                                        <div className="working-hour">2pm – 2pm</div>
                                    </li>
                                    <li>
                                        <div className="working-day">Sunday:</div>
                                        <div className="marker"></div>
                                        <div className="working-hour">Off Day</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 footer-item">
                        <div className="f-item link">
                            <h4 className="widget-title">Our Company</h4>
                            <ul>
                                <li>
                                    <a href="about-us.html">Compnay Profile</a>
                                </li>
                                <li>
                                    <a href="faq.html">Help Center</a>
                                </li>
                                <li>
                                    <a href="about-us.html">Career</a>
                                </li>
                                <li>
                                    <a href="pricing.html">Plans & Pricing</a>
                                </li>
                                <li>
                                    <a href="contact-us.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 footer-item">
                        <div className="f-item link">
                            <h4 className="widget-title">Our Services</h4>
                            <ul>
                                <li>
                                    <a href="services-details.html">Manage investment</a>
                                </li>
                                <li>
                                    <a href="services-details.html">Business planning</a>
                                </li>
                                <li>
                                    <a href="services-details.html">Financial advices</a>
                                </li>
                                <li>
                                    <a href="services-details.html">Tax strategy</a>
                                </li>
                                <li>
                                    <a href="services-details.html">Insurance strategy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 footer-item">
                        <h4 className="widget-title">Newsletter</h4>
                        <p>
                            Join our subscribers list to get the latest <br/> news and special offers.
                        </p>
                        <div className="f-item newsletter secondary">
                            <form action="#">
                                <input type="email" placeholder="Your Email" className="form-control" name="email"/>
                                <button type="submit"> Subscribe</button>  
                            </form>
                        </div>
                        <ul className="footer-social">
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faFacebookF} fixedWidth/>
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
                        <p>&copy; Copyright 2023. All Rights Reserved by <a href="#">validthemes</a></p>
                    </div>
                    <div className="col-lg-6 text-end">
                        <ul>
                            <li>
                                <a href="about-us.html">Terms</a>
                            </li>
                            <li>
                                <a href="about-us.html">Privacy</a>
                            </li>
                            <li>
                                <a href="contact-us.html">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer