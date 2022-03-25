import React, { Component } from 'react'
import { Nav, Navbar, Container, NavDropdown, Button, Form, FormControl } from "react-bootstrap"

export default class Header extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        
      }
    }
    handleChooseMenu=(txt)=>{
        this.props.FromHeader(txt)
    }
    render() {
        return (
            <div className='header m-0 p-0'>
            <Container>
             <Navbar expand="lg" className='m-3 p-3'>
                    <Container fluid>
                        <Navbar.Brand>
                            <img src="/images/Logo.png"/>
                            </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto ms-5 mr-5 my-2 my-lg-0"
                                navbarScroll
                            >
                                <Nav.Link className="me-3 ms-lg-5 text-sm-center" onClick={()=>{this.handleChooseMenu("about")}}>About</Nav.Link>
                                <Nav.Link className="me-3 text-sm-center" onClick={()=>{this.handleChooseMenu("feature")}}>Feature</Nav.Link>
                                <Nav.Link className="me-3 text-sm-center" onClick={()=>{this.handleChooseMenu("pricing")}}>Pricing</Nav.Link>
                                <Nav.Link className="me-3 text-sm-center" onClick={()=>{this.handleChooseMenu("testimonial")}}>Testimonials</Nav.Link>
                                <Nav.Link className="me-3 text-sm-center" onClick={()=>{this.handleChooseMenu("help")}}>Help</Nav.Link>
                            </Nav>
                            <div className="d-flex justify-content-around">
                                <button className="log-btn fw-bold" onClick={()=>{this.handleChooseMenu("signin")}}>Sign In</button>
                                <button className="log-btn selected fw-bold" onClick={()=>{this.handleChooseMenu("signup")}}>Sign up</button>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </Container>
            </div>
        )
    }
}
