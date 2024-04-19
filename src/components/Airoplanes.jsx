import { faScissors, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PaperAirplanes } from "../Data/AiroplaneData";
import AiroplaneFilter from "./AiroplaneFilter";
import { useModeContext } from "../ModeContext";


const Airoplanes = () => {
  const { mode } = useModeContext();
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState([]);
  const [useScissor, setUseScissor] = useState(null);

  const handleTypeChange = (type) => {
    const updatedTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type];
    setSelectedTypes(updatedTypes);
  };

  const handleDifficultyChange = (difficulty) => {
    const updatedDifficulty = selectedDifficulty.includes(difficulty)
      ? selectedDifficulty.filter((d) => d !== difficulty)
      : [...selectedDifficulty, difficulty];
    setSelectedDifficulty(updatedDifficulty);
  };

  const handleScissorChange = (value) => {
    setUseScissor(value);
  };

  const filterAirplanes = PaperAirplanes.filter((plane) => {
    const matchesTypes =
      selectedTypes.length === 0 ||
      selectedTypes.some((type) =>
        plane.distance.toLowerCase().includes(type.toLowerCase())
      );

    const matchesDifficulty =
      selectedDifficulty.length === 0 ||
      selectedDifficulty.includes(plane.difficulty);

    const matchesScissor =
      useScissor === null ||
      (useScissor && plane.icon === "scissors") ||
      (!useScissor && plane.icon === "noscissors");

    return matchesTypes && matchesDifficulty && matchesScissor;
  });

  const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "difficultyeasy";
      case "Medium":
        return "difficultymedium";
      case "Hard":
        return "difficultyhard";
      case "Expert":
        return "difficultyexpert";
      default:
        return "";
    }
  };

  const navigate = useNavigate();

  return (
    <div>
      <section className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4">
              <AiroplaneFilter
                selectedTypes={selectedTypes}
                selectedDifficulty={selectedDifficulty}
                airoplane={PaperAirplanes}
                useScissor={useScissor}
                onDifficultyChange={handleDifficultyChange}
                onScissorchange={handleScissorChange}
                onTypeChange={handleTypeChange}
              />
            </div>
            <div className="col-lg-10 col-md-8 col-sm-8 mt-3">
              <div className="row g-4" id="airocards">
                {filterAirplanes.map((plane, index) => (
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4" key={index}>
                    <div
                      className={`${
                        mode
                          ? `kidCard position-relative card rounded-5 border-5 ${getDifficultyClass(
                              plane.difficulty
                            )}`
                          : "airoplanecard card position-relative rounded-0"
                      }`}
                      style={{ cursor: "pointer", overflow: "hidden" }}
                      onClick={() => navigate(`/plane/${plane.name}`)}
                    >
                      <img
                        src={`/img/transparent/${plane.airoplane}`}
                        className="img-fluid airoplaneimg"
                        alt=""
                      />
                      <img
                        src="/img/bgcard.png"
                        className={`
                          mode
                            ? "img-fluid object-fit-cover rounded-5"
                            : "img-fluid object-fit-cover"
                            bg-card`}
                        alt={plane.name}
                      />
                      <span className="aironame x-big m-2">{plane.name}</span>
                      {plane.icon === "scissors" && (
                        <span className="scissor m-2">
                          <FontAwesomeIcon icon={faScissors} />
                        </span>
                      )}
                      <div className="tags">
                        <span
                          className={
                            mode
                              ? `difficultylevel x-large ${getDifficultyClass(
                                  plane.difficulty
                                )}`
                              : `difficultylevel big ${getDifficultyClass(
                                  plane.difficulty
                                )}`
                          }
                        >
                          {plane.difficulty}
                        </span>
                        <br />
                        <span
                          className={mode ? `x-big distance` : `distance small`}
                        >
                          <FontAwesomeIcon className="me-2" icon={faTag} />
                          {plane.distance}
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
  );
};

export default Airoplanes;
