import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function CreateProduct() {



  // state: 
  const id=window.location.hash.split('/')[2];

  const state=useSelector((state)=>state);
  const data=state.find((product)=>product._id==id)
  console.log('dass',data);


  console.log(window.location)
  var hash=window.location.hash;

  // current states 
  const [pname, setPName] = React.useState(hash=='#/create'?'':data.productName);
  const [cname, setCName] = React.useState(hash=='#/create'?'':data.companyName);
  const [productTitle, setproductTitle] = React.useState(hash=='#/create'?'':data.productTitle);
  const [price, setPrice] = React.useState(hash=='#/create'?'':data.productPrice);
  const [url, setUrl] = React.useState(hash=='#/create'?'':data.productImgUrl);

  const dispatch = useDispatch();
  const history = useHistory();


  const change = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    switch (name) {
      case "productName":
        setPName(value);
        break;

      case "CompanyName":
        setCName(value);
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
  };

  const submit = () => {
    const jwt = Cookies.get('jwt')
    const userId=localStorage.getItem('userId');


    const payload = {
      productName: pname,
      companyName: cname,
      productTitle: productTitle,
      productPrice: price,
      productImgUrl: url,
      jwt: jwt,
      productCreatedBy:userId,
      productId:data==undefined?'':data._id
    };

    console.log(payload);
    const URL=hash=='#/create'?"https://webgen-assessment-backend.herokuapp.com/products/enterproduct":"https://webgen-assessment-backend.herokuapp.com/products/updateproduct"

    axios({
      url: URL,
      method: "POST",
      data: payload,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status === "success") {
          console.log(res);
          alert("Successfully added");
          history.push("/");
        } else if (res.data.status === "invalid") {
          console.log(res);
          alert(res.data.payload);
          history.push("/");
        }
        else if(res.data.status === "failure"){
          alert(res.data.payload);
          history.push('/')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
