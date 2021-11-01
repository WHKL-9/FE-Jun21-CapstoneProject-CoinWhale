import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

export default function MyFooter() {
  return (
    <Container fluid className="footerContainer my-0">
      <Row className="mb-0">
        <Col xs={6} className="footerCol">
          <div className="logoDiv d-flex mt-2">
            <img
              src="https://res.cloudinary.com/demwthyen/image/upload/v1634156343/Coinwhale/SpoutingWhale_vxswmy.png"
              alt="Whale"
              className="logo"
            />
          </div>
          <p className="copyrightText">Built by WH in Berlin with coffee☕</p>
        </Col>
        <Col xs={6} className="footerCol">
          <div className="text-right text-white mr-3">
            <a
              href="https://portfolio-henna-iota.vercel.app/"
              target="_blank"
              className="text-decoration-none text-white"
            >
              <p className="my-0">
                <u>About WH</u>
              </p>
            </a>
            <a
              href="https://fe-jun21-m3-d10-netflix-solo-project.vercel.app/"
              target="_blank"
              className="text-decoration-none text-white"
            >
              <p className="my-0">
                <u>Other Project</u>
              </p>
            </a>
          </div>
        </Col>
        {/* <Col xs={4} className="footerCol">
          </Col> */}
      </Row>
    </Container>
  );
}
