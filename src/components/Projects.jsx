import React, { useState } from "react";
import Button from "@mui/material/Button";
import { projectPreviews } from "../constants/index";
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
    <div className="flex md:flex-col md:mx-[1rem] md:items-center sm:mx-0 sm:flex-col sm:items-center 12PMP:flex-col ">
      <img
        src={image}
        className="w-[40rem] h-[27rem] 2xl:w-[35rem] 2xl:h-[20rem] xl:w-[30rem] xl:h-[18rem] lg:w-[25rem] lg:h-[15rem] md:w-[25rem] md:h-[12rem] sm:h-[60%] object-cover 12PMP:h-[10rem]"
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
      <div id="projects" className="relative h-screen">
        <video src={BackGround} type="video/mp4" autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col lg:flex-row justify-center items-center gap-[6rem] sm:gap-[1rem] z-10">
          {projectPreviews.map((projectPreview) => (
            <ProjectPreview key={projectPreview.id} {...projectPreview} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
