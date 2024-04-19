import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useModeContext } from '../ModeContext'

const Headersection = ({ title, information }) => {
    const {mode} = useModeContext();

    return (
        <div><div className="container">
            <div className="card position-relative bg-main uppercard" style={{ top: "-15px" }}>
                <div className="card-body text-center">
                    <div className="row mx-0 mx-sm-4 mx-md-4 p-2">
                        <div className="col-12 text-center">
                            <h2 className="text-white fontlondrina">{title}</h2>
                            <p className="text-white mx-auto" style={{maxWidth:"600px"}}>{information}</p>
                            <div className={mode ?`left-air-icon position-absolute aniplane`:`left-air-icon position-absolute`}>
                                {mode && <FontAwesomeIcon icon={faPaperPlane} className="text-white-50 fa-2x" />}
                            </div>

                            <div className="air-icon position-absolute">
                                <FontAwesomeIcon icon={faPaperPlane} className="text-white-50 fa-2x" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div></div>
    )
}

export default Headersection