import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../component/TopNavigation/TopNavigation'
import PageTop from '../component/PageTop/PageTop'
import Services from '../component/Services/Services'
import ContactSec from '../component/ContactSec/ContactSec'
import Footer from '../component/Footer/Footer'

export class AllServicePage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    return (
      <Fragment>
        <TopNavigation/>
        <PageTop pagetitle="Our Services"/>
        <Services/>
        <ContactSec/>
        <Footer/>
      </Fragment>
    )
  }
}

export default AllServicePage