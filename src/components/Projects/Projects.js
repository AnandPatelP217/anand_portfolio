import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards.js";
import "./Stylesheet/Projects.css";
import news from "../../images/healthportrait.png"
import project2 from "../../images/rail-netraportrait.png"
import project3 from "../../images/criminal-databaseportrail.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
      <hr/>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1><hr/>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px"  }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="Health Tracker – Health and Wellness"
              description="Developed a Health & Wellness Dashboard as frontend developer and API
              specialist. Integrated data, designed interfaces, provided insights,
              recommendations, progress tracking for user health goals."
              TechnologyUsed="MERN Stack"
              ghLink="https://github.com/AnandPatelP217/Health-tracking-system"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="Railway Monitoring and Management"
              description="Developed the Work Monitoring, Crowd Detection & Garbage Detection
              Models and leaded the team who developed mobile app that utilizes the existing
              CCTV network for Crowd Management, Crime Prevention, Cleanliness, and Work
              Monitoring using AI/ML."
              TechnologyUsed="Python , Deep Learning , Firebase , Flutter , Dart."

              ghLink="https://github.com/AnandPatelP217/Rail-Netraa"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="Criminal Database Management System"
              description="As the frontend developer for a Criminal Database Management System, I made
              it easy for law enforcement to find and use data."
              TechnologyUsed="HTML, CSS, JavaScript, PHP , MySQL."

              ghLink="https://github.com/AnandPatelP217/criminal_database"
              demoLink=""              
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
