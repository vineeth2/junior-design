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
        <h1>My Dashboard</h1>       {/*Title of page*/}
      </div>

      <div>
        {projects}                  {/*List of projects that get displayed*/}
      </div>

      <div>
        <button onClick={addNewProject}> + </button>    {/*Button that adds a new project to the list*/}
      </div>
    </>
  );
}

export default App;
