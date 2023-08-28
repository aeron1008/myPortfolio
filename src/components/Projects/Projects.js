import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import colors from "../../Assets/Projects/colors.png";
import thankyou from "../../Assets/Projects/thankyou.png";
import tetris from "../../Assets/Projects/tetris.png";
import snusme from "../../Assets/Projects/snusme.png";
import cookapp from "../../Assets/Projects/cookapp.png";
import softpoint from "../../Assets/Projects/softpoint.png";
import brokernear from "../../Assets/Projects/brokernear.png";
import bitcoin from "../../Assets/Projects/bitcoin-gold.png";
import pattern from "../../Assets/Projects/pattern.png";
import quickcurrencyconverter from "../../Assets/Projects/quickcurrencyconverter.png";
import quizapp from "../../Assets/Projects/quiz-app.png";
import whether from "../../Assets/Projects/react-weather-app.png";
import mediagalaxy from "../../Assets/Projects/mediagalaxy.png";

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
              imgPath={snusme}
              isBlog={false}
              title="SnusME e-commerce"
              description="E-commerce website template made with MERN Stack."
              ghLink="https://github.com/white01312/cook-app"
              demoLink="https://yalandr.github.io/cook-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cookapp}
              isBlog={false}
              title="Cook-app"
              description="Multi-page website template made with Vue Js and Pinia."
              ghLink="https://github.com/white01312/cook-app"
              demoLink="https://yalandr.github.io/cook-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brokernear}
              isBlog={false}
              title="Brokernear"
              description="Multi-page website template made with Html, Css and Javascript."
              ghLink="https://github.com/white01312/brokernear"
              demoLink="https://yalandr.github.io/brokernear/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tetris}
              isBlog={false}
              title="Panda Tetris"
              description="Multi-page website template made with Javascript."
              ghLink="https://github.com/white01312/JS-Tetris"
              demoLink="https://yalandr.github.io/JS-Tetris/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={colors}
              isBlog={false}
              title="Color theme"
              description="Multi-page website template made with Vue Js."
              ghLink="https://github.com/white01312/colors-constructor "
              demoLink="https://yalandr.github.io/colors-constructor/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={softpoint}
              isBlog={false}
              title="Softpoint"
              description="Multi-page website template made with html, css and javascript."
              ghLink="https://github.com/white01312/softpoint"
              demoLink="https://yalandr.github.io/softpoint/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitcoin}
              isBlog={false}
              title="Bitcoin Gold"
              description="Web Page builded with HTML, CSS, Javascript,Splide Js."
              ghLink="https://github.com/white01312/bitcoin-gold"
              demoLink="https://yalandr.github.io/bitcoin-gold/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pattern}
              isBlog={false}
              title="Pattern"
              description="Web Page builded with HTML, CSS, Javascript."
              ghLink="https://github.com/white01312/pattern "
              demoLink="https://yalandr.github.io/pattern/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quickcurrencyconverter}
              isBlog={false}
              title="Currency Converter"
              description="Web Page builded with Javascript, Rest Api."
              ghLink="https://github.com/white01312/quick-currency-converter "
              demoLink="https://yalandr.github.io/quick-currency-converter/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizapp}
              isBlog={false}
              title="Quiz-app"
              description="Web Page builded with HTML, CSS, Javascript, Local Storage."
              ghLink="https://github.com/white01312/quiz-app "
              demoLink="https://yalandr.github.io/quiz-app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whether}
              isBlog={false}
              title="Whether App"
              description="Web Page builded with React Js, Rest Api."
              ghLink="https://github.com/white01312/react-weather-app "
              demoLink="https://yalandr.github.io/react-weather-app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mediagalaxy}
              isBlog={false}
              title="Mediagalaxy"
              description="Web Page builded with HTML, CSS, Javascript, JQuery."
              ghLink="https://github.com/white01312/ "
              demoLink="https://mediagalaxy.uk/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thankyou}
              isBlog={false}
              title="Thank you"
              description="Web Page builded with HTML, CSS, Javascript, Local Storage."
              ghLink="https://github.com/white01312/thankyou "
              demoLink="https://yalandr.github.io/thankyou/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
