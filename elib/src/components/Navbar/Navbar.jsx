import React, { useState } from 'react'

function Navbar(props) {
    const [display, setDisplay] = useState("none");
    return (
        <nav className="b py-1 position-relative" style={{ height: "40px" }}>
            <a href="/" className="text-white position-absolute" style={{ left: "5%" }}> HackX Elib  </a>
            <nav className="position-absolute d-flex mx-2" style={{ right: "0%" }}>
                <div className="w-100 d-sm">
                    <input type="search" style={{ height: "30px" }} className="rounded bord form-control d-sm" />
                </div>
                <a href="/library" className="mx-3 text-white">library</a>
                {/* <a href="/" className="mx-3 text-white">icon</a> */}
                <i className="mx-3 fa fa-user-circle-o text-white mt-2" style={{height:"30px",width:"30px",cursor:"pointer"}}
                    onClick={()=>{
                        if (display==="none") {
                            setDisplay("block")
                        }else{
                            setDisplay("none")
                        }
                    }} 
                ></i>
            </nav>
            <div className="text-white position-absolute p-2" style={{right:"1%",top:"25px",display:display}}>
                <a href="/login"><button className=" btn-outline-lib rounded"> Login  </button></a>
            </div>
        </nav>
    )
}
export default Navbar;