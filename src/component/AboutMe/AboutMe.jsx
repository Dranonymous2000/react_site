import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import face from '../../asset/image/face.png'
import { init } from 'ityped'

export class AboutMe extends Component {

    componentDidMount(){
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: [` Web Developer!`] })
      }

  render() {
    return (
      <Fragment>
        <Container>
        <h1 className='serviceMainTitle text-center p-3'>ABOUT ME</h1>
            <div className='bottom text-center'></div>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <div className='aboutMeImage'>
                    <img className='aboutImg' src={face} alt=''/>
                    </div>
                   
                </Col>

                <Col lg={6} md={6} sm={12}>
                    <div className='aboutMeBody'>
                        <h2 className='aboutMeDescription'>Hi There, I'm </h2>
                        <h2 className='aboutMeTitle'>Oladunjoye Yusuf</h2>
                        <h3 className='aboutMeDescription'>Work as<span id="myElement"> </span></h3> 
                    </div>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default AboutMe