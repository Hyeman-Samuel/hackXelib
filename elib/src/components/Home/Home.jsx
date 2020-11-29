import React from 'react';
import './Home.css'
import Navbar from '../Navbar/Navbar';

function Home(props) {
    return (
        <div>
            <div className="background"></div>
            <Navbar />
            <div className="content">
                <div className="position-absolute p-1 w-25 text-center c" style={{fontWeight:"400"}}>HackX Elib </div>
                <nav className="links">
                    <a className='sm' href="/login">Log In</a>
                    <a className='sm' href="auth\signup.html">Contact Us</a>
                    <a className='sm' href="/signup"><button className="signin btn btn-lib">SIGN IN</button></a>
                </nav>
                <main className="w-auto position-relative" style={{top:" 30vh"}}>
                    <div className="text-center c">
                        <div className='h4'> The HackX Elib Project hx-E</div>
                        <h5 className='text-dark'>Books at your very reach</h5>
                    </div>
                    <div className="col-lg-5 col-sm-8 m-auto ">
                        <input type="text" className="form-control rounded-pill my-4" onkeyup="" placeholder="search for books . . ." />
                    </div>
                    <div className="w-100 text-center">
                        <a href="/library"><button type="button" className="btn-outline-lib btn bord c ">Visit our Library</button></a>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default Home;