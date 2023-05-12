import React from "react";
import { testimonials } from "../constants";
// import TestimonialCard from "material-testimonial-card";

const TestimonialCard = ({ testimonial, name, designation, company, image }) => {
  return (
    <div className="w-[25rem] h-[20rem] flex flex-col justify-around items-center bg-slate-300">
      <img src={image} className="h-20 w-20 object-cover rounded-full" />
      <p>{testimonial}</p>
      <p>{name}</p>
      <p>{designation}</p>
      <p>{company}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="flex flex-row justify-center gap-[1rem] mt-[10rem] mb-[20rem]">
      {testimonials.map((testimonial) => (
        <TestimonialCard
          name={testimonial.name}
          key={testimonial.id}
          image={testimonial.image}
          testimonial={testimonial.testimonial}
          company={testimonial.company}
          designation={testimonial.designation}
        />
      ))}
    </div>
  );
};

export default Testimonials;
