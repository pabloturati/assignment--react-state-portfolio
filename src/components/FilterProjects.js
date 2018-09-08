import React, { Component } from 'react';
import { projectData } from '../data/datasource'
import Project from './Project'

/*  Advice:
   (1) Create the component's JSX by using .map() on `projectData`
       you will want to map to an array of <Project/> components


   (2) add an onClick event listener to the  <span> elements in .project-types-list
        that calls a method to change the FilterProjects component state to the selected
        view,

        Note: you will want to set the component's initial state in the
              constructor() function

   (3) Use .filter() to render the `projectData` based on FilterProjects
       component state

       Hint: you may want to use .filter() depending on the  then .map()
 */

class FilterProjects extends Component {

  constructor(props) {
    super(props);
    this.selected = 'project-type--selected',
    this.state = {
      allSelectedClassName : this.selected,
      teamSelectedClassName : '',
      soloSelectedClassName : '',
      filterCriteria: 'all'
    }
  }

  selectionHandler(id){
    switch(id){
      case 'all':
        this.setState({
          allSelectedClassName : this.selected,
          teamSelectedClassName : '',
          soloSelectedClassName : '',
        })
        break;
      case 'solo':
        this.setState({
          allSelectedClassName : '',
          teamSelectedClassName : '',
          soloSelectedClassName : this.selected,
        })
        break;
      default:  //Team
      this.setState({
        allSelectedClassName : '',
        teamSelectedClassName : this.selected,
        soloSelectedClassName : '',
      })
    }
    this.state.filterCriteria = id
  }

  render() {

    return (
      <section>
          <h4>Projects</h4>

          <div className="project-types-list">
            <span onClick={()=>this.selectionHandler('all')} className={`project-type project-type--all ${this.state.allSelectedClassName}`}>
              All
            </span>

            <span onClick={()=>this.selectionHandler('solo')} className={`project-type project-type--solo ${this.state.soloSelectedClassName}`}>
              <i className="ion-person"></i>Solo 
            </span>

            <span onClick={()=>this.selectionHandler('team')} className={`project-type project-type--team ${this.state.teamSelectedClassName}`}>
              <i className="ion-person-stalker"></i>Team
            </span>
          </div>

          <div className='projects-list'>
            {/* Step (1) --- .map() the projectData to JSX  */
              projectData
              .filter(e=>{
                switch(this.state.filterCriteria){
                  case 'solo':
                    if(e.solo) return e
                    break;
                  case 'team':
                    if(!e.solo) return e
                    break;
                  default:
                    return e
                }              
              })
              .map((e,i)=>{
                return <Project key={i} project={e} />
              })
            }
          </div>
        </section>

    );
  }
}

export default FilterProjects