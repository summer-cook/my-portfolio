import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Head from './head'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const FourOhFour = () => {
  return (
    <>
      <Head />
      <section id="hero" className="jumbotron">
        <Container>
          <Fade bottom duration={1000} delay={500} distance="30px">
            <h1 className="hero-title text-center">
              Sorry, this path does not exist{' '}
              <span role="img" aria-label="emoji">
                😞
              </span>
            </h1>
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" to="/">
                Go back
              </Link>
            </p>
          </Fade>
        </Container>
      </section>
    </>
  );
};

export default FourOhFour;
