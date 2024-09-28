import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/page.png";
import emotion from "../../Assets/Projects/temperature.jpg";
import editor from "../../Assets/Projects/zing.jpg";
import chatify from "../../Assets/Projects/gym.jpg";
import suicide from "../../Assets/Projects/sephora.jpg";
import bitsOfCode from "../../Assets/Projects/rock.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Muscle Headquarter"
              description="The project involved designing and developing a website for a gym, focusing on creating a user-friendly interface and a visually appealing design built using HTML and CSS, with a focus on creating a responsive and mobile-friendly layout."
              ghLink="https://github.com/shrija-jha/Muscle-Headquarter"
              demoLink="https://shrija-jha.github.io/Muscle-Headquarter/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Rock Paper Scissors"
              description=" In this project, I developed a Rock Paper Scissors game using HTML, CSS and Javascript."
              ghLink="https://github.com/shrija-jha/rock-paper-scissors"
              demoLink="https://shrija-jha.github.io/rock-paper-scissors/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="zing mp3 music player"
              description="The Zing MP3 Music Player project is a web development endeavor that aimed to create a comprehensive online music player platform using HTML,CSS and Javascript."
              ghLink="https://github.com/shrija-jha/music_player"
              demoLink="https://shrija-jha.github.io/music_player/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Login/Signup Page"
              description="The project involved designing and developing a login and signup page, focusing on creating a user-friendly interface and a visually appealing design."
              ghLink="https://github.com/shrija-jha/Login-Signup-Page"
              demoLink="https://shrija-jha.github.io/Login-Signup-Page/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Sephora Cosmetics"
              description="he project involved designing and developing an e-commerce website for beauty products, focusing on creating a user-friendly interface and a visually appealing design."
              ghLink="https://github.com/shrija-jha/Sephora_Cosmetics"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Temperature Conversion"
              description="The project entailed crafting a temperature conversion website that prioritized an intuitive user experience and a visually stunning design."
              ghLink="https://github.com/shrija-jha/temperature-conversion"
              demoLink="https://shrija-jha.github.io/temperature-conversion/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
