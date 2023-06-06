import React from "react";
import { testimonials } from "../constants";
// import TestimonialCard from "material-testimonial-card";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import SectionHeading from "./SectionHeading";
import { headings } from "../constants";

const TestimonialCard = ({ testimonial, name, designation, company, image }) => {
  return (
    <Card sx={{ width: "25rem", height: "20rem" }}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar sx={{ width: 80, height: 80 }} src={image} alt={name} />
          <Box ml={2}>
            <Typography variant="h6" gutterBottom>
              {name}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {designation}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {company}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1" paragraph>
          "{testimonial}"
        </Typography>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  return (
    <>
      <SectionHeading title={headings[2].title} description={headings[2].description} />
      <div id="testimonials" className="flex flex-row justify-around gap-[1rem]">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </>
  );
};

export default Testimonials;
