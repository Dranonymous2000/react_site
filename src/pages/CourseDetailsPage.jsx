import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/TopNavigation/TopNavigation'
import PageTop from '../component/PageTop/PageTop'
import CourseDetails from '../component/CourseDetails/CourseDetails'
import Footer from '../component/Footer/Footer'

export class CourseDetailsPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    return (
      <Fragment>
        <TopNavigation/>
        <PageTop pagetitle="Course Details"/>
        <CourseDetails/>
        <Footer/>
      </Fragment>
    )
  }
}

export default CourseDetailsPage