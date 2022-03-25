import React, { Component } from 'react'
import { Container, Row, Col,Modal,Tab,Nav } from "react-bootstrap"

export default class Footer extends Component {
  render() {
    return (
        <Container className='footer' fluid id="help">
        <Container className="subscriber mt-5">
          <Row>
            <Col lg={6} md={6} sm={12} className="d-flex align-items-center p-lg-4 pb-sm-0">
              <div className='m-sm-auto m-lg-0'>
                <p className="fs-2 fw-bold">Subscribe Now for <br></br>Get Special Features!</p>
                <p >Let's subscribe with us and find the fun.</p>
              </div>
            </Col>
            <Col className="d-flex align-items-center justify-content-center p-4">
              <button className="btn btn-primary start-btn fw-bold ms-lg-5">Subscribe Now</button>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg={{ span: 6, order: 1 }} md={{ span: 6, order: 1 }} sm={{ span: 12, order: 2 }}>
              <img src="/images/Logo.png" />
              <p>LaslesVPN is a private virtual network that<br></br> has unique features and has high security.</p>
              <div className='"d-flex justify-content-between'>
                <img src="/images/Facebook.svg"></img>
                <img src="/images/Twitter.svg"></img>
                <img src="/images/Instagram.svg"></img>
              </div>
              <p>@ 2020LaslesVPN</p>
            </Col>
            <Col lg={{ span: 6, order: 2 }} md={{ span: 6, order: 2 }} sm={{ span: 12, order: 1 }} className="mb-sm-3">
              <Row>
                <Col>
                  <ul>
                    <li className="fw-bold mb-4">Product</li>
                    <li className='mb-3'>Download</li>
                    <li className='mb-3'>Pricing</li>
                    <li className='mb-3'>Locations</li>
                    <li className='mb-3'>Server</li>
                    <li className='mb-3'>Countries</li>
                    <li className='mb-3'>Blog</li>
                  </ul>
                </Col>
                <Col>
                  <ul>
                    <li className="fw-bold mb-4">Engage</li>
                    <li className='mb-3'>LaslesVPN?</li>
                    <li className='mb-3'>FAQ</li>
                    <li className='mb-3'>Tutorials</li>
                    <li className='mb-3'>About us</li>
                    <li className='mb-3'>Privacy Policy</li>
                    <li className='mb-3'>Terms of Service</li>
                  </ul>
                </Col>
                <Col>
                  <ul>
                    <li className="fw-bold mb-4">Earn Money</li>
                    <li className='mb-3'>Affliate</li>
                    <li>Become Partner</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}
