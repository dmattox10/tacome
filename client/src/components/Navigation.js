// import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarToggler, NavbarText, Collapse, Nav } from 'reactstrap'
import ComputedLink from './ComputedLink'
import { useState } from 'react'
import { connect } from 'react-redux'

const Navigation = props => {

    const [toggle, setToggle] = useState(false)

    const {
        currentPage, navLinks
    } = props
    const filteredLinks = navLinks.filter(navlink => navlink !== currentPage)
    const updateToggle = () => {
        setToggle(prevState => !prevState)
    }
    return (
        <div>
            <Navbar
                color="dark"
                dark
                expand="md"
            >
                <NavbarBrand href="/">
                    TacoMe!
                </NavbarBrand>
                <NavbarToggler onClick={() => updateToggle()} />
                <Collapse isOpen={toggle} navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        {navLinks.map(link => <ComputedLink key={link} text={link}/>)}
                    </Nav>
                    {/* <NavbarText>
                        { currentPage }
                    </NavbarText> */}
                </Collapse>
            </Navbar>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      currentPage: state.currentPage,
      navLinks: state.navLinks
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onRequestRandom: () => dispatch({ type: 'GET_RANDOM' })
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Navigation)