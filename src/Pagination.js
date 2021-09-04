import React from "react";
import { Link } from "react-router-dom";

function Pagination({ page, totalPosts, paginate }) {
  const pageno = [];

  for (let i = 1; i <= Math.ceil(totalPosts / page); i++) {
    pageno.push(i);
  }
  return (
    <nav className="pagination navbar navbar-expand-lg ">
      <ul className="pagination">
        {pageno.map((value, index) => {
          return (
            <li className="page-item">
              <Link
                onClick={() => paginate(value)}
                to="/"
                className="page-link"
              >
                {value}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Pagination;
