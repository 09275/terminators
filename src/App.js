import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots.js';
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  /*The onChange handler in the SearchBox.js receives the 
     value and then passes it to the onSearchChange function
     through the searchChange property.
     Every time I type a new input in the searchbox
     I get a new 'event' and the searchfield state is updated.
     IMPORTANT NOTE: setState updates the state object AND
     re-renders the component automatically.*/
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  /*Once the searchfield is updated with my new input I can filter
    my robots array and create the new array filteredRobots which 
    includes only the robots which names match the value I typed
    and is now in the searchfield.
    Then instead passing the {this.state.robots} array to the robots
    parameter I can pass the filteredRobots which contains only the
    robots I want.*/
  render() { 
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    });
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;