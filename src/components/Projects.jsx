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
import { colors } from "../constants/index";

const ProjectPreview = ({ type, image, id }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: { md: 750, sm: 650, xs: 400 }, margin: "auto" }}>
      <ImageButton type={type} id={id} image={image} onClick={() => setModalOpen(true)} />
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", width: "50%" }}>
        <Sheet
          variant="outlined"
          sx={{
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
            bgcolor: colors.green,
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
          <ProjectCarousel type={type} />
        </Sheet>
      </Modal>
    </Box>
  );
};

const Projects = () => {
  return (
    <>
      <SectionHeading title={headings[1].title} description={headings[1].description} />
      <div id="projects" className="relative flex justify-center items-center">
        <video src={BackGround} type="video/mp4" autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover" />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem", justifyContent: "center" }}>
          {projectPreviews.map((projectPreview) => (
            <ProjectPreview key={projectPreview.id} {...projectPreview} />
          ))}
        </Box>
      </div>
    </>
  );
};

export default Projects;
