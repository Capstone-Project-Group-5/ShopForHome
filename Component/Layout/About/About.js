import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";

const About = () => {
  const visitSite = () => {
    window.location = "https://github.com/Capstone-Project-Group-5";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="data:image/png;base64,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"
              alt="Founder"
            />
            <Typography>Group 5</Typography>
            <Button onClick={visitSite} color="primary">
              Portfolio wesbite
            </Button>
            <span>
              This is a MERN Stack Ecommerce wesbite made by Group 5.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
