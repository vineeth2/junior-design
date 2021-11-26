import React, { Component } from 'react';
import Modal from 'react-modal';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "New Project",
      keywords : [],
      authors : [],
      modalOpen : false
    }
    this.openProjectDetails = this.openProjectDetails.bind(this);
    this.closeProjectDetails = this.closeProjectDetails.bind(this);
  }

  openProjectDetails() {
    this.setState((state) => {
      return {modalOpen: true}
    });
  }

  closeProjectDetails() {
    this.setState((state) => {
      return {modalOpen: false}
    });
  }

  render() {
    return (
      <main>
        <button onClick={this.openProjectDetails}> {this.state.name} </button>
        <Modal isOpen={this.state.modalOpen}>
          <div>
            <button onClick={this.closeProjectDetails}> Close </button>
          </div>
        </Modal>
      </main>
    );
  }
}

export default Project;
