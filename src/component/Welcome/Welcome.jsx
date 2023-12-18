import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import page1 from "../../asset/image/page1.png"
import page2 from "../../asset/image/page2.png"
import page3 from "../../asset/image/page3.png"
import image1  from "../../asset/image/19.png"
import image2 from "../../asset/image/20.png"
import image3 from "../../asset/image/21.png"

class Welcome extends Component {
  render() {
    return (
      <Fragment>
        <div className='introAreaTop'>
                <Container>
                    <Row>
                        <Col  lg={12} md={12} sm={12}>
                            <div className='sectionTitle text-center'>
                                <div className='introAreaInner'>
                                    <h6 className='subTitle double-line'> WELCOME</h6>
                                    <h2 className='mainTitle'>
                                        An Exemplary <br /> 
                                        learning community
                                    </h2>

                                    <Container className='text-center mt-5'>
                                        <Row>
                                            
                                            <Col  lg={4} md={6} sm={12}>
                                                <img src={page1} alt="" />
                                                <h1 className='serviceName'>Easy As It Get</h1>
                                                <p className='serviceDescription'>Lorem ipsum dolor</p>
                                            </Col>

                                            <Col  lg={4} md={6} sm={12}>
                                                <img src={page2} alt="" />
                                                <h1 className='serviceName'>Teach As You Want</h1>
                                                <p className='serviceDescription'>Lorem ipsum dolor</p>
                                            </Col>

                                            <Col  lg={4} md={6} sm={12}>
                                                <img src={page3} alt="" />
                                                <h1 className='serviceName'>The Small matter</h1>
                                                <p className='serviceDescription'>Lorem ipsum dolor</p>
                                            </Col>
                                        </Row>
                                   

                                   {/* intro footer part */}

                                    <Row className='introFooter bg-base'>
                                            <Col lg={4} md={6} sm={12}>
                                                    <Row>
                                                        <Col lg={6} md={6} sm={6}>
                                                            <img className='sideImg' src={image1} alt="" />
                                                        </Col>

                                                        <Col lg={6} md={6} sm={6}>
                                                            <h5 className='text-justify homeIntro'>Development</h5>
                                                            <p className='text-justify serviceDescription'>Lorem ipsum dolor </p>
                                                        </Col>
                                                    </Row>

                                             </Col>

                                             <Col lg={4} md={6} sm={12}>
                                                    <Row>
                                                        <Col lg={6} md={6} sm={6}>
                                                            <img className='sideImg' src={image2} alt="" />
                                                        </Col>

                                                        <Col lg={6} md={6} sm={6}>
                                                            <h5 className='text-justify homeIntro'>Web Design</h5>
                                                            <p className='text-justify serviceDescription'>Lorem ipsum dolor </p>
                                                        </Col>
                                                    </Row>

                                             </Col>


                                             <Col lg={4} md={6} sm={12}>
                                                    <Row>
                                                        <Col lg={6} md={6} sm={6}>
                                                            <img className='sideImg' src={image3} alt="" />
                                                        </Col>

                                                        <Col lg={6} md={6} sm={6}>
                                                            <h5 className='text-justify homeIntro'>E-Commerce</h5>
                                                            <p className='text-justify serviceDescription'>Lorem ipsum dolor </p>
                                                        </Col>
                                                    </Row>

                                             </Col>
                                    </Row>



                                    </Container>








                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </div>
      </Fragment>
    )
  }
}

export default Welcome