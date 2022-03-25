import React, { Component } from 'react'
import { Container, Row, Col,Modal,Tab,Nav } from "react-bootstrap"

export default class About extends Component {
  render() {
    return (
        <Container className="home" id="about">
        <Row>
          <Col lg={6} md={6} className="align-items-center p-5 left-sec-start">
            <p className="first fs-1 fw-bold">Want anything to be easy with <span className='fw-bolder'>LaslesVPN</span>.</p>
            <p className='pb-3 mb-3'>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
            <button className="btn btn-primary start-btn fw-bold">Get started</button>
          </Col>
          <Col lg={6} md={6} className='d-flex align-items-center p-5 d-lg-block d-md-block d-sm-none'>
            <img className="d-lg-block d-md-block d-sm-none" width="100%" src="/images/dashpic.png" />
          </Col>
        </Row>
        <Container className="subscriber">
          <Row>
            <Col lg={4} md={4} sm={4} className="p-5">
              <div className='d-flex d-flex align-items-center justify-content-center borderdiv'>
                <img src="/images/user.svg"></img>
                <p className='ms-4 m-0 fs-4'><span className='fw-bold'>90+</span><br></br>users</p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4}className="p-5">
              <div className='d-flex d-flex align-items-center justify-content-center border-right borderdiv'>
                <img src="/images/location.svg"></img>
                <p className='ms-4 m-0 fs-4'><span className='fw-bold'>50+</span><br></br>Locations</p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4}className="p-5">
              <div className='d-flex d-flex align-items-center justify-content-center'>
                <img src="/images/Server.svg"></img>
                <p className='ms-4 m-0 fs-4'><span className='fw-bold'>20+</span><br></br>Servers</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}
