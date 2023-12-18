import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faClipboard} from '@fortawesome/free-solid-svg-icons'
import {faClone} from '@fortawesome/free-solid-svg-icons'
import {faTags} from '@fortawesome/free-solid-svg-icons'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import 'video-react/dist/video-react.css'; // import css
import { Player, BigPlayButton } from 'video-react';

 class CourseDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col lg={8} md={6} sm={12}>
                
                    <h1 className='courseDetailsText'>Lorem ipsum, dolor sit amet</h1>
                    <img className='CourseDetailsImage' src="https://solverwp.com/demo/html/edumint/assets/img/course/9.png" alt="" />
                    <p className='serviceDescription'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisquam odit minus id eum? Tempore fuga odio dolorem optio quae delectus incidunt quisquam, distinctio laboriosam corrupti quis nihil, velit assumenda.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reprehenderit molestiae officia dolore iusto amet aperiam nemo officiis, ratione iure blanditiis inventore sint obcaecati tempore debitis quod! Quidem, saepe eligendi!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quis, id accusamus praesentium harum cum est iste accusantium deleniti magnam illum, iure voluptas quaerat vero! Porro voluptates quos beatae maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, tempora autem reiciendis necessitatibus excepturi ullam alias veniam quos asperiores aspernatur molestias quidem neque eos, a quis repudiandae eaque cum itaque?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus rem sit cum. Deleniti, eveniet voluptas magnam laborum quos consequatur autem quo ab numquam est possimus corporis! Neque saepe delectus voluptas.
                    </p>

                </Col>
                <Col lg={4} md={6} sm={12}>

                    <div className='widget_feature'>
                        <h4 className='widget-title text-center'>Course Features</h4>
                        <hr />
                        <ul> 
                            <li> <FontAwesomeIcon className='iconBullet' icon={faUsers}/> <span> Enrolled: </span> 1200 students </li>
                            <li><FontAwesomeIcon className='iconBullet' icon={faClock}/> <span> Duration: </span> 2 hours </li>
                            <li><FontAwesomeIcon className='iconBullet' icon={faClipboard}/> <span> Lectures: </span> 8  </li>
                            <li><FontAwesomeIcon className='iconBullet' icon={faClone}/> <span> Categories: </span>  Technologies </li>
                            <li><FontAwesomeIcon className='iconBullet' icon={faTags}/> <span> Tags: </span> Android, Javascript </li>
                            <li><FontAwesomeIcon className='iconBullet' icon={faCheckSquare}/> <span> Instructor: </span> Ethan Dean </li>
                        </ul>
                        
                        <div class="price-wrap text-center">
                            <h5>Price: <span>$54.00</span></h5>
                            <Button variant='warning'>  <a class="btn btn-base btn-radius" href='gg'>ENROLL COURSE</a> </Button>
                           
                        </div>
                         </div>
                      </Col>
            </Row>
        </Container>

        <br /><br />

        <Container>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <div className='widget_feature'>
                <h1 className='courseDetailsText text-center'>Skills You Need</h1>
                <hr />
                <ul>
                    <li> <FontAwesomeIcon className='iconBullet' icon={faCheckSquare}/>  Metus Interdum metus</li>

                    <li> <FontAwesomeIcon className='iconBullet' icon={faCheckSquare}/>  Metus Interdum metus</li>

                    <li> <FontAwesomeIcon className='iconBullet' icon={faCheckSquare}/>  Metus Interdum metus</li>

                    <li> <FontAwesomeIcon className='iconBullet' icon={faCheckSquare}/>  Metus Interdum metus</li>

                    <li> <FontAwesomeIcon className='iconBullet' icon={faCheckSquare}/>  Metus Interdum metus</li>
                </ul>

                </div>
                </Col>

                <Col lg={6} md={6} sm={12}>
                <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                        <BigPlayButton position="center" />
                        </Player>
                

                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default CourseDetails