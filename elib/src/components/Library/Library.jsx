import React from 'react';
import { data } from './library'
import './Library.css'
import Navbar from '../Navbar/Navbar';

function Library(props) {
    return (
        <div>
            <Navbar />
            <div className="w-100 text-center jumbotron text-white h4 c">Welcome to the hackX Library</div>
            <div className="container">
                {data.map(({ Genre }, index) => {
                    return (
                        <div className="p-2 " key={index}>
                            <span style={{ fontSize: "20px" }}> {(Genre.name)}</span>
                            <div style={{overflowX: "scroll" }} className="bord p-2 sc">
                                <div className="d-flex" style={{ width: "80%" }}>
                                    {Genre.books.map(({ name, pic }, index) => {
                                        return (
                                            <div className="bord rounded mx-1" key={index} style={{ width: "150px" }}>
                                                <img src={"./images/way.jpg"} alt="img here" className="rounded" width="145px" height="170px" />

                                                <div className="text-center p-1" style={{ fontSize: "16px" }}>{name}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Library;