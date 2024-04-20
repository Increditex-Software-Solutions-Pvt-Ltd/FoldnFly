import React from 'react'
import { Runway } from '../Data/RunwayData'
import { useModeContext } from '../ModeContext'

const TipTrick = () => {
    const {mode} = useModeContext();
    return (
        <div>
            <div className="container">

                <div className="row mt-3 g-4">
                    {Runway.map((tip,index) => {
                        return (
                            <div className="col-lg-4 col-md-6 col-12" key={index}>
                                <div className={mode ? `card rounded-2 shadow h-100 mx-auto border-3 border-danger`:`card rounded-2 shadow h-100 mx-auto`} style={{overflow:"hidden"}}>

                                    <div className="card-header border-0 p-0">
                                        <img src={tip.runwayImg} className="img-fluid object-fit-cover" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{tip.title}</h5>
                                        <p className="text-dark">{tip.info}</p>
                                    </div>
                                </div>
                            </div>
                        )

                    })}


                </div>
            </div>
        </div>
    )
}

export default TipTrick