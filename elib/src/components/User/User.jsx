import React from 'react'
import {userbooks} from './userbooks'
import Navbar from '../Navbar/Navbar';

function User(props) {
    return (
        <div className="">
            <Navbar />
            <div className="container m-auto">
                
                <div className="position-relative" style={{height:"70px"}}>
                    <div className="h5 c position-absolute mt-4 small">You have {userbooks.length} books in your library</div> 
                    <i className="fa fa-sign-out c btn-outline-lib btn mr-1 position-absolute mt-4" style={{right:"0"}}></i>
                </div>
                <div className="row " style={{flexWrap:"wrap",flex:"100%",justifyContent:"space-around"}}>
                    {userbooks.map(({name,pic})=>{
                        return (
                           <div className="bord rounded col-lg-1 bg-light my-1 px-0 col-sm-2" style={{margin:"0px"}}>
                            <img src="./images/way.jpg" alt="" width="50%" height="200px"/>
                            <div className="px-1 m-1">{name}</div>
                           </div> ||  "empty"
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default User;