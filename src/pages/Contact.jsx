import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../component/TopNavigation/TopNavigation'
import PageTop from '../component/PageTop/PageTop'
import ContactSec from '../component/ContactSec/ContactSec'
import Footer from '../component/Footer/Footer'

 class Contact extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    return (
      <Fragment>
                <TopNavigation/>
                <PageTop pagetitle="Contact Us"/>
                <ContactSec/>
                <Footer/>
      </Fragment>
    )
  }
}

export default Contact