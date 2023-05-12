import React from "react";
import { commercialProjects } from "../../constants";

const Project = ({ name, location, year, image }) => {
  return (
    <div className="flex flex-col items-center ">
      <h1>{name}</h1>
      <img src={image} className="card" />
      <h2>{location}</h2>
      <h2>Year Comepleted: {year}</h2>
    </div>
  );
};

const CommercialProjects = () => {
  return (
    <div className="mx-[2rem] flex flex-wrap flex-row justify-between ">
      {commercialProjects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default CommercialProjects;
