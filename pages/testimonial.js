import React, { Component } from 'react'
import { Container, Row, Col,Modal,Tab,Nav } from "react-bootstrap"

export default class Testimonial extends Component {
  render() {
    return (
        <Container className="testimonial pb-5 mb-5" id="testimonial">
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <p className='text-center fs-2 fw-bold pt-5'>Trusted by Thousands of<br></br> Happy Customer</p>
            <p className="text-center pb-5 mb-5">These are the stories of our customers who have joined us with great<br></br> pleasure when using this crazy feature.</p>
          </div>
        </div>
        <Row className="pb-5 mb-5">
          <Col className="d-flex justify-content-center">
            <div className='card p-4 mt-2 active'>
              <div className='cardhead d-flex justify-content-between'>
                <div className="d-flex">
                  <img src="/images/firstname.svg"></img>
                  <p className="m-0 ms-3"><span className="fw-bold">Viezh Robert</span><br></br>Warsaw, Poland</p>
                </div>
                <div>4.5<img src="/images/start.svg"></img></div>
              </div>
              <div className='card-body d-flex justify-content-center'>
                <p>
                  “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                </p>
              </div>
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            <div className='card p-4 mt-2'>
              <div className='cardhead d-flex justify-content-between'>
                <div className="d-flex">
                  <img src="/images/secondname.svg"></img>
                  <p className="m-0 ms-3"><span className="fw-bold">Yessica Christy</span><br></br>Shanxi, China</p>
                </div>
                <div>4.5<img src="/images/start.svg"></img></div>
              </div>
              <div className='card-body d-flex justify-content-center'>
                <p>
                “I like it because I like to travel far and still can connect with high speed.”.
                </p>
              </div>
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            <div className='card p-4 mt-2'>
              <div className='cardhead d-flex justify-content-between'>
                <div className="d-flex">
                  <img src="/images/thirdname.svg"></img>
                  <p className="m-0 ms-3"><span className="fw-bold">Kim Young Jou</span><br></br>Seoul, South Korea</p>
                </div>
                <div>4.5<img src="/images/start.svg"></img></div>
              </div>
              <div className='card-body d-flex justify-content-center'>
                <p>
                “This is very unusual for my business that currently requires a virtual private network that has high security.”.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
