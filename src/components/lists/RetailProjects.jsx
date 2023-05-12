import React from "react";
import { retailProjects } from "../../constants";

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

const RetailProjects = () => {
  return (
    <div className="mx-[2rem] flex flex-wrap flex-row justify-between ">
      {retailProjects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
};

export default RetailProjects;
