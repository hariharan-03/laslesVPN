import React, { Component } from 'react'
import { Container, Row, Col,Modal,Tab,Nav } from "react-bootstrap"

export default class Network extends Component {
  render() {
    return (
        <Container className="network" fluid id="network">
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <p className='text-center fs-2 fw-bold pt-5 mt-5'>Huge Global Network <br></br>of Fast VPN</p>
            <p className="text-center pb-5 mb-5">See LaslesVPN everywhere to make it easier for you when you move <br></br>locations.</p>
            <img className="d-flex align-items-center" width="100%" src="/images/Huge Global.svg" alt="hugeglobe"></img>
            <img className="d-flex align-items-center" width="100%" src="/images/Sponsored.svg"></img>
          </div>
        </div>
      </Container>
    )
  }
}
