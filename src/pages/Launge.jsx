import React from 'react'
import Headersection from '../components/Headersection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons'

const Launge = () => {
    return (
        <>
            <Headersection title="Paper Airplane Lounge" information="The lounge is where you can find a bunch of fun paper airplane activities and experiments. Learn how paper airplanes work." />

            <div className="container">
                <div className="row mt-4">
                    <div className="col-lg-12">
                        <div className="card rounded-0 h-100 shadow border-0 laungecard">
                            <div className="row">
                                <div className="col-lg-10">
                                    <div className="normal p-3">
                                        <p className="">Do you like these articles? Fold'NFly is a small independent website made by a passionate creator. By purchasing a Pilot's License you'll be supporting the creation of more great paper airplane content, and you'll also get these tangible benefits:</p>
                                        <ul className="ms-4">
                                            <li>Printable folding templates for every paper airplane design</li>
                                            <li>Downloadable games and activities</li>
                                            <li>No ads</li>
                                        </ul>

                                        <button className="btn btn-sm btn-primary">Get your pilot license <FontAwesomeIcon className="ms-1 small" style={{transform:'rotate(-45deg)'}} icon={faPlane}/></button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Launge