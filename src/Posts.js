import React from "react";
import { Link } from "react-router-dom";

import Product from "./Product";

function Posts({ posts, loading }) {
  if (loading) {
    return <h1>Loading..</h1>;
  } else {
    return (
      <div className="row posts">
        {posts.map((value, index) => {
          return (
            <div className="col-md-4">
              <div class="card">
                <img
                  src={value.productImgUrl}
                  class="card-img-top img-fluid"
                  alt="productImage"
                />

                <div class="card-body">
                  <h5 class="card-title">
                    {value.productName} - {value.companyName}
                  </h5>
                  <p class="card-text">{value.productTitle}</p>

                  <p class="card-text">Rs. {value.productPrice}</p>
                  <Link to={`/product/${value._id}`} className="btn">
                    See More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Posts;
