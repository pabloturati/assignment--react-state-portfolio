import React, { Component } from 'react';

/*
  Note : Eacn <Project/> component will need to receive props from the FilterProjects
         component to write the code to render:

    + the project name inside the <span> ... </span>
    + the appropriate className for a team project or solo project
*/

class Project extends Component {

  render() {

    const {role, projectName, solo} = this.props.project
    console.log(solo)
    const soloStr = (solo)? 'project--solo' : 'project--team'

    //const theProjectName = 'THE PROJECT NAME' // pass in value as props
    // const soloProjectClassName = 'project--solo'
    // const teamProjectClassName = 'project--team'


    return (
      <div className={`project ${soloStr}`}>
        <span className="project__title">{projectName}</span>
      </div>
    );
  }
}


export default Project
