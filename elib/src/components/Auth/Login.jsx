import React from 'react';

function Login(props) {
    return(
        <div className="col-lg-4 col-sm-10 p-3 m-auto pt-5" style={{height: "60vh"}} >
        <div className="position-relative w-100 bord p-3 rounded" style={{top: "20vh;"}}>
          <div className="w-100 text-center h5 c py-5" style={{fontFamily: "open sans;"}}>
              Login
          </div> 
  
          <input type="text" className="field form-control bord" placeholder="Library Id" /> <br />
          <input type="text" className="field form-control bord" placeholder="Password" />  <br />
          <input disabled type="button" className="form-control bord btn-lib" value="Login" />
        </div>
        <div className="position-relative c d-flex" style={{top: "24vh;"}}>
          <span className="text-left w-50">
              Forgot password ?
          </span>
          <a href="/signup" className="c text-right w-50">Signup</a>
       </div>
      </div>
    )
}
export default Login;