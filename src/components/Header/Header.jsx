import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { useSelector } from 'react-redux';
function Header() {
  const navigate=useNavigate()
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


    const availableCount = useSelector((state) => state.parking.availableCount);
    const handleClick = () => {
      if (availableCount > 0) {
        navigate('/availableparking', { state: { availableCount } }); // Pass availableCount via state
      }
    };
  return (
    <Navbar 
      collapseOnSelect 
      expand="lg" 
      fixed="top" 
      className={` navbar navbar-nav nav-link navbar-transparent ${scrolling ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand><strong>
        <FaLocationDot style={{ marginTop: '-5px', color: ' #e67e22' }} />
      </strong>ParkMate</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" my-2 my-lg-0 mx-auto">
          <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
          <Nav.Link as={Link} to="/parking" className="text-light">Booking</Nav.Link>
          <Nav.Link as={Link} to="/about" className="text-light">About</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="text-light">Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
           
  <Nav.Item>      
<div className='container1'>
<button type="button" className="icon-button" onClick={handleClick}>
  <span className="material-icons">P</span>
  <span className="icon-button__badge"> {availableCount > 0 && availableCount}
  </span>
</button></div></Nav.Item> &nbsp;&nbsp;&nbsp;&nbsp;
<Nav.Item><strong className='text-info'> 	&#128241;</strong>
<span className='text-c'>&nbsp;0 (800) 123-456</span></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
