import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../constants/index";

const SectionHeading = ({ title, description }) => {
  return (
    <Box sx={{ textAlign: "center", marginY: "5rem" }}>
      <Typography
        variant="h4"
        component="h2"
        fontWeight="italic"
        fontFamily="Roboto"
        color="white"
        mb={1}
        sx={{ background: colors.orange, transform: "skew(-20deg)", width: "20rem", margin: "auto" }}>
        {title}
      </Typography>
      <Typography variant="body1" color={colors.green}>
        {description}
      </Typography>
    </Box>
  );
};

export default SectionHeading;
