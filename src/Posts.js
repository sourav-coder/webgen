import React from "react";

function Posts({ posts, loading }) {
  if (loading) {
    return <h1>Loading..</h1>;
  } else {
    return (
      <div className="row">
        {posts.map((value, index) => {
          return (
            <div className="col-md-4">
              <div class="card">
                <img
                  src={value.productImgUrl}
                  class="card-img-top"
                  alt="productImage"
                />

                <div class="card-body">
                  <h5 class="card-title">{value.productName} - {value.companyName}</h5>
                  <p class="card-text">
                    {value.productTitle}                   
                  </p>

                  <p class="card-text">
                   Rs. {value.productPrice}                 
                  </p>

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
