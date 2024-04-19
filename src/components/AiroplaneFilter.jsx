import React,{useEffect, useState} from 'react'

const AiroplaneFilter = ({airoplane,selectedTypes,onTypeChange,selectedDifficulty,onDifficultyChange,onScissorchange,useScissor}) => {
 
  const [count, setCount] = useState(airoplane.length);

  const CalculateCount=()=>{
    const filteredAirplanes = airoplane.filter((plane)=>{
      let typecount = selectedTypes.length === 0 || plane.distance.includes(selectedTypes[0]) || plane.distance.includes(selectedTypes[1])|| plane.distance.includes(selectedTypes[2])|| plane.distance.includes(selectedTypes[3])
      
   
        const difficultycount = selectedDifficulty.length === 0 || selectedDifficulty.includes(plane.difficulty);

        let scissorcount;
        if(useScissor=== null){
          scissorcount = plane.icon ;
        }
        else if(useScissor){
          scissorcount = plane.icon === 'scissors'
        }
        else{
          scissorcount = plane.icon==='noscissors' ;
        }
        
        return typecount && difficultycount && scissorcount;
    });

    setCount(filteredAirplanes.length)
  }

  useEffect(()=>{
     CalculateCount();
  },[selectedTypes,selectedDifficulty,useScissor]);

  return (
    <div className="card rounded-0 border-0 bg-white shadow sidebox position-sticky top-0">
                <div className="card-body p-2">
                  <span className="text-dark fw-semibold big">Search Airplanes</span>
                  <span className="text-secondary small d-block">{count} out of {airoplane.length}</span>

                  <div className="mt-4">
                    <h6 className="text-dark fw-semibold small">Type</h6>

                    <div className="form-check">
                      <input className="form-check-input shadow-none" type="checkbox"
                      checked={selectedTypes.includes('distance')}
                      onChange={()=>{
                        onTypeChange('distance')
                        }} value="" id="distance" />
                      <label className="form-check-label big" htmlFor="flexCheckDefault">
                        Distance
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input shadow-none" type="checkbox" value="" id="timealoft" onChange={()=>{
                        onTypeChange('time aloft')
                        }}  checked={selectedTypes.includes('time aloft')}/>
                      <label className="form-check-label big" htmlFor="flexCheckDefault">
                        Time Aloft
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input shadow-none" type="checkbox" value="" id="acrobic"
                      onChange={()=>{
                        onTypeChange('acrobatic')
                        }} checked={selectedTypes.includes('acrobatic')}/>
                      <label className="form-check-label big" htmlFor="flexCheckDefault">
                        Acrobatic
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input shadow-none" type="checkbox" value="" id="decorative" onChange={()=>{
                        onTypeChange('decorative')
                        }} checked={selectedTypes.includes('decorative')}/>
                      <label className="form-check-label big" htmlFor="flexCheckDefault">
                        Decorative
                      </label>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6 className="text-dark fw-semibold small">Difficulty</h6>

                    <div className="form-check">
                      <input className="form-check-input shadow-none" type="checkbox" value="" checked={selectedDifficulty.includes('Easy')} onChange={()=>onDifficultyChange('Easy')} id="easy" />
                      <label className="form-check-label big" htmlFor="flexCheckDefault">
                        Easy
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input shadow-none" type="checkbox" value="" checked={selectedDifficulty.includes('Medium')} onChange={()=>onDifficultyChange('Medium')} id="medium" />
                      <label className="form-check-label big" htmlFor="flexCheckDefault">
                        Medium
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input shadow-none" type="checkbox" value="" id="hard" checked={selectedDifficulty.includes('Hard')} onChange={()=>onDifficultyChange('Hard')} />
                      <label className="form-check-label big" htmlFor="flexCheckDefault">
                        Hard
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input shadow-none" type="checkbox" value="" checked={selectedDifficulty.includes('Expert')} onChange={()=>onDifficultyChange('Expert')} id="expert" />
                      <label className="form-check-label big" htmlFor="flexCheckDefault">
                        Expert
                      </label>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6 className="text-dark fw-semibold small">Scissors</h6>

                    <select className="form-select form-select-sm shadow-none" value={useScissor=== null ? 'Whatever' :useScissor ?'Yes Scissors' :'No Scissors'} onChange={(e)=>{
                        const value = e.target.value;
                        if (value === 'Yes Scissors') {
                            onScissorchange(true);
                          } else if (value === 'No Scissors') {
                            onScissorchange(false);
                          } else {
                            onScissorchange(null);
                          }
                    }}>
                      <option value="No Scissors">No Scissors</option>
                      <option value="Yes Scissors">Yes Scissors</option>
                      <option value="Whatever" selected>Whatever</option>
                    </select>
                  </div>
                </div>

              </div>
  )
}

export default AiroplaneFilter