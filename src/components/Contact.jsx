import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import SectionHeading from "./SectionHeading";
import { headings } from "../constants";
import craneFeet from "../assets/images/scenery/craneFeet.jpg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <SectionHeading title={headings[3].title} description={headings[3].description} />
      <div
        id="contact"
        className="flex flex-row justify-center"
        style={{
          backgroundImage: `url(${craneFeet})`,
          backgroundSize: "50%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "65rem",
        }}>
        <form onSubmit={handleSubmit} style={{ padding: "5rem" }}>
          <TextField label="Name" variant="filled" fullWidth value={name} onChange={(e) => setName(e.target.value)} margin="normal" />
          <TextField label="Email" variant="filled" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} margin="normal" />
          <TextField
            label="Message"
            variant="filled"
            fullWidth
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Contact;
