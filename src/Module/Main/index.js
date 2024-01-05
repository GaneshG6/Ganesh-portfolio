import React, { Suspense } from "react";
import { Home } from "../Home";
import { NavBar } from "../NavBar";
import { Footer } from "../Footer";
function Main() {
    function BigSpinner() {
        return (
          <div className="glimmer-panel mt-7">
          <div className="glimmer-line" />
          <div className="glimmer-line" />
          <div className="glimmer-line" />
        </div>
        )
      }
    return (
        <>
        <Suspense fallback = {<BigSpinner/>}>
        <Home/>
        <Footer/>
        </Suspense>
        </>
    )
}
export {Main }