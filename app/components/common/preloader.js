import React from 'react'

function Preloader() {
  return (
    <div id="preloader">
        <div id="consua-preloader" className="consua-preloader secondary">
            <div className="animation-preloader">
                <div className="spinner"></div>
                <div className="txt-loading">
                    <span data-text-preloader="A" className="letters-loading">
                        A
                    </span>
                    <span data-text-preloader="L" className="letters-loading">
                        L
                    </span>
                    <span data-text-preloader="F" className="letters-loading">
                        F
                    </span>
                    <span data-text-preloader="R" className="letters-loading">
                        R
                    </span>
                    <span data-text-preloader="E" className="letters-loading">
                        E
                    </span>
                    <span data-text-preloader="D" className="letters-loading">
                        D
                    </span>
                    <span data-text-preloader="O" className="letters-loading">
                        O
                    </span>
                </div>
            </div>
            <div className="loader">
                <div className="row">
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Preloader