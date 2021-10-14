import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

export default function MyFooter() {
  return (
    <Container fluid className="footerContainer my-0">
      <Row className="mb-0">
          <Col xs={4} className="footerCol">
              <div className="logoDiv d-flex mt-2">
                <img src="https://res.cloudinary.com/demwthyen/image/upload/v1634156343/Coinwhale/SpoutingWhale_vxswmy.png" alt="Whale" className="logo" />
              </div>
              <p className="copyrightText">Copyright 2021 CoinWhale</p>
          </Col>
          <Col xs={4} className="footerCol">
           <div className="text-center text-white"> 
                  <p className="my-0">Contact Us</p>
                  <p className="my-0">Imprint</p>
                  <p className="my-0">Blog</p>
           </div>
          </Col>
          <Col xs={4} className="footerCol">
          </Col>
      </Row>
    </Container>
  );
}
