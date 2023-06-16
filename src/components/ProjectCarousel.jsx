import React from "react";
import { commercialProjects, residentialProjects, retailProjects } from "../constants";
import Carousel from "react-material-ui-carousel";
import { colors } from "../constants/index";
import { Typography, Card, CardMedia } from "@mui/material";

const Project = ({ type, location, year, image }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "27rem", bgcolor: colors.orange }}>
      <Typography color="white" variant="h5">
        {type}
      </Typography>
      <CardMedia component="img" sx={{ height: "20rem" }} src={image} />
      <Typography color="white" variant="h6">
        {location}
      </Typography>
      <Typography color="white" variant="h6">
        {year >= currentYear ? `To be completed in: ${year}` : `Completed in: ${year}`}
      </Typography>
    </Card>
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
    <Carousel animation="slide" sx={{ width: "40rem", backgroundColor: colors.green }}>
      {projectsList.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
