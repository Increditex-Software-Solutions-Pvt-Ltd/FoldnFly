import { faScissors, faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {PaperAirplanes} from '../Data/AiroplaneData';
import AiroplaneFilter from './AiroplaneFilter';

const Airoplanes = () => {

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState([]);
  const [useScissor, setUseScissor] = useState(null);

  const handleTypeChange =(type)=>{
     const updatedTypes = selectedTypes.includes(type) ? selectedTypes.filter((t)=>t !== type):[...selectedTypes,type];
     setSelectedTypes(updatedTypes);    
  }

  const handleDifficultyChange=(difficulty)=>{
       const updatedDifficulty = selectedDifficulty.includes(difficulty) ? selectedDifficulty.filter((d)=>d !== difficulty):[...selectedDifficulty,difficulty];
       setSelectedDifficulty(updatedDifficulty);
  }

  const handleScissorChange=(value)=>{
     setUseScissor(value);
  }

  

  const filterAirplanes = PaperAirplanes.filter((plane)=>{
      const matchesTypes = selectedTypes.length === 0 || 
      selectedTypes.some((type)=>plane.distance.toLowerCase().includes(type.toLowerCase()));


      const matchesDifficulty = selectedDifficulty.length === 0 ||
      selectedDifficulty.includes(plane.difficulty);

      const matchesScissor = useScissor === null ||
      (useScissor && plane.icon === 'scissors') ||
      (!useScissor && plane.icon === "noscissors")

      return matchesTypes && matchesDifficulty && matchesScissor;
  })

  const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return 'difficultyeasy'
      case "Medium":
        return 'difficultymedium'
      case "Hard":
        return 'difficultyhard'
      case "Expert":
        return 'difficultyexpert'
      default:
        return '';
    }
  }


  const navigate = useNavigate();

  return (
    <div>
      <section className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
                 <AiroplaneFilter selectedTypes={selectedTypes}
                 selectedDifficulty = {selectedDifficulty}
                 airoplane = {PaperAirplanes}
                 useScissor={useScissor}
                 onDifficultyChange={handleDifficultyChange}
                 onScissorchange = {handleScissorChange}
                  onTypeChange={handleTypeChange}/>
            </div>
            <div className="col-lg-10">
              <div className="row g-4" id="airocards">
                {filterAirplanes.map((plane, index) => (
                  <div className="col-lg-4" key={index} >
                    <div className="card position-relative airoplanecard rounded-0" style={{ cursor: 'pointer' }} onClick={() => navigate(`/plane/${plane.name}`)}>
                      <img src={`/img/transparent/${plane.airoplane}`} className="img-fluid airoplaneimg" alt="" />
                      <img src='/img/bgcard.png' className="img-fluid object-fit-cover" alt={plane.name} />
                      <span className="aironame x-big">{plane.name}</span>
                      {plane.icon==='scissors' && <span className="scissor">
                        <FontAwesomeIcon icon={faScissors} />
                      </span>}

                      <div className="tags">
                        <span className={`difficultylevel big ${getDifficultyClass(plane.difficulty)}`}>{plane.difficulty}</span>
                        <br />
                        <span className="distance">
                          <FontAwesomeIcon className="me-2" icon={faTag} />{plane.distance}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Airoplanes