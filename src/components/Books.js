import React, { Component } from "react";

export default class Books extends Component {
  render() {
    return (
      <tr className="tr-cart">
        <th>{this.props.title}</th>
        <th>{this.props.author}</th>
        <th>{this.props.year}</th>
      </tr>
    );
  }
}
