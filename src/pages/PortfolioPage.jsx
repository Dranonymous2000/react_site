import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/TopNavigation/TopNavigation'
import PageTop from '../component/PageTop/PageTop'
import AllProject from '../component/AllProjects/AllProject'
import Footer from '../component/Footer/Footer'

export class PortfolioPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    return (
      <Fragment>
        <TopNavigation/>
        <PageTop pagetitle="Our Portfolio"/>
        <AllProject/>
        <Footer/>
      </Fragment>
    )
  }
}

export default PortfolioPage