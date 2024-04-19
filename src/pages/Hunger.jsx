import React from "react";
import Headersection from "../components/Headersection";
import Airoplanes from "../components/Airoplanes";

const Hunger = () => {
  return (
    <>
      <Headersection
        title="Paper Airplane Designs"
        information="A database of paper airplanes with easy to follow folding instructions, video tutorials and printable folding plans. Find the best paper airplanes that fly the furthest and stay aloft the longest. Learn how to make paper airplanes that will impress your friends."
      />
      <Airoplanes />
    </>
  );
};

export default Hunger;
