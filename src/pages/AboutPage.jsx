import React, { Component, Fragment } from 'react'
import AboutMe from '../component/AboutMe/AboutMe'
import TopNavigation from '../component/TopNavigation/TopNavigation'
import PageTop from '../component/PageTop/PageTop'
import AboutDescription from '../component/AboutDescription/AboutDescription'
import Footer from '../component/Footer/Footer'



export class AboutPage extends Component {

  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    return (
      <Fragment>
        <TopNavigation/>
        <PageTop pagetitle="All Courses" />
        <AboutMe/>
        <AboutDescription/>
        <Footer/>
      </Fragment>
    )
  }
}

export default AboutPage