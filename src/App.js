import './App.css';
import Project from "./Project.js"
import React, { useState, Component } from 'react';
import Modal from 'react-modal';

function App() {

  const [projects, setProjects] = useState([]);     // UseState that adds a project to the list of projects

  function addNewProject() {
    setProjects(projects.concat(<Project/>));       // Adds a project to the list of projects
  }

  return (
    <>
      <div className="App" style={{marginBottom: '60px'}}>
        <h1>My Dashboard</h1>       {/*Title of page*/}
      </div>

      <div class="grid">
        {projects}                  {/*List of projects that get displayed*/}
      </div>

      <div
      style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: '30px',
                fontSize: '20px',
              }}
            >
        <button onClick={addNewProject} style = {{float: 'center'}}> Add Project </button>    {/*Button that adds a new project to the list*/}
      </div>
    </>
  );
}

export default App;
