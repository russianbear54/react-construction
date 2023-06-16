import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Container } from "@mui/material";
import { services, headings } from "../constants";
import SectionHeading from "./SectionHeading";
import { colors } from "../constants/index";

const Service = ({ id, heading, text, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        objectFit: "cover",
        width: { lg: "35rem", sm: "20rem" },
        height: { lg: "35rem", sm: "20rem" },
        position: "relative",
        overflow: "hidden",
        backgroundColor: colors.green,
        color: "white",
        margin: "auto",
      }}>
      <Typography variant="h5">{heading}</Typography>
      <CardMedia
        component="img"
        image={image}
        alt={id}
        sx={{
          marginTop: "1rem",
          width: { sm: "15rem", lg: "31rem" },
          height: { sm: "15rem", lg: "31rem" },
          filter: isHovered ? "grayscale(100%)" : "none",
          transition: "background-color 0.3s ease",
        }}
      />
      <CardContent
        sx={{
          textAlign: "center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: isHovered ? "#fff" : "transparent",
        }}>
        <Typography variant="h5">{text}</Typography>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  return (
    <>
      <SectionHeading title={headings[0].title} description={headings[0].description} />
      <div id="services">
        <Grid container spacing={3} sx={{ width: { lg: "50vw" }, marginX: "auto" }}>
          {services.map((service) => (
            <Grid item key={service.id} xs={12} sm={6} md={6} lg={6}>
              <Service {...service} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Services;
