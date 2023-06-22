import React, { useEffect, useState } from "react";
import BackGround from "../assets/videos/worksite4.mp4";
import { motion } from "framer-motion";
import { styled } from "@mui/system";
import StandingForExcellence from "../assets/logo/StandingForExcellence.svg";
import Since2001 from "../assets/logo/Since2001.svg";

const Motto = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  maxWidth: "300px",
  alignSelf: "center",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "250px",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "250px",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "450px",
  },
}));

const Home = () => {
  return (
    <>
      <div id="home">
        <video src={BackGround} type="video/mp4" autoPlay muted className="w-full" />
        <motion.div
          className="absolute lg:top-[15%] lg:left-[25%] md:left-[3%] md:top-[15%] 12PMP:top-[10%] 12PMLS:top-[22%]"
          initial={{ x: "-300%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}>
          <Motto src={StandingForExcellence} alt="excellence" />
        </motion.div>
        <motion.div
          className="absolute lg:bottom-[10%] lg:right-[25%] md:bottom-[60%] md:right-[10%] 12PMP:bottom-[72%]"
          initial={{ x: "350%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}>
          <Motto src={Since2001} alt="Since 2001" />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
