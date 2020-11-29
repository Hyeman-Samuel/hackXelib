import React from 'react';

function Signup(props) {
    return(
        <div className="col-lg-4 col-sm-10 p-3 m-auto pt-5" style={{height:" 60vh;"}} >
        <div className="position-relative w-100 bord p-3 rounded" style={{top: "10vh;"}}>
          <div className="w-100 text-center h5 c py-5" style={{fontFamily: "open sans;"}}>
              Signup
          </div> 
  
          <input type="text" className="field form-control bord" placeholder="Create Library Id with your email" /> <br />
          <input type="tel" className="field form-control bord" placeholder="Phone" />  <br />
          <input type="text" className="field form-control bord" placeholder="Password" />  <br />
          <input type="text" className="field form-control bord" placeholder="Confirm" />  <br />
          <button type="button" className="form-control bord btn-lib" id="btns">Signup</button>
        </div>
        <div className="position-relative c d-flex" style={{top:"13vh;"}} >
          <span className="text-left w-50">
              Already have an account ? 
          </span>
          <a href="/login" className="c text-right w-50">Login</a>
       </div>
      </div>
    )
}
export default Signup;