import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useModeContext } from '../ModeContext'

const Instructions = ({ paperplane }) => {

    const {mode} = useModeContext();
    const allButlastInstructions = paperplane.instructions.slice(0, -1);
    const lastInstruction = paperplane.instructions[paperplane.instructions.length - 1];


    if (!paperplane) {
        return <div className="text-center">Airplane not found</div>;
    }
    return (
        <div className="container">
            <div className={mode ? `card rounded-0 shadow border-3 border-danger`:`card rounded-0 shadow`}>
                <div className="card-body text-center p-4">

                    <div className="row">
                        <h3 className="text-dark">Paper Airplane <FontAwesomeIcon icon={faPaperPlane} />  Folding Instructions</h3>
                        <div className="col-md-11 m-auto">
                            <div className="row g-4 mt-3 d-flex justify-content-center">
                                {
                                    allButlastInstructions.map((instruction, index) => {
                                        return (
                                            <div className="col-lg-4 col-sm-6 col-12">
                                                <div className="card rounded-0 stepscard h-100">
                                                    <div className="card-header p-0 overflow-hidden">
                                                        <img src={instruction.step} className="img-fluid object-fit-cover" alt={`Step ${index + 1}`} />
                                                    </div>
                                                    <div className="card-body">
                                                        <p>{instruction.stepDesc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>

                    <hr className="border-dark border-1 my-3" />

                    <h5 className="text-dark my-2">Final Paper Airplane Design</h5>
                    <div className="row pt-4">
                        <div className="col-md-7 m-auto">
                            <div className="card rounded-0 border-0">
                                <div className="card-header p-0 overflow-hidden">
                                    <img src={lastInstruction.step} className="img-fluid object-fit-cover" alt="" />
                                </div>
                                <div className="card-body">
                                    <p className="fs-5">{lastInstruction.stepDesc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instructions