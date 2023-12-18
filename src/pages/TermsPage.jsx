import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/TopNavigation/TopNavigation'
import PageTop from '../component/PageTop/PageTop'
import TermsDescription from '../component/TermsDescription/TermsDescription'
import Footer from '../component/Footer/Footer'

export class TermsPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    return (
      <Fragment>
        <TopNavigation/>
        <PageTop pagetitle="Terms and Condition"/>
        <TermsDescription/>
        <Footer/>
      </Fragment>
    )
  }
}

export default TermsPage