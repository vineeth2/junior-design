import React, { Component } from 'react';
import Modal from 'react-modal';
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TextField, Button } from '@mui/material';
// import { Card } from '@mui/material';

class Project extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name : "New Project",
      keywords : "",                // Constructor for each project object, contains all the details
      authors : "",                 // for each project
      modalOpen : false
    }
    this.openProjectDetails = this.openProjectDetails.bind(this);
    this.closeProjectDetails = this.closeProjectDetails.bind(this);
  }

  openProjectDetails() {
    this.setState((state) => {
      return {modalOpen: true}      // Opens a modal (popup) with all the project details
    });
  }

  closeProjectDetails() {
    this.setState((state) => {
      return {modalOpen: false}     // Closes the modal (popup) with all the project details
    });
  }

  render() {            // This is what is rendered when a project object is called (See App.js)
    return (
      <main>

        <Card border="primary" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{this.state.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{this.state.authors}</Card.Subtitle>   {/* Card that shows the summary of the project.*/}
            <Card.Text>                                                                       {/* Click project details to go to project details */}
              {this.state.keywords}
            </Card.Text>
            <Button variant="primary" onClick={this.openProjectDetails}>Project Details</Button>
          </Card.Body>
        </Card>

        <Modal isOpen={this.state.modalOpen}>           {/*This modal contains all the project details*/}

          <div
          style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}>
            <h2>Project Name</h2>
            <TextField
              onChange={event => {
                const { value } = event.target;
                this.setState({ name : value });        {/*Textfield for inputting project name*/}
              }}
            />
          </div>

          <div
          style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}>
            <h2>Authors</h2>
            <TextField
              onChange={event => {
                const { value } = event.target;
                this.setState({ authors : value });     {/*Textfield for inputting authors*/}
              }}
            />
          </div>

          <div
          style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
            <h2>Keywords</h2>
            <TextField
              onChange={event => {
                const { value } = event.target;
                this.setState({ keywords : value });    {/*Textfield for inputting keywords*/}
              }}
            />
          </div>

          <div
          style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}>
            <button onClick={this.closeProjectDetails}> Close </button>     {/*Close button*/}
          </div>

        </Modal>
      </main>
    );
  }
}

export default Project;
