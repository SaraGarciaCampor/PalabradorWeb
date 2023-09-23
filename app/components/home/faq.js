import React from 'react'

function Faq() {
    return (
        <div class="faq-area bg-gray default-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 faq-style-one dark pl-50 pl-md-15 pl-xs-15">

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="site-heading text-center secondary">
                                        <h4 className="sub-heading">Resources</h4>
                                        <h2 className="title"> Online Resources </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>
                            The Internet is an inexhaustible source of information, although not always reliable.
                            Here are some resources that may be useful to translation professionals and Internet
                            users in general.
                        </p>
                        <div class="accordion" id="faqAccordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Spanish
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                        <div class="blog-area blog-grid">
                                            <div class="blog-item-box">
                                                <div class="row">
                                                    <div class="col-xl-4 col-md-6 single-item">
                                                        <div class="blog-style-one">
                                                            <div class="thumb">
                                                                <a href="#"><img src="assets/img/blog/4.jpg" alt="Thumb" /></a>
                                                            </div>
                                                            <div class="info">
                                                                <h3>
                                                                    <a href="https://dle.rae.es/" target="_blank">Diccionario de la Real Academia Española de la Lengua</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-md-6 single-item">
                                                        <div class="blog-style-one">
                                                            <div class="thumb">
                                                                <a href="https://www.rae.es/espanol-al-dia" target="_blank"><img src="assets/img/blog/5.jpg" alt="Thumb" /></a>
                                                            </div>
                                                            <div class="info">
                                                                <h4>
                                                                    <a href="https://www.rae.es/dpd/" target="_blank">Diccionario Panhispánico de Dudas </a>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Catalan
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                    <div class="accordion-body">
                                        <div class="blog-area blog-grid">
                                            <div class="blog-item-box">
                                                <div class="row">
                                                    <div class="col-xl-4 col-md-6 single-item">
                                                        <div class="blog-style-one">
                                                            <div class="thumb">
                                                                <a href="#"><img src="assets/img/blog/4.jpg" alt="Thumb" /></a>
                                                            </div>
                                                            <div class="info">
                                                                <h3>
                                                                    <a href="https://www.diccionari.cat/#" target="_blank">Gran Diccionari de la Llengua Catalana</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-md-6 single-item">
                                                        <div class="blog-style-one">
                                                            <div class="thumb">
                                                                <a href="https://www.rae.es/espanol-al-dia" target="_blank"><img src="assets/img/blog/5.jpg" alt="Thumb" /></a>
                                                            </div>
                                                            <div class="info">
                                                                <h4>
                                                                    <a href="https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html" target="_blank">Optimot, consultes lingüístiques</a>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-md-6 single-item">
                                                        <div class="blog-style-one">
                                                            <div class="thumb">
                                                                <a href="#"><img src="assets/img/blog/6.jpg" alt="Thumb" /></a>
                                                            </div>
                                                            <div class="info">
                                                                <h3>
                                                                    <a href="https://www.termcat.cat/ca" target="_blank">
                                                                        Centre de terminología catalana
                                                                    </a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        English
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                    <div class="accordion-body">
                                        <div class="blog-area blog-grid">
                                            <div class="blog-item-box">
                                                <div class="row">
                                                    <div class="col-xl-4 col-md-6 single-item">
                                                        <div class="blog-style-one">
                                                            <div class="thumb">
                                                                <a href="#"><img src="assets/img/blog/4.jpg" alt="Thumb" /></a>
                                                            </div>
                                                            <div class="info">
                                                                <h3>
                                                                    <a href="https://www.merriam-webster.com/" target="_blank">Merriam Webster</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-md-6 single-item">
                                                        <div class="blog-style-one">
                                                            <div class="thumb">
                                                                <a href="https://www.rae.es/espanol-al-dia" target="_blank"><img src="assets/img/blog/5.jpg" alt="Thumb" /></a>
                                                            </div>
                                                            <div class="info">
                                                                <h4>
                                                                    <a href="https://www.collinsdictionary.com/es/diccionario/ingles-espanol" target="_blank">Collins Unabridged Spanish Dictionary</a>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-md-6 single-item">
                                                        <div class="blog-style-one">
                                                            <div class="thumb">
                                                                <a href="#"><img src="assets/img/blog/6.jpg" alt="Thumb" /></a>
                                                            </div>
                                                            <div class="info">
                                                                <h3>
                                                                    <a href="https://www.urbandictionary.com/" target="_blank">
                                                                        Urban Dictionary
                                                                    </a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-md-6 single-item">
                                                        <div class="blog-style-one">
                                                            <div class="thumb">
                                                                <a href="#"><img src="assets/img/blog/7.jpg" alt="Thumb" /></a>
                                                            </div>
                                                            <div class="info">
                                                                <h4>
                                                                    <a href="http://www.slangcity.com/" target="_blank">American Slang</a>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        German
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                    <div class="accordion-body">
                                        <div class="blog-area blog-grid">
                                            <div class="blog-item-box">
                                                <div class="row">
                                                    <div class="col-xl-4 col-md-6 single-item">
                                                        <div class="blog-style-one">
                                                            <div class="thumb">
                                                                <a href="#"><img src="assets/img/blog/4.jpg" alt="Thumb" /></a>
                                                            </div>
                                                            <div class="info">
                                                                <h3>
                                                                    <a href="https://www.dwds.de/" target="_blank">Digitales Wörterbuch der deutschen Sprache</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-md-6 single-item">
                                                        <div class="blog-style-one">
                                                            <div class="thumb">
                                                                <a href="https://www.rae.es/espanol-al-dia" target="_blank"><img src="assets/img/blog/5.jpg" alt="Thumb" /></a>
                                                            </div>
                                                            <div class="info">
                                                                <h4>
                                                                    <a href="https://wortschatz.uni-leipzig.de/de" target="_blank">Wortschatz Universität Leipzig</a>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-md-6 single-item">
                                                        <div class="blog-style-one">
                                                            <div class="thumb">
                                                                <a href="#"><img src="assets/img/blog/6.jpg" alt="Thumb" /></a>
                                                            </div>
                                                            <div class="info">
                                                                <h3>
                                                                    <a href="https://www.redensarten-index.de/suche.php" target="_blank">
                                                                        Redensarten-Index
                                                                    </a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFive">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Other Resources
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                    <div class="accordion-body">
                                        <div class="blog-area blog-grid">
                                            <div class="blog-item-box">
                                                <div class="row">
                                                    <div class="col-xl-4 col-md-6 single-item">
                                                        <div class="blog-style-one">
                                                            <div class="thumb">
                                                                <a href="#"><img src="assets/img/blog/4.jpg" alt="Thumb" /></a>
                                                            </div>
                                                            <div class="info">
                                                                <h3>
                                                                    <a href="https://www.rae.es/espanol-al-dia" target="_blank">Servicio de consultas lingüísticas</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-md-6 single-item">
                                                        <div class="blog-style-one">
                                                            <div class="thumb">
                                                                <a href="https://www.rae.es/espanol-al-dia" target="_blank"><img src="assets/img/blog/5.jpg" alt="Thumb" /></a>
                                                            </div>
                                                            <div class="info">
                                                                <h4>
                                                                    <a href="https://www.fundeu.es/" target="_blank">Fundación del Español Urgente</a>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-md-6 single-item">
                                                        <div class="blog-style-one">
                                                            <div class="thumb">
                                                                <a href="#"><img src="assets/img/blog/6.jpg" alt="Thumb" /></a>
                                                            </div>
                                                            <div class="info">
                                                                <h3>
                                                                    <a href="https://www.rae.es/dpd/ayuda/paises-y-capitales-con-sus-gentilicios" target="_blank">
                                                                        Lista de países, capitales y gentilicios
                                                                    </a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-md-6 single-item">
                                                        <div class="blog-style-one">
                                                            <div class="thumb">
                                                                <a href="#"><img src="assets/img/blog/7.jpg" alt="Thumb" /></a>
                                                            </div>
                                                            <div class="info">
                                                                <h4>
                                                                    <a href="https://www.electropedia.org/" target="_blank">Electrotechnical Vocabulary</a>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default Faq