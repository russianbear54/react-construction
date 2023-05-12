import React, { useState } from "react";
import Button from "@mui/material/Button";
import { projectsPreview } from "../constants/index";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import ResidentialProjects from "./lists/ResidentialProjects";
import CommercialProjects from "./lists/CommercialProjects";
import RetailProjects from "./lists/RetailProjects";
import BackGround from "../assets/videos/topView.mp4";
import Stack from "@mui/material/Stack";

const ProjectPreview = ({ name, image }) => {
  const [modalOpen, setModalOpen] = useState(false);

  let component;
  if (name === "Residential Projects") {
    component = <ResidentialProjects />;
  }
  if (name === "Commercial Projects") {
    component = <CommercialProjects />;
  }
  if (name === "Retail Projects") {
    component = <RetailProjects />;
  }

  return (
    <div className="flex flex-col gap-[3rem]">
      <img
        src={image}
        className="w-[40rem] h-[27rem] 2xl:w-[35rem] 2xl:h-[20rem] xl:w-[30rem] xl:h-[18rem] lg:w-[25rem] lg:h-[15rem] md:w-[20rem] md:h-[10rem] sm:w-[10rem] sm:h-[7rem] object-cover"
      />
      <p className="text-3xl text-white">{name}</p>
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
      <div className="relative">
        <video src={BackGround} type="video/mp4" autoPlay muted loop className="w-full" />
        <div className="w-full flex flex-row justify-center gap-[3rem] absolute top-1/3 ">
          {projectsPreview.map((projectPreview) => (
            <ProjectPreview key={projectPreview.id} {...projectPreview} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;

//border-dashed border-2 border-sky-500
