import React, { Component, Fragment } from 'react'
import TopBanner from "../component/TopBanner/TopBanner";
import Services from "../component/Services/Services";
import TopNavigation from "../component/TopNavigation/TopNavigation";
import Analysis from "../component/Analysis/Analysis";
import Summary from "../component/Summary/Summary";
import RecentProject from "../component/RecentProject/RecentProject";
import Courses from "../component/Courses/Courses";
import Video from "../component/Video/Video";
import ClientReview from "../component/ClientReview/ClientReview";
import AboutMe from "../component/AboutMe/AboutMe";
import Footer from "../component/Footer/Footer";
import Welcome from '../component/Welcome/Welcome';

 class HomePage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    return (
      <Fragment>
     <TopNavigation/>
     <TopBanner/>
     <Welcome/>
     <Services/>
     <Analysis/>
     <Summary/>
     <RecentProject/>
     <Courses/>
     <Video/>
     <ClientReview/>
     <AboutMe/>
     <Footer/>
      </Fragment>
    )
  }
}

export default HomePage