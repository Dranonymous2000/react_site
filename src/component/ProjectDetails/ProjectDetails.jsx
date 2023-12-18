import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import projectDetails from "../../asset/image/pdetails.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

export class ProjectDetails extends Component {
  render() {
    return (
        <Fragment>
            <Container className='mt-5'>
                <Row>
                        <Col lg={6} md={6} sm={12}>
                                <div className='about-thumb-wrap after-shape'>
                                    <img src={projectDetails} alt="" />
                                </div>
                        </Col>

                        <Col lg={6} md={6} sm={12} className='mt-5'>
                            <div className='ProjectDetails'>
                                <h1 className='projectDetailsText'>Education in continuing a proud tradition</h1>
                                <p className='detailsName'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ab cupiditate odit, ratione asperiores libero ipsam architecto delectus fuga eum voluptatem a earum nostrum dolore non molestiae consectetur corporis sed!</p>


                                <p className='classSubTitle text-start'> <FontAwesomeIcon className='iconBullet' icon={faCheckSquare}/> Lorem ipsum dolor sit amet</p>

                                <p className='classSubTitle text-start'> <FontAwesomeIcon className='iconBullet' icon={faCheckSquare}/> Lorem ipsum dolor sit amet</p>

                                <p className='classSubTitle text-start'> <FontAwesomeIcon className='iconBullet' icon={faCheckSquare}/> Lorem ipsum dolor sit amet</p>

                                <p className='classSubTitle text-start'> <FontAwesomeIcon className='iconBullet' icon={faCheckSquare}/> Lorem ipsum dolor sit amet</p>

                            </div>
                        
                        </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default ProjectDetails