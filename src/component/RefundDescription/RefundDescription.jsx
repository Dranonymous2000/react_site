import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css';

 class RefundDescription extends Component {
  render() {
    return (
      <Fragment>
         <Container className='mt-5'>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <h1 className='serviceName'> Data Protection Principles</h1>
                    <hr />
                    <p className='serviceDescription'>
                        <ul>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laborum vel qui veritatis omnis ut consequuntur quod blanditiis est quasi unde, distinctio ducimus at laudantium praesentium fuga nesciunt, ipsum modi.
                            </li>

                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laborum vel qui veritatis omnis ut consequuntur quod blanditiis est quasi unde, distinctio ducimus at laudantium praesentium fuga nesciunt, ipsum modi.
                            </li>

                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laborum vel qui veritatis omnis ut consequuntur quod blanditiis est quasi unde, distinctio ducimus at laudantium praesentium fuga nesciunt, ipsum modi.
                            </li>

                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laborum vel qui veritatis omnis ut consequuntur quod blanditiis est quasi unde, distinctio ducimus at laudantium praesentium fuga nesciunt, ipsum modi.
                            </li>

                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laborum vel qui veritatis omnis ut consequuntur quod blanditiis est quasi unde, distinctio ducimus at laudantium praesentium fuga nesciunt, ipsum modi.
                            </li>
                        </ul>
                    </p>
        

                </Col>
            </Row>
         </Container>
      </Fragment>
    )
  }
}

export default RefundDescription