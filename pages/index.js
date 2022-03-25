import React, { Component } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import { Container, Row, Col,Modal,Tab,Nav } from "react-bootstrap"
import Header from "../components/header"
import About from "./about"
import Feature from "./feature"
import Pricing from "./pricing"
import Network from "./network"
import Testimonial from "./testimonial"
import Footer from "./footer"

export default class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       show:false,
       activekey:"signin"
    }
  }
  DataFromHeader=(type)=>{
    if(type === "signin" || type === "signup"){
      this.setState({activekey:type,show:true})
    }else{
      document.getElementById(type).scrollIntoView({ behavior: 'smooth', block: 'start'})
    }
  }
  handleClose=()=>{
    this.setState({show:false})
  }
  handleTypeChange=(e)=>{
      this.setState({activekey:e})
  }
  render(){
  return (
    <Layout>
      <Header FromHeader={this.DataFromHeader}/>
      <About />
      <Feature />
      <Pricing />
      <Network />
      <Testimonial/>
      <Footer />
      <Modal show={this.state.show} onHide={this.handleClose} keyboard={false}>
      <Modal.Header closeButton>
          <Modal.Title className="">
            <img src="/images/Logo.png"></img>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tab.Container activeKey={this.state.activekey}>
            <div className="d-flex align-items-center justify-content-center">
              <Nav variant="pills" className="mb-4 col-12 col-lg-8 justify-content-center" onSelect={this.handleTypeChange}>
                <Nav.Item className='c-pointer'>
                  <Nav.Link eventKey="signin">Sign in</Nav.Link>
                </Nav.Item>
                <Nav.Item className="c-pointer">
                  <Nav.Link eventKey="signup">Sign up</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <Tab.Content>
              <Tab.Pane eventKey="signin">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleFormControlTextarea1" />
                </div>
                <div className='d-flex justify-content-center'>
                <button className="log-btn">Sign In</button>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleFormControlTextarea1" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Confirm Password</label>
                  <input type="password" class="form-control" id="exampleFormControlTextarea1" />
                </div>
                <div className='d-flex justify-content-center'>
                <button className='log-btn'>Sign Up</button>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Modal.Body>
      </Modal>
    </Layout>
  )
  }
}
