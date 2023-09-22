import React from 'react'

function Portfolio() {
  return (
    <div className="software-overview-area default-padding bg-dark secondary text-light bg-cover" style={{backgroundImage: "url(assets/img/shape/banner-1.png)"}}>

        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="site-heading text-center secondary">
                        <h4 className="sub-heading">Software Overview</h4>
                        <h2 className="title">Quick Software Overview</h2>
                    </div>
                </div>
            </div>
        </div>


        <div className="container">
            <div className="row">
                <div className="col-lg-4 pr-50 pr-md-15 pr-xs-15">

                    <div className="nav nav-tabs software-tab-navs" id="nav-tab" role="tablist">
                        <button className="nav-link" id="nav-id-1" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">
                            Collaboration
                            <span>01</span>
                        </button>
                        <button className="nav-link active" id="nav-id-2" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">
                            Design & Technology
                            <span>02</span>
                        </button>
                        <button className="nav-link" id="nav-id-3" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false">
                            Generate Customize
                            <span>03</span>
                        </button>
                    </div>
                </div>


                <div className="col-lg-8">
                    <div className="tab-content software-tab-content" id="nav-tabContent">

                        <div className="tab-pane fade" id="tab1" role="tabpanel" aria-labelledby="nav-id-1">
                            <div className="soft-overview">
                                <img src="assets/img/dashboard/4.jpg" alt="Image not found"/>
                                <div className="overlay">
                                    <h3>Collaboration with customers</h3>
                                    <p>
                                        Bndulgence diminution so discovered apartments. Are off under folly percenta wrote cause her way spite. Plan upon.
                                    </p>
                                    <a href="#"><i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade show active" id="tab2" role="tabpanel" aria-labelledby="nav-id-2">
                            <div className="soft-overview">
                                <img src="assets/img/dashboard/5.jpg" alt="Image not found"/>
                                <div className="overlay">
                                    <h3>Software Design & Technology Prepare</h3>
                                    <p>
                                        Bndulgence diminution so discovered apartments. Are off under folly percenta wrote cause her way spite. Plan upon.
                                    </p>
                                    <a href="#"><i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="nav-id-3">
                            <div className="soft-overview">
                                <img src="assets/img/dashboard/6.jpg" alt="Image not found"/>
                                <div className="overlay">
                                    <h3>Final Customization for the product launch</h3>
                                    <p>
                                        Bndulgence diminution so discovered apartments. Are off under folly percenta wrote cause her way spite. Plan upon.
                                    </p>
                                    <a href="#"><i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio