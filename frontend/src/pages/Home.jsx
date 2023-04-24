import React from 'react'
import "./Home.css";
import {Link} from 'react-router-dom';

const Home = () => {
    const image = require("../images/about.jpeg") 
    return (
        <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center text-align-center">
            <div className="row container">
                <div
                    className="home col-lg-6 d-flex justify-content-center  flex-column"
                    
                >
                  <h2 style = {{ fontSize: "80px"}} >BOOK STORE</h2>
                  <h3 style = {{ fontSize: "50px"}}>FOR YOU</h3>
                  <p className="mb-0" style={{color: "silver" }}>Checkout the Books from Here
                  </p>
                  <Link to = "./books" className = "viewBook my-3">
                  View Books
                  </Link>
                </div>
                <div
                    className="homeimg-box col-lg-6 d-flex justify-content-center align-items-center flex-column"
                    style={{ height: "91.5vh" }}
                >
                    <img
                    className="img-fluid homeimg" 
                    src = "https://images.unsplash.com/photo-1603831905217-8c2f485a2e20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHJlYWRpbmclMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" 
                    alt = "/" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
