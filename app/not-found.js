import React from 'react'
import shape from "../public/assets/img/shape/50.png"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

function not_found() {
  return (
    <div>
        <div className="breadcrumb-area bg-cover shadow dark text-center text-light" style={{backgroundImage: "url(assets/img/banner/10.jpg)"}}>
            <div className="breadcrum-shape">
                <Image src={shape} alt="Image Not Found" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h1>Error Page</h1>
                        <ul className="breadcrumb">
                            <li><Link href="/"><FontAwesomeIcon icon={faHome} fixedWidth/> Home</Link></li>
                            <li>404</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="error-page-area default-padding text-center bg-cover">
        <div className="shape-left" style={{background: "url(assets/img/shape/44-left.png)"}}></div>
        <div className="shape-right" style={{background: "url(assets/img/shape/44-right.png"}}></div>
        <div className="container">
            <div className="error-box">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1>404</h1>
                        <h2>Sorry Page Was Not Found!</h2>
                        <p>
                            Household shameless incommode at no objection behaviour. Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.
                        </p>
                        <Link className="btn mt-20 btn-md btn-theme" href="/">Back to home</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default not_found