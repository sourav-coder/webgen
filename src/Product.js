import React from "react";
import {useParams} from "react-router-dom"
import {useSelector} from "react-redux"

function Product() {

    const {id}=useParams();
    const productState=useSelector((state)=>state)
    const data = productState.find((product)=>product._id===id)


    return(

    
        <div className="product">
            <div className="row">
                <div className="col-md-6">
                    <img src={data.productImgUrl} alt='Product' className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h1 className="title">{data.productName}</h1>
                    <p className="companyName">{data.companyName}</p>
                    <h2>Rs. {data.productPrice}</h2>
                    <p>{data.productTitle}</p>
                </div>


            </div> 
        </div>
  
    );
}

export default Product;
