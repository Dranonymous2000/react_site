import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/TopNavigation/TopNavigation'
import PrivacyDescription from '../component/PrivacyDescription/PrivacyDescription'
import Footer from '../component/Footer/Footer'

import PageTop from '../component/PageTop/PageTop'

 class PrivacyPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    return (
      <Fragment>
        <TopNavigation/>
        <PageTop pagetitle="Privacy And Policy"/>
        <PrivacyDescription/>
        <Footer/>
      </Fragment>
    )
  }
}

export default PrivacyPage