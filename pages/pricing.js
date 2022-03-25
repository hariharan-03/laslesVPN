import React, { Component } from 'react'
import { Container, Row, Col,Modal,Tab,Nav } from "react-bootstrap"

export default class Pricing extends Component {
  render() {
    return (
        <Container fluid className="pricing" id="pricing">
        <div className="d-flex justify-content-center align-items-center mt-4">
          <div>
            <p className='text-center fs-2 fw-bold'>Choose Your Plan</p>
            <p className="text-center">Let's choose the package that is best for you and explore it happily and <br></br>cheerfully.</p>
          </div>
        </div>
        <Container>
          <Row id="pricingList">
            <Col className="d-flex justify-content-center">
              <div className='card p-4 mt-2 active'>
                <div className='cardhead text-center'>
                  <img src="/images/Free.png"></img>
                  <p className="fw-bold fs-4">Free Plan</p>
                </div>
                <div className='card-body d-flex justify-content-center'>
                  <ul>
                    <li className='mb-3'><img className="me-2" src="/images/Vector.png" />Unlimited Bandwitch</li>
                    <li className='mb-3'><img className="me-2" src="/images/Vector.png" />Encrypted Connection</li>
                    <li className='mb-3'><img className="me-2" src="/images/Vector.png" />No Traffic Logs</li>
                    <li><img className="me-2" src="/images/Vector.png" />Works on All Devices</li>
                  </ul>
                </div>
                <div className='card-footer bg-transparent text-center'>
                  <p className="fw-bold fs-4">Free</p>
                  <button className="btn btn-primary active"> select</button>
                </div>
              </div>
            </Col>
            <Col className="d-flex justify-content-center">
              <div className='card p-4 mt-2'>
                <div className='cardhead text-center'>
                  <img src="/images/Free.png"></img>
                  <p className="fw-bold fs-4">Standard Plan</p>
                </div>
                <div className='card-body d-flex justify-content-center'>
                  <ul>
                    <li className='mb-3'><img className="me-2" src="/images/Vector.png" />Unlimited Bandwitch</li>
                    <li className='mb-3'><img className="me-2" src="/images/Vector.png" />Encrypted Connection</li>
                    <li className='mb-3'><img className="me-2" src="/images/Vector.png" />Yes Traffic Logs</li>
                    <li className='mb-3'><img className="me-2" src="/images/Vector.png" />Works on All Devices</li>
                    <li><img className="me-2" src="/images/Vector.png" />Connect Anyware</li>
                  </ul>
                </div>
                <div className='card-footer bg-transparent text-center'>
                  <p className="fs-4"><span className="fw-bold fs-4">$9</span>/ mo</p>
                  <button className="btn btn-primary"> select</button>
                </div>
              </div>
            </Col>
            <Col className="d-flex justify-content-center">
              <div className='card p-4 mt-2'>
                <div className='cardhead text-center'>
                  <img src="/images/Free.png"></img>
                  <p className="fw-bold fs-4">Premium Plan</p>
                </div>
                <div className='card-body d-flex justify-content-center'>
                  <ul>
                    <li className='mb-3'><img className="me-2" src="/images/Vector.png" />Unlimited Bandwitch</li>
                    <li className='mb-3'><img className="me-2" src="/images/Vector.png" />Encrypted Connection</li>
                    <li className='mb-3'><img className="me-2" src="/images/Vector.png" />Yes Traffic Logs</li>
                    <li className='mb-3'><img className="me-2" src="/images/Vector.png" />Works on All Devices</li>
                    <li className='mb-3'><img className="me-2" src="/images/Vector.png" />Connect Anyware</li>
                    <li><img className="me-2" src="/images/Vector.png" />Get New Features</li>
                  </ul>
                </div>
                <div className='card-footer bg-transparent text-center'>
                  <p className="fs-4"><span className="fw-bold fs-4">$12</span>/ mo</p>
                  <button className="btn btn-primary"> select</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}
