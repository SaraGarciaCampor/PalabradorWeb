import React from 'react'

function Footer() {
  return (
    <footer class="bg-dark text-light">
        <div class="footer-shape">
            <div class="item bottom">
                <img src="assets/img/shape/38.png" alt="Shape"/>
            </div>
            <div class="item">
                <img src="assets/img/shape/9.png" alt="Shape"/>
            </div>
        </div>
        <div class="container">
            <div class="f-items relative pt-70 pb-120 pt-xs-0 pb-xs-50">
                <div class="row">
                    <div class="col-lg-4 col-md-6 footer-item pr-50 pr-xs-15">
                        <div class="f-item about">
                            <img class="logo" src="assets/img/logo-light-solid.png" alt="Logo"/>
                            <p>
                                Excellence decisively nay man twins impression maximum contrasted remarkably is perfect.
                            </p>
                            <div class="opening-hours">
                                <h5>Opening Hours</h5>
                                <ul>
                                    <li> 
                                        <div class="working-day">Monday – Sunday:</div>
                                        <div class="marker"></div>
                                        <div class="working-hour">2pm – 2pm</div>
                                    </li>
                                    <li>
                                        <div class="working-day">Sunday:</div>
                                        <div class="marker"></div>
                                        <div class="working-hour">Off Day</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 footer-item">
                        <div class="f-item link">
                            <h4 class="widget-title">Our Company</h4>
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
                    <div class="col-lg-2 col-md-6 footer-item">
                        <div class="f-item link">
                            <h4 class="widget-title">Our Services</h4>
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
                    <div class="col-lg-4 col-md-6 footer-item">
                        <h4 class="widget-title">Newsletter</h4>
                        <p>
                            Join our subscribers list to get the latest <br/> news and special offers.
                        </p>
                        <div class="f-item newsletter secondary">
                            <form action="#">
                                <input type="email" placeholder="Your Email" class="form-control" name="email"/>
                                <button type="submit"> Subscribe</button>  
                            </form>
                        </div>
                        <ul class="footer-social">
                            <li>
                                <a href="#">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <p>&copy; Copyright 2023. All Rights Reserved by <a href="#">validthemes</a></p>
                    </div>
                    <div class="col-lg-6 text-end">
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