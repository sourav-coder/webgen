import React from "react";
import {useDispatch} from "react-redux"
import { useHistory } from "react-router-dom";
import axios from "axios"

function CreateProduct() {


  const [pname,setPName]=React.useState("")
  const [cname,setCName]=React.useState("")
  const [productTitle,setproductTitle]=React.useState("")
  const [price,setPrice]=React.useState("")
  const [url,setUrl]=React.useState("")
  const dispatch = useDispatch()
  const history =useHistory();


  const change = (e)=>{

    const name=e.target.name 
    const value=e.target.value
    console.log(name,value)

    switch (name) {
      case "productName":
        setPName(value)
        break;
      
      case "CompanyName":
          setCName(value)
          break;
      case "productTitle":
        setproductTitle(value);
        break;
      case "productPrice":
        setPrice(value);
        break;
      case "productImgUrl":
        setUrl(value);
        break;

      default:
        break;
    }

  }


  const submit = ()=>{

    const payload={
      productName:pname,
      companyName:cname,
      productTitle:productTitle,
      productPrice:price,
      productImgUrl:url 
    }
    console.log(payload)

    axios({
      url:"/products/enterproduct",
      method:"POST",
      data:payload
    })
    .then((res)=>{
      console.log("item added")
    })
    // dispatch({type:"ADD_PRODUCT",payload:payload})
    alert("Successfully added");
    history.push('/')


  }



  return (
    <div id="login">
      <form>
        <p>Create Product</p>
        <input
          className="form-control"
          type="text"
          id="productName"
          value={pname}
          onChange={change}
          name="productName"
          placeholder="Enter Product Name"
        />
        <input
          className="form-control"
          type="url"
          name="CompanyName"
          value={cname}
          onChange={change}
          placeholder="Enter Company Name"
        />

        <input
          className="form-control"
          type="text"
          name="productTitle"
          value={productTitle}
          onChange={change}
          placeholder="Enter Product Title"
        />
        <input
          className="form-control"
          type="number"
          name="productPrice"
          value={price}
          onChange={change}
          placeholder="Enter Product Price"
        />
        <input
          className="form-control"
          type="url"
          name="productImgUrl"

          value={url}
          onChange={change}
          placeholder="Enter Product Url"
        />


        

        
        
          <button type="button" onClick={submit} class="btn btn-primary">
            Submit
          </button>
      </form>
    </div>
  );
}

export default CreateProduct;
