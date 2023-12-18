import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css';

class CourseSec extends Component {
  render() {
    return (
    
      <Container className='mt-5'>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <h1 className='serviceName'>Quick Connect</h1>

            <Form>
      <Form.Group>
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Your Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your eamil" />
      </Form.Group>

      <Form.Group className='pb-3'>
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <h1 className='serviceName'>Discuss Now</h1>
            <p className='serviceDescription'>
                        Aiport Road, Ikeja, Lagos. <br /> 
                        <FontAwesomeIcon  icon={faEnvelope}/> Email: obasanjoyusuf@gmail.com <br />
                        <FontAwesomeIcon  icon={faPhone}/> Phone: 07061358465
            </p>
          </Col>
         
        </Row>
      </Container>
    );
  }
}

export default CourseSec;
