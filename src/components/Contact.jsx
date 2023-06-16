import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import SectionHeading from "./SectionHeading";
import { headings } from "../constants";
import craneFeet from "../assets/images/scenery/craneFeet.jpg";
import { colors } from "../constants";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <SectionHeading title={headings[3].title} description={headings[3].description} />
      <Container
        id="contact"
        maxWidth="md"
        sx={{
          backgroundImage: `url(${craneFeet})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: { lg: "65rem" },
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
          <Button type="submit" variant="contained" sx={{ backgroundColor: colors.orange }}>
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Contact;
