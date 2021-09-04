import React from "react";
import { useParams,useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import axios from "axios"

function Product() {
  const { id } = useParams();
  const productState = useSelector((state) => state);
  const data = productState.find((product) => product._id === id);

  console.log("peoduct page")
  const history=useHistory();

  function DeleteProduct()
  {
    console.log("is:",id)

    const payload={
      productId:data._id,
      userId:localStorage.getItem('userId')
    }
    axios({
      url:"https://webgen-assessment-backend.herokuapp.com/products/deleteproduct",
      method:"POST",
      data:payload 
    })
    .then((res) => {
      console.log(res);
      if (res.data.status === "success") {
        console.log(res);
        alert("Successfully deleted");
        history.push("/");
      } else if (res.data.status === "invalid") {
        console.log(res);
        alert(res.data.payload);
      }
      else if(res.data.status === "failure")
      {
        alert(res.data.payload)
      }
  
    })
    .catch((err) => {
      console.log(err);
    });

    
    
    
    




  }

  return (
    <div className="product">
      <div className="row">
        <div className="col-md-6">
          <img src={data.productImgUrl} alt="Product" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1 className="title">{data.productName}</h1>
          <p className="companyName">{data.companyName}</p>
          <h2>Rs. {data.productPrice}</h2>
          <p>{data.productTitle}</p>
          <Link className="btn update me-2" to={`/update/${data._id}`}>Update</Link>
          <button className="btn delete" onClick={DeleteProduct} >Delete</button>


        </div>
      </div>
    </div>
  );
}

export default Product;
