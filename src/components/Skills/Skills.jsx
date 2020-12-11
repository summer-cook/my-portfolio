import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
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
        <Title title="Skills & Languages" />
        <Row className="about-wrapper">
          <Col md={4} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
            <p className="about-wrapper__info-text">
                  <h2>Front-End</h2><br/>
                      Javascript<br/>
                      React<br/>
                      HTML<br/>
                      CSS/SCSS<br/>
                </p>
            </Fade>
          </Col>
          <Col md={4} sm={12}>
            <Fade bottom duration={1000} delay={800} distance="30px">
            <p className="about-wrapper__info-text">
            <h2>Back-End</h2><br/>
                  
                  PostgresQL<br/>
                  Active Record<br/>
                  Rails<br/>
                  Ruby<br/>
                </p>
            </Fade>
          </Col>
          <Col md={4} sm={12}>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="about-wrapper__info-text">
            <h2>Web Design</h2><br/>
                  
                  Wordpress (Divi, Beaver Builder)<br/>
                  Shopify<br/>
                  Webflow<br/>
                  Squarespace<br/>
                </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;