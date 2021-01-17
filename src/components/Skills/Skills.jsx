import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const Skills = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="skills">
      <Container>
        <Title title="Skills" />
        <Row className="skills-wrapper">
          <Col md={4} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
            <p className="skills-wrapper__info-text">
                  <h2><b>Front-End</b></h2><br/>
                      Javascript<br/>
                      React<br/>
                      Bootstrap/Reactstrap<br/>
                      HTML<br/>
                      CSS/SCSS<br/>
                </p>
            </Fade>
          </Col>
          <Col md={4} sm={12}>
            <Fade bottom duration={1000} delay={800} distance="30px">
            <p className="skills-wrapper__info-text">
            <h2><b>Back-End</b></h2><br/>
                  
                  PostgresQL<br/>
                  Active Record<br/>
                  Rails<br/>
                  Ruby<br/>
                </p>
            </Fade>
          </Col>
          <Col md={4} sm={12}>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="skills-wrapper__info-text">
            <h2><b>Web Design</b></h2><br/>
                  
                  Wordpress (Divi, Beaver Builder)<br/>
                  Wix<br/>
                  Shopify<br/>
                  Webflow<br/>
                  Squarespace<br/>
                </p>
            </Fade>
          </Col>
        </Row>
        <div className="mt-5 mt-xs-sm-md-0"></div>
        <Row className="skills-wrapper">
          <Col md={4} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
            <p className="skills-wrapper__info-text">
                  <h2><b>UI, Content, & Graphic Design</b></h2><br/>

                  Figma<br/>
                  Adobe Photoshop,<br/>
                  Indesign,<br/>
                  & Illustrator<br/>
                  Canva
                </p>
            </Fade>
          </Col>
          <Col md={4} sm={12}>
            <Fade bottom duration={1000} delay={800} distance="30px">
            <p className="skills-wrapper__info-text">
            <h2><b>Testing & Version Control</b></h2><br/>
                  
                  Jest<br/>
                  Rspec<br/>
                  Git<br/>
                </p>
            </Fade>
          </Col>
          <Col md={4} sm={12}>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="skills-wrapper__info-text">
            <h2><b>Marketing</b></h2><br/>
                
                  Branding
                  Email Template Design<br/>
                  Hubspot HubL Development<br/>
                  Hubspot CRM Automation<br/>
                </p>
            </Fade>
          </Col>
          </Row>
      </Container>
    </section>
  );
};

export default Skills;