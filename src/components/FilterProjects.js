import React, { Component } from "react";
import { projectData } from "../data/datasource";
import Project from "./Project";

class FilterProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allSelectedClassName: "project-type--selected",
      teamSelectedClassName: "",
      soloSelectedClassName: "",
      filterCriteria: "all"
    };
  }

  handleFilterClick(filter) {
    const selectedClassName = "project-type--selected";

    this.setState({
      allSelectedClassName: filter === "all" ? selectedClassName : "",,
      teamSelectedClassName: filter === "team" ? selectedClassName : "",
      soloSelectedClassName: filter === "solo" ? selectedClassName : "",,
      filterCriteria: filter
    });
  }

  render() {
    return (
      <section>
        <h4>Projects</h4>
        <div className="project-types-list">
          <span
            onClick={() => this.handleFilterClick("all")}
            className={`project-type project-type--all ${
              this.state.allSelectedClassName
            }`}
          >
            All
          </span>

          <span
            onClick={() => this.handleFilterClick("solo")}
            className={`project-type project-type--solo ${
              this.state.soloSelectedClassName
            }`}
          >
            <i className="ion-person" />
            Solo
          </span>

          <span
            onClick={() => this.handleFilterClick("team")}
            className={`project-type project-type--team ${
              this.state.teamSelectedClassName
            }`}
          >
            <i className="ion-person-stalker" />
            Team
          </span>
        </div>

        <div className="projects-list">
          {
            projectData
              .filter(e => {
                return this.state.filterCriteria === "all"
                  ? e
                  : this.state.filterCriteria === "solo"
                    ? e.solo
                    : !e.solo;
              })
              .map((e, i) => {
                return <Project key={i} project={e} />;
              })
          }
        </div>
      </section>
    );
  }
}

export default FilterProjects;
