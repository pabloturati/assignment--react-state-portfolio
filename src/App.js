import React, { Component } from 'react';
import ShowHideTech from './components/ShowHideTech'
import FilterProjects from './components/FilterProjects'

class App extends Component {
  render() {
    return (
      <div className="App" id="app-container">
        <ShowHideTech />
        <FilterProjects />
      </div>
    );
  }
}

export default App;
