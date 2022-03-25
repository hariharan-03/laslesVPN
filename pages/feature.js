import React, { Component } from 'react'
import { Container, Row, Col,Modal,Tab,Nav } from "react-bootstrap"

export default class Feature extends Component {
  render() {
    return (
        <Container className="feature" id="feature">
        <Row>
          <Col lg={6} md={6} className='d-flex align-items-center p-5'>
            <img className="right-sec-img" width="100%" src="/images/fetpic.png" />
          </Col>
          <Col lg={6} md={6} className="d-flex align-items-center p-5 left-sec-start">
            <div>
              <p className="first fs-2 fw-bold">We Provide Many <br></br>Features You Can Use.</p>
              <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
              <ul>
                <li className='mb-3'><img className="me-2" src="/images/Group 1120.png" />Powerfull online protection.</li>
                <li className='mb-3'><img className="me-2" src="/images/Group 1120.png" />Internet without borders.</li>
                <li className='mb-3'><img className="me-2" src="/images/Group 1120.png" />Supercharged VPN</li>
                <li><img className="me-2" src="/images/Group 1120.png" />No specific time limits.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
