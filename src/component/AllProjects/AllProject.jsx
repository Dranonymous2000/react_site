import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export class AllProject extends Component {
  render() {
    return (
        
        <Fragment>
        <Container className='text-center'>
        <h1 className='serviceMainTitle'>RECENT PROJECT</h1>
        <div className='bottom'></div>
            <Row>
                <Col lg={4} md={6} sm={12}>
                <Card className='projectCard'>
                    <Card.Img variant="top" src="https://img.freepik.com/premium-photo/writing-down-good-looking-inspired-young-afro-american-businessman-grinning-working-his-laptop-writing-down-some-information-while-sitting-table_259150-23382.jpg?size=626&ext=jpg&ga=GA1.1.2038234220.1697053214&semt=sph" />
                    <Card.Body>
                        <Card.Title className='serviceName'>Project Name One</Card.Title>
                        <Card.Text className='serviceDescription'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text> 
                        <Button variant="primary"> <Link className='link-style' to="/projectDetails"> View More</Link> </Button>
                    </Card.Body>
                    </Card>
                </Col>


                <Col  lg={4} md={6} sm={12}>
                <Card className='projectCard'>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/young-student-learning-library_23-2149215390.jpg?w=1380&t=st=1701688179~exp=1701688779~hmac=4683633c396948bb84d611d42f7e2aaeebbb1365bcf0af7022228fa09b74501d" />
                    <Card.Body>
                        <Card.Title className='serviceName'>Project Name Two</Card.Title>
                        <Card.Text className='serviceDescription'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary"><Link className='link-style' to="/projectDetails"> View More</Link></Button>
                    </Card.Body>
                    </Card>
                </Col>


                <Col  lg={4} md={6} sm={12}>
                <Card className='projectCard'>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/young-man-with-laptop-headphones_23-2148205659.jpg?size=626&ext=jpg&ga=GA1.1.2038234220.1697053214&semt=sph" />
                    <Card.Body>
                        <Card.Title className='serviceName'>Project Name Three</Card.Title>
                        <Card.Text className='serviceDescription'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary"> <Link className='link-style' to="/projectDetails"> View More</Link></Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
  </Fragment>
    )
  }
}

export default AllProject