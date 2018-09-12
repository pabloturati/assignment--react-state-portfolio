import React, { Component } from "react";

class Project extends Component {
  render() {
    const { projectName, solo } = this.props.project;
    const soloStr = solo ? "project--solo" : "project--team";

    return (
      <div className={`project ${soloStr}`}>
        <span className="project__title">{projectName}</span>
      </div>
    );
  }
}

export default Project;
