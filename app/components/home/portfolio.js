import React from 'react'

function Portfolio() {
  return (
    <div className="software-overview-area default-padding bg-dark secondary text-light bg-cover" style={{backgroundImage: "url(assets/img/shape/banner-1.png)"}}>

        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="site-heading text-center secondary">
                        <h4 className="sub-heading">Experience</h4>
                        <h2 className="title"> Overview on different sectors experience </h2>
                    </div>
                </div>
            </div>
        </div>


        <div className="container">
            <div className="row">
                <div className="col-lg-4 pr-50 pr-md-15 pr-xs-15">

                    <div className="nav nav-tabs software-tab-navs" id="nav-tab" role="tablist">
                        <button className="nav-link" id="nav-id-1" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">
                            Technical
                            <span>01</span>
                        </button>
                        <button className="nav-link active" id="nav-id-2" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">
                            Research Collaborator
                            <span>02</span>
                        </button>
                        <button className="nav-link" id="nav-id-3" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false">
                            Literature
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
                                    <h3>Technical translation</h3>
                                    <p>
                                        I have extensive experience in website localisation and the translation of technical
                                        manuals, patents, advertising material, business correspondence, press releases,
                                        contracts, articles of association, diplomas, certificates, academic records and legal
                                        documents of all kinds.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade show active" id="tab2" role="tabpanel" aria-labelledby="nav-id-2">
                            <div className="soft-overview">
                                <img src="assets/img/dashboard/5.jpg" alt="Image not found"/>
                                <div className="overlay">
                                    <h3>Academic translation</h3>
                                    <p>
                                        For many years I have worked regularly as a scientific translator with research groups
                                        at the Universitat Rovira i Virgili.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="nav-id-3">
                                <div className="soft-overview">
                                <div className="soft-over">
                                    <div class="image-container">
                                        <img src="assets/img/books/estadistica.jpg" alt="Image not found"/>
                                    </div>
                                    <div class="image-container">
                                        <img src="assets/img/books/psicologia-positiva.jpg" alt="Image not found"/>
                                    </div>
                                    <div class="image-container">
                                        <img src="assets/img/books/biologia.jpg" alt="Image not found"/>
                                    </div>
                                    <div class="image-container">
                                        <img src="assets/img/books/hombres_negro.jpg" alt="Image not found"/>
                                    </div>
                                </div>
                                <div className="overlay">
                                <h3>Literary translation</h3>
                                        <p>
                                            Although literary translation is not my main activity, I have also translated several books.
                                        </p>
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