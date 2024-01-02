import React, { useState } from "react";
import { Image } from "../../Components";
import { Icons } from "../../Asset";
import { Link } from "react-router-dom";

function NavBar({activeLink}) {
    return (
        <div className="container fixed-top mt-4">
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 " style={{borderLeft: "6px solid #009988"}}>
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand" href="#"><span className="fw-bold fs-4" style={{color: "#009988"}}>Ganesh</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-4" id="navbarText">
            <ul className="nav nav-underline me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={'/'} className={`nav-link ${activeLink === 'Home'&& "active"}`} aria-current="page" href="#home"> <span>HOME</span></Link>
              </li>
              <li className="nav-item">
                <Link to={"/about"} className={`nav-link ${activeLink === 'About'&& "active"}`} href="#">ABOUT</Link>
              </li>
              <li className="nav-item" >
                <Link to={'/project'} className={`nav-link ${activeLink === 'Project'&& "active"}`} href="#">PROJECT</Link>
              </li> 
              <li className="nav-item">
                <Link to={'/contact'} className={`nav-link ${activeLink === 'Contact'&& "active"}`} href="#">CONTACT</Link>
              </li> 
            </ul>
            <div className="navbar-text">
              <Image src={Icons.email} alt={'email address'} height={25} width={25}/>
              <span className="py-2 px-md-4  ms-md-3 rounded-pill" style={{border: "2px solid #009988"}}>ganeshg1582000@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
      </div>
    )
}
export {NavBar}