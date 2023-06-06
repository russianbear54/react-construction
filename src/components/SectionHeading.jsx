import React from "react";
import { Box, Typography } from "@mui/material";

const SectionHeading = ({ title, description }) => {
  return (
    <Box sx={{ textAlign: "center", marginY: "5rem" }}>
      <Typography variant="h4" component="h2" fontWeight="bold" mb={1} sx={{ background: "#db7a0a" }}>
        {title}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {description}
      </Typography>
    </Box>
  );
};

export default SectionHeading;
