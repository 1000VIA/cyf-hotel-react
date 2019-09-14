import React, { Component } from "react";
import Search from "./Search.jsx";
import SearchResults from "./SearchResults.jsx";
import FakeBookings from "../data/fakeBookings.json";

class Bookings extends Component {
  constructor() {
    super();
    this.state = {
      infoJSON: FakeBookings
    };
  }

  search = searchVal => {
    let filtersFirstName = this.state.infoJSON.filter(
      name => searchVal === name.firstName || searchVal === name.surname
    );
    console.log(filtersFirstName);

    this.setState({
      infoJSON: filtersFirstName
    });
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          <SearchResults infoJSON={this.state.infoJSON} />
        </div>
      </div>
    );
  }
}

export default Bookings;
