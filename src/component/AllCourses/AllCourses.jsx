import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export class AllCourses extends Component {
  render() {
    return (
        
        <Fragment>
        <Container >
        <h1 className='serviceMainTitle text-center'>MY COURSES</h1>
            <div className='bottom text-center'></div>
            <Row>
                <Col lg={6} md={12} sm={12}>

                    <Row>

                        <Col lg={6} md={6} sm={12} className='p-2'>

                            <img className='courseImg' src='https://img.freepik.com/free-photo/everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime_146671-16288.jpg?w=1380&t=st=1701694138~exp=1701694738~hmac=53491d041f1a7f64a87ae16ea9c011da947a1884de7fd1525ad7de6e976a1eaf' alt=''/>
                        
                        
                        </Col>


                        <Col lg={6} md={6} sm={12}>
                                            
                        <h5 className=' serviceName'>Laravel 8</h5>
                        <p className=' serviceDescription'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        <a className='courseViewMore float-left' href='/courseDetails'> View Details</a>
                        
                        </Col>



                        <Col lg={6} md={6} sm={12} className='p-2'>

                            <img className='courseImg' src='https://img.freepik.com/free-photo/coach-by-whiteboard_1098-12970.jpg?size=626&ext=jpg&ga=GA1.1.2038234220.1697053214&semt=sph' alt=''/>
                        
                        
                        </Col>


                        <Col lg={6} md={6} sm={12} >
                                            
                        <h5 className=' serviceName'>Laravel 8</h5>
                        <p className=' serviceDescription'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        <a className='courseViewMore float-left' href='/courseDetails'> View Details</a>
                        
                        </Col>




                    </Row>


                </Col>









                <Col lg={6} md={12} sm={12}>

                <Row>

                        <Col lg={6} md={6} sm={12} className='p-2'>

                            <img className='courseImg' src='https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?size=626&ext=jpg' alt=''/>


                        </Col>


                        <Col lg={6} md={6} sm={12}>
                                            
                        <h5 className=' serviceName'>Laravel 8</h5>
                        <p className=' serviceDescription'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        <a className='courseViewMore float-left' href='/courseDetails'> View Details</a>

                        </Col>



                        <Col lg={6} md={6} sm={12} className='p-2'>

                            <img className='courseImg' src='https://img.freepik.com/free-photo/young-man-laptop-online-adult_1303-1263.jpg?size=626&ext=jpg' alt=''/>


                        </Col>


                        <Col lg={6} md={6} sm={12}>
                                            
                        <h5 className=' serviceName'>Laravel 8</h5>
                        <p className=' serviceDescription'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        <a className='courseViewMore float-left' href='/courseDetails'> View Details</a>

                        </Col>




                        </Row>

                       
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default AllCourses