import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../constants/index";

const SectionHeading = ({ title, description }) => {
  return (
    <Box sx={{ textAlign: "center", marginY: "5rem", width: "20rem", marginX: "auto", transform: "skew(-20deg)" }}>
      <Typography variant="h5" sx={{ fontSize: { xs: 27, sm: 35 } }} fontWeight="italic" fontFamily="revert-layer" color={colors.orange}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: { xs: 18, sm: 22 } }} fontFamily="revert-layer" color={colors.green} fontSize={20}>
        {description}
      </Typography>
    </Box>
  );
};

export default SectionHeading;
