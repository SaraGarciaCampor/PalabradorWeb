'use client'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Testimonials() {

  return (
    <div className="testimonial-style-one-area secondary insurance default-padding">
        <div className="container">
            <div className="row align-center">

                <div className="col-lg-4">
                    <div className="testimonial-thumb">
                        <div className="thumb-item">
                            <img src="assets/img/illustration/5.png" alt="illustration" />
                            <div className="mini-shape">
                                <img src="assets/img/shape/19-blue.png" alt="illustration" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-7 offset-lg-1">
                    <Swiper
                    loop={true}
                    freeMode={true}
                    grabCursor={true}
                    spaceBetween={50}
                    autoplay={true}
                    centeredSlides={true}
                    >
                        <SwiperSlide>
                            <div className="testimonial-style-one">
                                <div className="item">
                                    <div className="content">
                                        <div className="rating">
                                            <FontAwesomeIcon icon={faStar} fixedWidth/>
                                            <FontAwesomeIcon icon={faStar} fixedWidth/>
                                            <FontAwesomeIcon icon={faStar} fixedWidth/>
                                            <FontAwesomeIcon icon={faStar} fixedWidth/>
                                            <FontAwesomeIcon icon={faStar} fixedWidth/>
                                        </div>
                                        <h2>The best service ever</h2>
                                        <p>
                                            “Targetingconsultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering to the point.”
                                        </p>
                                    </div>
                                    <div className="provider">
                                        <i className="flaticon-quote"></i>
                                        <div className="info">
                                            <h4>Matthew J. Wyman</h4>
                                            <span>Senior Consultant</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-style-one">
                                <div className="item">
                                    <div className="content">
                                        <div className="rating">
                                            <FontAwesomeIcon icon={faStar} fixedWidth/>
                                            <FontAwesomeIcon icon={faStar} fixedWidth/>
                                            <FontAwesomeIcon icon={faStar} fixedWidth/>
                                            <FontAwesomeIcon icon={faStar} fixedWidth/>
                                            <FontAwesomeIcon icon={faStar} fixedWidth/>
                                        </div>
                                        <h2>Awesome Business opportunities</h2>
                                        <p>
                                            “Consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering to the point another pointing go here.”
                                        </p>
                                    </div>
                                    <div className="provider">
                                        <i className="flaticon-quote"></i>
                                        <div className="info">
                                            <h4>Anthom Bu Spar</h4>
                                            <span>Marketing Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials