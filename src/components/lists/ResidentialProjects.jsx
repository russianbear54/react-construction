import React from "react";
import { residentialProjects } from "../../constants";

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

const ResidentialProjects = () => {
  return (
    <div className="mx-auto flex flex-wrap flex-row justify-between w-[60%]  gap-3">
      {residentialProjects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default ResidentialProjects;

// border-dashed border-2 border-sky-500
