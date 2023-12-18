import React, { Component, Fragment } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
// import whiteLogo from '../../asset/image/logo_white.png'
// import blackLogo from '../../asset/image/logo_black.png'
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


class TopNavigation extends Component {
    constructor(){
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarBack:"navBackground",
            navBarItem:"navItem",

        }
    }

    onScroll=()=>{
        if(window.sctrollY>100){
            this.setState({navBarTitle:'navTitleScroll',navBarBack:'navBackgroundScroll',navBarItem:"navItemScroll"})
            
        }else if(window.scrollY<100){
            this.setState({navBarTitle:'navTitle',navBarBack:'navBackground',navBarItem:"navItem"})

        }
    }
    componentDidMount(){
        window.addEventListener('scroll',this.onScroll)
    }



  render() {
    return (
        <Fragment>
            
            <Navbar collapseOnSelect fixed='top' expand="lg" className="bg-body-tertiary">
            <Container>
            <Navbar.Brand className={this.state.navBarTitle}> <NavLink className="logo" to="/"> TECH LEARNING </NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            
            </Nav>
            
            <Nav>
            <NavLink className={this.state.navBarItem} to="/">HOME</NavLink>
            <NavLink className={this.state.navBarItem} to="/about">ABOUT</NavLink>
            <NavLink className={this.state.navBarItem} to="/service">SERVICE</NavLink>
            <NavLink className={this.state.navBarItem} to="/course">COURSES</NavLink>
            <NavLink className={this.state.navBarItem} to="/portfolio">PORTFOLIO</NavLink>
            <NavLink className={this.state.navBarItem}  to="/contact">CONTACT US</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
                
        </Fragment>
    )
  }
}

export default TopNavigation