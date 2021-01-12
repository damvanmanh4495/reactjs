import React, { Component } from "react";
import  "./CategoryDetail.css";

class CategoryDetail extends Component {
  render() {
    return (
      <div className="category-details">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th scope="row">Id</th>
              <td>{this.props.id}</td>
            </tr>
            <tr>
              <th scope="row">Code</th>
              <td>{this.props.code}</td>
            </tr>
            <tr>
              <th scope="row">Name</th>
              <td>{this.props.name}</td>
            </tr>
            <tr>
              <th scope="row">Descriptions</th>
              <td>{this.props.descriptions}</td>
            </tr>
            <tr>
              <th scope="row">Created</th>
              <td>{this.props.created}</td>
            </tr>
            <tr>
              <th scope="row">Modified</th>
              <td>{this.props.modified}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CategoryDetail;
