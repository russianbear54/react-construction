import React, { useState } from "react";
import Button from "@mui/material/Button";
import { projectsPreview } from "../constants/index";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import BackGround from "../assets/videos/topView.mp4";
import ProjectCarousel from "../components/ProjectCarousel";
import SectionHeading from "./SectionHeading";
import { headings } from "../constants";

const ProjectPreview = ({ type, image }) => {
  const [modalOpen, setModalOpen] = useState(false);

  let component;

  if (type === "Residential") {
    component = <ProjectCarousel type="Residential" />;
  }
  if (type === "Commercial") {
    component = <ProjectCarousel type="Commercial" />;
  }
  if (type === "Retail") {
    component = <ProjectCarousel type="Retail" />;
  }

  return (
    <div className="flex md:flex-col md:mx-[1rem] md:items-center sm:flex-col sm:items-center">
      <img
        src={image}
        className="w-[40rem] h-[27rem] 2xl:w-[35rem] 2xl:h-[20rem] xl:w-[30rem] xl:h-[18rem] lg:w-[25rem] lg:h-[15rem] md:w-[20rem] md:h-[10rem] sm:w-[80%] sm:h-[100%] object-cover"
      />
      <p className="text-3xl text-black my-4">{type}</p>
      <Button variant="contained" onClick={() => setModalOpen(true)}>
        View Projects
      </Button>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", width: "70%" }}>
        <Sheet
          variant="outlined"
          sx={{
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}>
          <ModalClose
            variant="outlined"
            sx={{
              top: "calc(-1/4 * var(--IconButton-size))",
              right: "calc(-1/4 * var(--IconButton-size))",
              boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
              borderRadius: "50%",
              bgcolor: "background.body",
            }}
          />
          {component}
        </Sheet>
      </Modal>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <SectionHeading title={headings[1].title} description={headings[1].description} />
      <div id="projects" className="relative">
        <video src={BackGround} type="video/mp4" autoPlay muted loop playsInline className="w-full sm:hidden" />
        <div className="w-full flex xl:flex-row justify-center gap-[3rem]  top-1/3 sm:flex-col ">
          {projectsPreview.map((projectPreview) => (
            <ProjectPreview key={projectPreview.id} {...projectPreview} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
