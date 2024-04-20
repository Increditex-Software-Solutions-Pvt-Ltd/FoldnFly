import React from 'react'
import { useModeContext } from '../ModeContext'

const Downloadprint = ({ paperplane }) => {
  const {mode} = useModeContext();
  
  return (
    <div className="container">
      <div className={mode ? `card rounded-0 shadow border-3 border-danger`:`card rounded-0 shadow`}>
        <div className="card-body text-center p-4">

          <div className="row">
            <h3 className="text-dark">Printable Folding Instructions</h3>
            <div className="col-md-10 m-auto">
              <p className="text-dark mt-3" style={{ fontSize: '16px' }}>These beautiful, easy to follow, paper airplane folding instructions can be downloaded and printed as many times as you want. Simply follow the printed instructions and fold along the indicated lines to make a perfect paper airplane, every time.</p>

              <div className="row d-flex justify-content-between mt-4">
                {
                  paperplane.downloadprint.map((print) => {
                    return (
                      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="h-100 w-100">
                          <img src={print.print} className="img-fluid border border-dark" style={{ height: "250px" }} alt="" />
                        </div>
                      </div>
                    )
                  })
                }
              </div>

              <div className="text-center mt-5">
                <button className="btn btn-primary">Download & Print</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Downloadprint