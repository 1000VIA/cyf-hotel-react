import React, { Component } from "react";
import moment from "moment";

class TableRow extends Component {
  render() {
    const arrayInfo = this.props.infoJSON;
    return arrayInfo.map(name => {
      return (
        <tr>
          <th scope="row">{name.id}</th>
          <td key={name.id}>{name.title}</td>
          <td key={name.id}>{name.firstName}</td>
          <td key={name.id}>{name.surname}</td>
          <td key={name.id}>{name.email}</td>
          <td key={name.id}>{name.roomId}</td>
          <td key={name.id}>{name.checkInDate}</td>
          <td key={name.id}>{name.checkOutDate}</td>
          <td key={name.id}>
            {moment(name.checkOutDate).diff(moment(name.checkInDate), "days")}
          </td>
        </tr>
      );
    });
  }
}

export default TableRow;
