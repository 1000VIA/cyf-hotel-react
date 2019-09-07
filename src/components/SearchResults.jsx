import React from "react";
import FakeBookings from "../data/fakeBookings.json";
import TableRow from "./TableRow";

const SearchResults = () => {
  return (
    <div className="container-fluid">
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">firstName</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">roomId</th>
            <th scope="col">checkInDate</th>
            <th scope="col">checkOutDate</th>
            <th scope="col">#Days</th>
          </tr>
        </thead>
        <tbody>
          <TableRow infoJSON={FakeBookings} />
        </tbody>
      </table>
    </div>
  );
};
export default SearchResults;

// results={FakeBookings}
