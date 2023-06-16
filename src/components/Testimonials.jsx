import React from "react";
import { testimonials } from "../constants";
import { Card, CardContent, Typography, Avatar, Box, Icon } from "@mui/material";
import SectionHeading from "./SectionHeading";
import { headings } from "../constants";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { colors } from "../constants/index";

const StarRating = ({ rating }) => {
  let stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<StarIcon style={{ color: colors.green }} key={i} />);
  }
  if (rating % 1 !== 0) {
    stars.push(<StarHalfIcon style={{ color: colors.green }} key={Math.floor(rating)} />);
  }
  return <div>{stars}</div>;
};

const TestimonialCard = ({ testimonial, name, designation, company, image, rating }) => {
  return (
    <Card sx={{ width: "25rem", height: "15rem" }}>
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
        <StarRating rating={rating} />
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
      <div id="testimonials" className="flex lg:flex-row 12PMP:flex-col items-center justify-evenly gap-[1rem]">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </>
  );
};

export default Testimonials;
