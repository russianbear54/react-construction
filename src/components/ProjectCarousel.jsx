import React from "react";
import { commercialProjects, residentialProjects, retailProjects } from "../constants";
import Carousel from "react-material-ui-carousel";

const Project = ({ type, location, year, image }) => {
  return (
    <div className="flex flex-col items-center ">
      <h1>{type}</h1>
      <img src={image} className="h-[40rem] md:h-[25rem] sm:h-[20rem]" />
      <h2>{location}</h2>
      <h2>Year Completed: {year}</h2>
    </div>
  );
};

const ProjectCarousel = ({ type }) => {
  let projectsList;
  if (type === "Residential") {
    projectsList = residentialProjects;
  }
  if (type === "Commercial") {
    projectsList = commercialProjects;
  }
  if (type === "Retail") {
    projectsList = retailProjects;
  }

  return (
    <Carousel animation="slide" sx={{ width: "75vw", height: "auto" }}>
      {projectsList.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
