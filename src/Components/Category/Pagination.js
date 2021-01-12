import React, { Component } from "react";
import "../../App.css";

class Pagination extends Component {
  render() {
    const {
      prevPage,
      nextPage,
      totalPage,
      size,
      pageNumber,
      currentPage,
    } = this.props;
    const numberPage = Math.ceil(totalPage / size);

    let button = [];
    for (let i = 0; i < numberPage; i++) {
      if (currentPage === i) {
        button[i] = (
          <li className="page-item active" onClick={pageNumber}>
            <a className="page-link" href="#" value={i + 1}>
              {i + 1}
            </a>
          </li>
        );
      } else {
        button[i] = (
          <li className="page-item" onClick={pageNumber}>
            <a className="page-link" href="#" value={i + 1}>
              {i + 1}
            </a>
          </li>
        );
      }
    }

    return (
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item" onClick={prevPage}>
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            {button}
            <li className="page-item" onClick={nextPage}>
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
