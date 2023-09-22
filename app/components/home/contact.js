import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faEnvelopeOpenText, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Contact() {
  return (
    <div className="contact-style-one-area overflow-hidden secondary default-padding">

        <div className="contact-shape">
            <img src="assets/img/shape/37.png" alt="Image Not Found" />
        </div>
       
        <div className="container">
            <div className="row align-center">

                <div className="contact-stye-one col-lg-5 mb-md-50 mb-xs-20">

                    <div className="contact-style-one-info">
                        <h2>Contact Information</h2>
                        <p>
                            Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.
                        </p>
                        <ul>
                            <li className="wow fadeInUp">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faPhoneAlt} fixedWidth/>
                                </div>
                                <div className="content">
                                    <h5 className="title">Hotline</h5>
                                    <a href="#">+4733378901</a>
                                </div>
                            </li>
                            <li className="wow fadeInUp" data-wow-delay="300ms">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth/>
                                </div>
                                <div className="info">
                                    <h5 className="title">Our Location</h5>
                                    <p>
                                        55 Main Street, The Grand Avenue 2nd Block, <br /> New York City
                                    </p>
                                </div>
                            </li>
                            <li className="wow fadeInUp" data-wow-delay="500ms">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faEnvelopeOpenText} fixedWidth/>
                                </div>
                                <div className="info">
                                    <h5 className="title">Official Email</h5>
                                    <a href="mailto:info@agrul.com.com">info@agrul.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="contact-stye-one col-lg-7 pl-60 pl-md-15 pl-xs-15">
                    <div className="contact-form-style-one">
                        <h5 className="sub-heading secondary">Have Questions?</h5>
                        <h2 className="heading">Send us a Massage</h2>
                        <form action="https://validthemes.net/site-template/consua/assets/mail/contact.php" method="POST" className="contact-form contact-form">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control" id="name" name="name" placeholder="Name" type="text"/>
                                        <span className="alert-error"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input className="form-control" id="email" name="email" placeholder="Email*" type="email"/>
                                        <span className="alert-error"></span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text"/>
                                        <span className="alert-error"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group comments">
                                        <textarea className="form-control" id="comments" name="comments" placeholder="Tell Us About Project *"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <button type="submit" name="submit" id="submit">
                                        <FontAwesomeIcon icon={faPaperPlane} fixedWidth/> Get in Touch
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-12 alert-notification">
                                <div id="message" className="alert-msg"></div>
                            </div>
                        </form>
                    </div>
                </div>

                

            </div>
        </div>
    </div>
  )
}

export default Contact