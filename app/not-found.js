import React from 'react'

function not_found() {
  return (
    <div>
        <div class="breadcrumb-area bg-cover shadow dark text-center text-light" style={{backgroundImage: "url(assets/img/banner/10.jpg)"}}>
            <div class="breadcrum-shape">
                <img src="assets/img/shape/50.png" alt="Image Not Found" />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h1>Error Page</h1>
                        <ul class="breadcrumb">
                            <li><a href="#"><i class="fas fa-home"></i> Home</a></li>
                            <li>404</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="error-page-area default-padding text-center bg-cover">
        <div class="shape-left" style="background: url(assets/img/shape/44-left.png);"></div>
        <div class="shape-right" style="background: url(assets/img/shape/44-right.png);"></div>
        <div class="container">
            <div class="error-box">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <h1>404</h1>
                        <h2>Sorry Page Was Not Found!</h2>
                        <p>
                            Household shameless incommode at no objection behaviour. Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.
                        </p>
                        <a class="btn mt-20 btn-md btn-theme" href="index.html">Back to home</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default not_found