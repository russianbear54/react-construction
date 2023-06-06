import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { services, headings } from "../constants";
import SectionHeading from "./SectionHeading";

const Service = ({ id, heading, text, image }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 750,
        width: 750,
        margin: "auto",
      }}>
      <CardMedia
        component="img"
        image={image}
        alt={id}
        sx={{
          height: 500,
          width: 500,
          objectFit: "cover",
          marginTop: "2rem",
        }}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5">{heading}</Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  return (
    <>
      <SectionHeading title={headings[0].title} description={headings[0].description} />
      <div id="services">
        <Grid container spacing={4}>
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
