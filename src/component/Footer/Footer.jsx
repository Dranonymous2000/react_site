import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='footerSection'>
            <Row>
                <Col lg={3} md={6} sm={12} className='p-3 text-center'>
                    <h2 className='footerName text-center'>Follow Us</h2>
                     <div className='social-container'>
                    <a className='facbook social' href="xx"> 
                    <FontAwesomeIcon size='2x' icon={faFacebook}/>
                    </a>
                     <a className='youtube social' href="vv">
                      <FontAwesomeIcon size='2x' icon={faYoutube}/>
                      </a>
                    <a className='twitter social' href="xx"> 
                    <FontAwesomeIcon size='2x' icon={faTwitter}/>
                    </a> 
                    </div>

                </Col>

                <Col lg={3} md={6} sm={12} className='p-3 text-justify'>
                    <h2 className='footerName text-center'>Address</h2>

                    <p className='footerDescription'>
                        Aiport Road, Ikeja, Lagos. <br /> 
                        <FontAwesomeIcon  icon={faEnvelope}/> Email: obasanjoyusuf@gmail.com <br />
                        <FontAwesomeIcon  icon={faPhone}/> Phone: 07061358465
                    </p>
                </Col>

                <Col lg={3} md={6} sm={12} className='p-3 text-justify'>
                    <h2 className='footerName text-center'>Infomation</h2>

                    <a  className='footerLink' href="/about">About Me</a> <br />
                    <a  className='footerLink' href="/about">Company profile</a> <br />
                    <a  className='footerLink' href="/contact">Contact Us</a> 
                </Col>

                <Col lg={3} md={6} sm={12} className='p-3 text-justify'>
                    <h2 className='footerName text-center'>Policy</h2>
                    <a  className='footerLink' href="/refund">Refund policy</a> <br />
                    <a  className='footerLink' href="/terms">Terms And Condition</a><br />
                    <a  className='footerLink' href="/privacy">Privacy Policy</a>
                </Col>
            </Row>
        </Container>

        <Container fluid={true} className='text-center copyrightSection'>
         <a href="nn" className='copyLink'> Copyright 2016 by Easy learning, all Right Reserved</a>
        </Container>
      </Fragment>
    )
  }
}

export default Footer