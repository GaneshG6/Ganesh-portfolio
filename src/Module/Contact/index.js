import React from "react";
import { NavBar } from "../NavBar";
import { Footer } from "../Footer";
function Contact() {
    return (
        <>
        <NavBar activeLink={'Contact'}/>
        <div className="screen-contact-container"> 
        </div>
        <Footer/>
        </>
    )
}
export { Contact }