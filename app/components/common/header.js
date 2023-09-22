import React from 'react'

function Header() {
  return (
    <header>
        <nav className="navbar secondary mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed white no-background">
            <div className="container d-flex justify-content-between align-items-center">            
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i className="fa fa-bars"></i>
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
                            <i className="fa fa-times"></i>
                        </button>
                    </div>
                    
                    <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle active" data-toggle="dropdown" >Home</a>
                            <ul className="dropdown-menu">
                                <li><a href="index.html">Consulting Business</a></li>
                                <li><a href="index-2.html">Corporate Business</a></li>
                                <li><a href="marketing-agency.html">Marketing Agency</a></li>
                                <li><a href="insurance.html">Insurance</a></li>
                                <li><a href="solar-energy.html">Solar Energy</a></li>
                                <li><a href="software-landing.html">Software Landing</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Pages</a>
                            <ul className="dropdown-menu">
                                <li><a href="about-us.html">About Us</a></li>
                                <li><a href="team.html">Team</a></li>
                                <li><a href="team-details.html">Team Details</a></li>
                                <li><a href="pricing.html">Pricing</a></li>
                                <li><a href="faq.html">FAQ</a></li>
                                <li><a href="contact-us.html">Contact Us</a></li>
                                <li><a href="404.html">Error Page</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="project.html" className="dropdown-toggle" data-toggle="dropdown" >Projects</a>
                            <ul className="dropdown-menu">
                                <li><a href="project.html">Project style one</a></li>
                                <li><a href="project-details.html">Project Details</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Services</a>
                            <ul className="dropdown-menu">
                                <li><a href="services.html">Services Version One</a></li>
                                <li><a href="services-2.html">Services Version Two</a></li>
                                <li><a href="services-details.html">Services Details</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Blog</a>
                            <ul className="dropdown-menu">
                                <li><a href="blog-standard.html">Blog Standard</a></li>
                                <li><a href="blog-with-sidebar.html">Blog With Sidebar</a></li>
                                <li><a href="blog-2-colum.html">Blog Grid Two Colum</a></li>
                                <li><a href="blog-3-colum.html">Blog Grid Three Colum</a></li>
                                <li><a href="blog-single.html">Blog Single</a></li>
                                <li><a href="blog-single-with-sidebar.html">Blog Single With Sidebar</a></li>
                            </ul>
                        </li>
                        <li><a href="contact-us.html">contact</a></li>
                    </ul>
                </div>

                <div className="attr-right">
                    <div className="attr-nav">
                        <ul>
                            <li className="button">
                                <a href="#">Get Free Trial</a>
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