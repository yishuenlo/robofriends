import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

//'smart components' have class syntax and states
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  async componentDidMount() {
    //using async promise to fetch api
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => this.setState({ robots: users }));

    const response = await fetch("https://swapi.dev/api/people/");
    const people = await response.json();
    this.setState({ robots: people.results });
  }

  //method for detecting change in search bar
  //use arrow function to allow 'this' to refer to App, not input
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    //have filterrobots in render so it can be returned
    const filteredrobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    //if still waiting for api file... display loading
    return !robots.length ? (
      <h1 className="loading">Loading...</h1>
    ) : (
      <section>
        <h1>Robofriends</h1>
        {/* assign method 'onSearchChange' to prop 'searchChange' */}
        {/* use 'this' because we are in an object/class */}
        <SearchBar searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredrobots} />
          </ErrorBoundary>
        </Scroll>
      </section>
    );
  }
}

export default App;
