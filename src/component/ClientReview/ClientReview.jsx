import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class ClientReview extends Component {
  render() {
    
        var settings = {
          autoPlaySpeed:3000,
          autoPlay:true,
          dots: true,
          infinite: true,
          speed: 3000,
          arrows:false,
          vertical:true,
          verticalSwiping:true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
    return (
      <Fragment>
        <Container fluid={true} className='siderBack'>
        <h1 className='reviewMainTitle text-center p-3'>TESTIMONIAL</h1>
            <div className='reviewbottom text-center'></div>
            
            <Slider {...settings}>
                <div>
                <Row className='text-center justify-content-center'>
                <Col lg={6} md={6} sm={12}>
                    <img className='circleImg d-block mx-auto' src="https://img.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_93675-128895.jpg?size=626&ext=jpg&ga=GA1.1.2038234220.1697053214&semt=sph" alt="" />
                    <h2 className='reviewName'>Temi</h2>
                    <p className='reviewDescription'>Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.</p>
                </Col>
            </Row>
            </div>



            <div>
            <Row className='text-center justify-content-center'>
                <Col lg={6} md={6} sm={12}>
                    <img className='circleImg d-block mx-auto' src="https://img.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_93675-128895.jpg?size=626&ext=jpg&ga=GA1.1.2038234220.1697053214&semt=sph" alt="" />
                    <h2 className='reviewName'>Jack Ma</h2>
                    <p className='reviewDescription'>Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.</p>
                </Col>
            </Row>

            </div>


            <div>
            <Row className='text-center justify-content-center'>
                <Col lg={6} md={6} sm={12}>
                    <img className='circleImg d-block mx-auto' src="https://img.freepik.com/free-photo/close-up-portrait-lovely-young-african-american-woman-with-curly-afro-haircut-smiling-with-happy-pleasant-expression-enjoying-winter-holidays-wearing-sweater-blue-wall_1258-35442.jpg?w=1380&t=st=1701739182~exp=1701739782~hmac=b2639a364239d5aad7b51066943014dd9ed541638c6a2d8de4d498bed02878e0" alt="" />
                    <h2 className='reviewName'>Ecommerce</h2>
                    <p className='reviewDescription'>Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.</p>
                </Col>
            </Row>
            </div>
        </Slider>
        </Container>
      </Fragment>
    )
  }
}

export default ClientReview