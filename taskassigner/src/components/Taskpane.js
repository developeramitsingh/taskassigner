import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './taskpane.css'
import { Button, Navbar, Nav, NavDropdown, Container, Row, Col, Dropdown, Accordion,Card, NavItem, NavLink, Form, FormControl} from 'react-bootstrap';
import TaskTable from './TaskTable'
import CreateTask from './CreateTask'

const Taskpane = ()=>{

	const [state, setState]  = useState([{"status":"done", "title":"Sprint Management", "type":"mail", "associatedWith":"-", "dueDate":"Tomorrow at 8:00 AM"}])

	
	const [isCreateTask, setCreateTask] = useState("block")

	const toggleCreateTask =()=>{
		if(isCreateTask === "none"){
			setCreateTask("block")
		}else{
			setCreateTask("none")
		}
	}

	return(
		
		<div className="flex" style={{alignItems:'initial'}}>
			<div className= {isCreateTask==="none"?"App-Tasks":"CreateTaskOpened"}>
				<Container fluid>
					<Row className="pb-4 pt-2 bb-1">
						<Col>
							<h3>Tasks</h3>
						</Col>
						<Col className="right">
							<Row>
								<Col md={8}>
									<Button variant="outline-danger" className="App-Tasks-Btn MobBtn">Start queue</Button>
								</Col>		
							
								<Col md ={4}>
									<Button variant="outline-danger" onClick ={toggleCreateTask} className = "App-Tasks-Btn Active MobBtn">Create task</Button>
								</Col>
							</Row>
						</Col>						
					</Row>

					<Row className="mt-2">
						<Col xs={3}>
							<Row>
								<Col>
									<Nav className="flex-column sideList-left">
									  <Nav.Link className="ActivePane" href="#">Open Tasks</Nav.Link>
									  <Nav.Link href="#">Due today</Nav.Link>
									  <Nav.Link href="#">Open this week</Nav.Link>
									  <Nav.Link href="#">Overdue</Nav.Link>							  
								      <div>
								      
								      <Accordion >
									      <Accordion.Toggle as = {Button}  className = "Taskpane-SideList-Accordian__Btn" variant="link" eventKey="0">
									       	More <i className="fa fa-angle-down blue--fg" style={{float:'right', fontSize:'19px', fontWeight:'bold'}}></i>
									      </Accordion.Toggle>
									  
									    <Accordion.Collapse eventKey="0">
									      	<Nav.Link href="#">More 1</Nav.Link>							  
									    </Accordion.Collapse>									  
									   </Accordion>
									   </div>						      
									</Nav>
								</Col>
							</Row>
							<Row>
								<Col>
									<hr></hr>
								</Col>
							</Row>
							<Row>	
								<Col>
									<h6 style={{fontWeight:'bold'}} className="blue--fg--dark">QUEUES</h6>
									<div className="Taskpane-SideList-Queue blue--fg">+ Add a queue</div>
								</Col>
							</Row>
						</Col>
						<Col xs = {9}>
							<Row>							
							  <Col md={8}>
							  	<Row className={isCreateTask==="block"?"Taskpane-Filter--Nav":"disabled"}>
							  		<Col md={2}>
							  			<span>Filter by:</span>
							  		</Col>
							  		<Col md={3}>							  	  
								      <NavDropdown title="Rachita Sarogi" id="nav-dropdown">
								        <NavDropdown.Item >Action</NavDropdown.Item>
								      </NavDropdown>
							      </Col>
							      <Col md = {2}>
								      <NavDropdown title="All types" id="nav-dropdown">
								        <NavDropdown.Item >Action</NavDropdown.Item>
								      </NavDropdown>
							      </Col>

							      <Col md = {2}>
								      <NavDropdown  title="All time" id="nav-dropdown">
								        <NavDropdown.Item >Action</NavDropdown.Item>
								      </NavDropdown>
								  </Col>
								  <Col md= {3}>
							      	<Nav.Link href="#">Edit Columns</Nav.Link>
						      	  </Col>
						      	</Row>
						      </Col>

						      <Col md={4}>
							      <Form inline className="Taskpane-Filter--SearchForm">
								    <FormControl type="text" placeholder="Search for a task" className=" mr-sm-2 Taskpane-Filter--Search" />    
								    <div className="fa fa-search" aria-hidden="true"></div>
								  </Form>
							  </Col>
						    

						    </Row>

						    <Row className="mt-2">
						    	<Col>
						    		<TaskTable state={state}/>
						    	</Col>
						    </Row>
						</Col>
					</Row>
				</Container>
			</div>

			
			<div className= "App-CreateTask" style={{display:isCreateTask}}>
				
				<CreateTask toggleCreateTask={toggleCreateTask} setState={setState} state={state}/>
						
			</div>
		</div>
		
	)
}


export default Taskpane;