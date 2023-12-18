import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/TopNavigation/TopNavigation'
import PageTop from '../component/PageTop/PageTop'
import ProjectDetails from '../component/ProjectDetails/ProjectDetails'
import Footer from '../component/Footer/Footer'

export class ProjectDetailsPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    return (
      <Fragment>
        <TopNavigation/>
        <PageTop pagetitle="Project Details"/>
        <ProjectDetails/>
        <Footer/>
      </Fragment>
    )
  }
}

export default ProjectDetailsPage