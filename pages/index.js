import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
// import styles from '../styles/Home.module.css'
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Collage from "../components/collage/Collage";
// import Collage from "../components/collage/Collage";
import Footer from "../components/Footer";
import Nav from "../components/navbar/NavLayout";
import Testimonials from "../components/Testimonials";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";
// import Vector from "../public/startup-image.png"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Nav />
      <div>
        <Container fluid className="body">
          <Row className="header">
            <Col className="info">
              <h1>E-Cell IIT BHU</h1>
              <h2>
                {"Accelerate Your"}
                <br />
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Ideation")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Innovation")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Execution")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Incubation")
                      .pauseFor(1000)
                      .deleteAll()
                      .start();
                  }}
                />
                {/* <br /> */}
                {"Journey!"}
              </h2>

              <p>
                Welcome to the entrepreneurship community of IIT BHU where we
                ideate, innovate and incubate the future innovations of the
                century!
              </p>
              <Button variant="info" className="get-started">
                Get Started !
              </Button>
            </Col>
            <Col className="image-section">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_ewvhihmc.json"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </Col>
          </Row>
          <Row className="who-are-we">
            <Col className="info waw">
              <h1>Who are we?</h1>
              <p>
                E-Cell IIT BHU is an institute body run by the students of IIT
                (BHU) Varanasi devoted to acting as a symbiotic link between the
                entrepreneurs of E-Cell and the existing startup ecosystem as
                well as acting as a hub where all the startups can meet
                ,collaborate and innovate!
              </p>
              <Button variant="dark" className="learn-more">
                Learn more about E-Cell &rarr;
              </Button>
              <Row className="reach">
                <Col>
                  <h3 className="reach-num">50000+</h3>
                  <p className="reach-info">overall social reach!</p>
                </Col>
                <Col>
                  <h3 className="reach-num">108</h3>
                  <p className="reach-info">startups supported till date!</p>
                </Col>
              </Row>
            </Col>
            <Col className="image-section">
              <dotlottie-player
                src="https://assets7.lottiefiles.com/dotlotties/dlf10_wpar4she.lottie"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></dotlottie-player>
            </Col>
          </Row>
          <Row>
            <Collage></Collage>
          </Row>
          <Row className="what-we-do info">
            <h1>What we do?</h1>
            <p>
              {`Through our vision of "Learn, Build and Scale" we implement
              various initiatives and events in IIT BHU to foster the
              entrepreneurial minds and create a culture of enthralling startups
              bound for success!`}
            </p>
            <Row className="card-container">
              <Card className="card">
                <Card.Body>
                  <lottie-player
                    src="https://assets8.lottiefiles.com/packages/lf20_gomzks5q.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                  ></lottie-player>
                  <Card.Title>Learn</Card.Title>
                  <Card.Text>
                    {`Learn  Through our Programmes like "E-Mentorship" and "Learn Together", we teach the students about all aspects of entrepreneurial journey!`}
                  </Card.Text>
                  <Button variant="dark" className="card-button">
                    Learn Here &rarr;
                  </Button>
                </Card.Body>
              </Card>
              <Card className="card">
                <Card.Body>
                  <lottie-player
                    src="https://assets10.lottiefiles.com/packages/lf20_oxwzlirk.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                  ></lottie-player>
                  <Card.Title>Build</Card.Title>
                  <Card.Text>
                    {`Build  With Initiatives like "Build With Us" and "Startup 101", deep dive into the ocean of building the solutions for tomorrow!`}
                  </Card.Text>
                  <Button variant="dark" className="card-button">
                    Build with us &rarr;
                  </Button>
                </Card.Body>
              </Card>
              <Card className="card">
                <Card.Body>
                  <lottie-player
                    src="https://assets2.lottiefiles.com/packages/lf20_s7vzoj2n.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                  ></lottie-player>
                  <Card.Title>Scale</Card.Title>
                  <Card.Text>
                    {`Scale Network with alumni founders, Get incubated in our incubators and seize the opportunity to pitch in front of Angel Investors & VCs!`}
                  </Card.Text>
                  <Button variant="dark" className="card-button">
                    Escalate &rarr;
                  </Button>
                </Card.Body>
              </Card>
            </Row>
          </Row>
          <Row></Row>
          <Row className="collage-container" style={{ margin: "70px 0px" }}>
            <h1>What people think about us</h1>
            <Testimonials></Testimonials>
          </Row>
          <Footer />
        </Container>
      </div>
      <script
        async
        src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
      ></script>
      <script
        async
        src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.js"
      ></script>
      <script
        async
        src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
      ></script>
    </>
  );
}
