import React from 'react'

function Stats() {
  return (
    <div className="fun-factor-style-two-area">
        <div className="container">
            <div className="fun-factor-style-two-box">
                <div className="row align-center">
                    <div className="col-xl-4 col-md-4 item">
                        <div className="fun-fact">
                            <div className="counter">
                                <div className="timer" data-to="56" data-speed="2000">56</div>
                                <div className="operator">K</div>
                            </div>
                            <span className="medium">Clients satisfied.</span>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 item">
                        <div className="fun-fact">
                            <div className="counter">
                                <div className="timer" data-to="98" data-speed="2000">98</div>
                                <div className="operator">%</div>
                            </div>
                            <span className="medium">Añadir un dato cuantificable.</span>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 item">
                        <div className="fun-fact">
                            <div className="counter">
                                <div className="timer" data-to="25" data-speed="2000">30</div>
                                <div className="operator">+</div>
                            </div>
                            <span className="medium">Years of experience.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stats