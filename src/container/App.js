import { render } from "@testing-library/react";
import React, { Component } from "react";
import Cardlist from "../Components/Cardlist";
import Scroll from "../Components/Scroll";
import SearchBox from "../Components/SearchBox";
import ErrorBoundry from '../Components/ErrorBoundry';
import "./App.css";
const state = {
  robots: [],
  searchfield: "",
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    console.log(this.props.store)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots?.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.lenght ?  (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
          <Cardlist robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    ):(
        <h1>Loading.....</h1>
      ) ;
  }
}
export default App;
