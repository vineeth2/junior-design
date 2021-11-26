import './App.css';
import Project from "./Project.js"
import React, { useState, Component } from 'react';
import Modal from 'react-modal';

function App() {

  const [projects, setProjects] = useState([]);

  function addNewProject() {
    setProjects(projects.concat(<Project/>));
  }

  return (
  <>
    <div className="App">
      <h1>My Dashboard</h1>
    </div>
    <div>
      {projects.map((project) => (
        <>
          <Project/>
        </>
      ))}
    </div>
    <div>
      <button onClick={addNewProject}> + </button>
    </div>
  </>
  );
}

export default App;
