import React from 'react'

export default function Login(){
    
    
    return(
        <div id="login">
            <form>
            {/* <img  src={logo} alt="" className="img-fluid" /> */}
            <p>Welcome to Webgen Technologies</p>
                <input  className="form-control"  type="email" id="email" placeholder="Enter Email"/>
                <input  className="form-control"  type="number" id="password" placeholder="Enter Password"/>

                {window.location.hash=='#/login'?<button type="button" class="btn btn-primary" >Verify</button>:<button type="button" class="btn btn-primary" >Submit</button>}
            </form>


        </div>
    )
}