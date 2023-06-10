import React, { useState } from "react";
import { projectPreviews } from "../constants/index";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import BackGround from "../assets/videos/topView.mp4";
import ProjectCarousel from "../components/ProjectCarousel";
import SectionHeading from "./SectionHeading";
import { headings } from "../constants";
import ImageButton from "./ImageButton";
import Box from "@mui/material/Box";

const ProjectPreview = ({ type, image, id }) => {
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
      <ImageButton type={type} id={id} image={image} onClick={() => setModalOpen(true)} />

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
      <div id="projects" className="relative h-screen flex justify-center items-center">
        <video src={BackGround} type="video/mp4" autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover" />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem", minWidth: 600, width: "100%", justifyContent: "center" }}>
          {projectPreviews.map((projectPreview) => (
            <ProjectPreview key={projectPreview.id} {...projectPreview} />
          ))}
        </Box>
      </div>
    </>
  );
};

export default Projects;
