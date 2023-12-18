import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export class AboutDescription extends Component {
  render() {
    return (
      <Fragment>
        <Container className='mt-5 p-auto'>
            <Row>
                <Col lg={12} md={12} sm={12} >
                    <h1 className='serviceName'>Who I Am</h1>
                    <hr />
                    <p className='serviceDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat voluptatem, a commodi similique eos facilis debitis, recusandae deleniti veniam nam natus laborum itaque ipsam praesentium et aliquam iste voluptate asperiores? <br /> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rem magnam, praesentium magni fugiat debitis veritatis, totam quidem, blanditiis maxime eveniet et voluptas culpa voluptatem corrupti laborum exercitationem a provident. <br /> <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias eaque, doloremque, tempora delectus labore aperiam mollitia sint ipsam magni nemo laudantium, et illum fuga consequatur praesentium? Cupiditate incidunt neque sit?  
                    </p>

                    <br /> <br />

                    <br />
                    <h1 className='serviceName'>Our Mission</h1>
                    <hr />
                    <p className='serviceDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat voluptatem, a commodi similique eos facilis debitis, recusandae deleniti veniam nam natus laborum itaque ipsam praesentium et aliquam iste voluptate asperiores? <br /> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rem magnam, praesentium magni fugiat debitis veritatis, totam quidem, blanditiis maxime eveniet et voluptas culpa voluptatem corrupti laborum exercitationem a provident. <br /> <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias eaque, doloremque, tempora delectus labore aperiam mollitia sint ipsam magni nemo laudantium, et illum fuga consequatur praesentium? Cupiditate incidunt neque sit?  
                    </p>


                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default AboutDescription