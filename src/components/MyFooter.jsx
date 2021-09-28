import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Whale from "../assets/SpoutingWhale.png";
import "../App.css";

export default function MyFooter() {
  return (
    <Container fluid className="footerContainer">
      <Row>
          <Col xs={4}>
              <div className="logoDiv d-flex mt-2">
                <img src={Whale} alt="Whale" className="logo" />
              </div>
              <p className="copyrightText">Copyright 2021 CoinWhale</p>
          </Col>
          <Col xs={4}>
           <div className="text-center text-white"> 
                  <p className="my-0">Contact Us</p>
                  <p className="my-0">Imprint</p>
                  <p className="my-0">Blog</p>
           </div>
          </Col>
      </Row>
    </Container>
  );
}
