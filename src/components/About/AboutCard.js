import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sinchana L </span>
            from <span className="purple"> Chikamagalur, India.</span>
            <br />I am a frontend developer with experience of 2 years in building and manufacturing responsive web applications using HTML, CSS, javascript and React.Js. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sinchana</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
