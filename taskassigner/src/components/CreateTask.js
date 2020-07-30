
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, Col} from 'react-bootstrap';
import AlarmIcon from '@material-ui/icons/Alarm';
import './createtask.css'

const CreateTask = (props)=>{
  const [tempState, setTempState] = useState({});
  const form  = React.createRef();
  let val = ""
  var days = {"day":"Tomorrow","time":"9:00 AM"}  
  let id = ""
  const handleChange = (e)=>{
      id = e.target.id;
      if (e.target.id==="dueDate"){
        days["day"] = e.target.value;
        val = days["day"] + " at " +days["time"]
      }
      else if (e.target.id==="dueTime"){
        days["time"] = e.target.value;
        val = days["day"] + " at " +days["time"]
        
        id = "dueDate"
      }
      else{
        val = e.target.value;
      }      

      setTempState({...tempState, "status":"pending", [id]:val})
  }

  useEffect(()=>{
    
  },[tempState]);

  const handleCreate = (e)=>{
     e.preventDefault();
     props.setState([...props.state, tempState])
     console.log(props.state)

  }

  const handleCreateClear = (e)=>{
     e.preventDefault();
     props.setState([...props.state, tempState])
     console.log(props.state)
     form.current.reset();

  }



  return( 
        <div className="CreateTask"> 
          <div className="CreateTask-Head">
              <span>Create task</span>
              <span><i className="fa fa-times" onClick={props.toggleCreateTask} aria-hidden="true"></i></span>
          </div>

          <Form ref={form}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" onChange={handleChange}/>              
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label>Type</Form.Label>
              <Form.Control as="select" onChange={handleChange}>
                <option>To-Do</option>
                <option>Mail</option>                                
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="associatedWith">
              <Form.Label>Associate with records</Form.Label>
              <Form.Control as="select" onChange={handleChange}>
                <option>Search Records</option>
                <option>Search Records2</option>                             
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="assignedTo">
              <Form.Label>Assigned to</Form.Label>
              <Form.Control as="select" onChange={handleChange}>
                <option>Rachita</option>
                <option>Rahul</option>                               
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="queue">
              <Form.Label>Queue</Form.Label>
              <Form.Control as="select">
                <option>None</option>
                <option>None</option>                           
              </Form.Control>
            </Form.Group>

            
            <Form.Label>Due Date</Form.Label>
            <Form.Row className="flex">
              <Col md={6}>
              <Form.Group controlId="dueDate">                              
                <Form.Control as="select" onChange={handleChange}>
                  <option>Tomorrow</option>
                  <option>Today</option>                
                </Form.Control>
               </Form.Group> 
              </Col>
              <Col md ={1}>
                at
              </Col>
              <Col md = {5}>
                  <div className="flex">                    
                    <Form.Group controlId="dueTime" className="flex CreateTask-DueTime">
                      <i className="fa fa-clock-o" aria-hidden="true"></i>
                      <Form.Control as="select" onChange={handleChange}>                  
                        <option>8:00 AM</option>                    
                        <option>9:00 AM</option>
                      </Form.Control>
                    </Form.Group>
                  </div>
                
              </Col>
            </Form.Row>
                        
          </Form>

          <div className="CreateTask-Footer">
              <Form.Row>
                <Col md={3}>
                  <Button variant="outline-danger" onClick={handleCreate} className="CreateTask-CreateBtn MobBtn">Create</Button>
                </Col>
                <Col md={6}>
                  <Button variant="outline-danger" onClick={handleCreateClear} className="CreateTask-CreateBtn MobBtn">Create and add another</Button>
                </Col>
                <Col md ={3}>
                  <Button variant="outline-danger" onClick ={props.toggleCreateTask} className = "CreateTask-Btn MobBtn">Cancel</Button>
                </Col>
              </Form.Row>
            </div>

        </div>
  )
}


export default CreateTask;