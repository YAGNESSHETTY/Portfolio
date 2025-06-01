import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CodeSync from "../../Assets/Projects/CodeSync.png";
import BannerShop from "../../Assets/Projects/BannerShop.png";
import ReactQuiz from "../../Assets/Projects/ReactQuiz.png";

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
              imgPath={BannerShop}
              isBlog={false}
              title="BannerShop Australia"
              description="Developed a Full Stack E-Commerce website with Javascript, PHP, Tailwind CSS and Magento for our Australia client."
              demoLink="https://www.bannershop.com.au/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CodeSync}
              isBlog={false}
              title="CodeSync Realtime Editor"
              description="Developed a real-time collaborative code editor to improve teamwork across remote teams. Implemented real-time chat functionality using WebSockets.io for seamless communication within the editor."
              ghLink="https://github.com/FUTURE-isHERE/Code-Sync-Updated"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ReactQuiz}
              isBlog={false}
              title="React Quiz"
              description="Build a React quiz app that fetches 15 questions per test from an API, includes a countdown timer, and displays the score at the end."
              ghLink="https://github.com/FUTURE-isHERE/React-Quiz-Mini-Project"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

