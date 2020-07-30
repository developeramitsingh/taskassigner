import React from 'react';
import logo from '../logo.png';
import './navigation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';


const Navigation = ()=>{

	return (
			<Navbar className="blue"  expand="lg">
		        <Navbar.Brand href="#home"><img src={logo} className="App-logo" height = "30" alt="logo" /></Navbar.Brand>
		        
		        <Navbar.Toggle aria-controls="basic-navbar-nav" />
		        <Navbar.Collapse id="basic-navbar-nav" >
		          <Nav className="mr-auto App-TopNav">
		            <Nav.Link  href="#home">Home</Nav.Link>
		            <Nav.Link  href="#">Knowledge Base</Nav.Link>
		            <Nav.Link  href="#">Call Details</Nav.Link>
		            
		          </Nav>          
		        </Navbar.Collapse>

		        <Navbar.Collapse id="basic-navbar-nav" className="App-TopNav">
		          <Nav className="mr-auto App-TopNav">
		            <Nav.Link href="#"><span>Multimedia...</span><i className="fa fa-angle-down" style={{float:'right'}}></i></Nav.Link>
		            <Nav.Link  href="#"><i className="fa fa-fw fa-user"></i></Nav.Link>
		            <Nav.Link  href="#"><i className="fa fa-fw fa-bell"></i></Nav.Link>
		            <Nav.Link  href="#"><i className="fa fa-fw fa-phone"></i></Nav.Link>
		            <Nav.Link  href="#"><i className="fa fa-fw fa-envelope"></i></Nav.Link>
		            <i className="fa fa-fw fa-circle i--Available"></i>
		            
		            <Nav.Link href="#"><span>Available</span><i className="fa fa-angle-down" style={{float:'right'}}></i></Nav.Link>
					<Nav.Link href="#"><span>UX UI Tec...</span><i className="fa fa-angle-down" style={{float:'right'}}></i></Nav.Link>		            
		            
		          </Nav>          
		        </Navbar.Collapse>
		      
		      </Navbar>
		)
};

export default Navigation;