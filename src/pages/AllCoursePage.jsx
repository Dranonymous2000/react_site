import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/TopNavigation/TopNavigation'
import PageTop from '../component/PageTop/PageTop'
import AllCourses from '../component/AllCourses/AllCourses'
import Footer from '../component/Footer/Footer'

export class AllCoursePage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    return (
      <Fragment>
        <TopNavigation/>
        <PageTop pagetitle="All Courses" />
        <AllCourses/>
        <Footer/>
      </Fragment>
    )
  }
}

export default AllCoursePage