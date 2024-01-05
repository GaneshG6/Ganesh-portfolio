import React, { Suspense } from "react";
import { NavBar } from "../NavBar";
import { Img } from "../../Asset";
import { Companies, Image, Information } from "../../Components";
function About() {
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
        <NavBar activeLink={'About'}/>
        <div className="screen-container"> 
        </div>
        <div className="pb-5 " style={{ backgroundColor: 'white', color: "black", marginBottom: "0px"}}>
            <div className="container d-flex flex-wrap  pt-5" >
            <div className="col-md-6 col-12 d-flex justify-content-center">
                        <Image src={Img.aboutImg2} alt={'information'} height={"90%"} width={'90%'}/>
                    </div>
                <div className="col-md-6 col-12  ps-md-3">
                    <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5 rounded-4 p-2 bg-primary">
                        <Image src={Img.sayHi} alt={'service'} style={{
                            borderRadius: "320px",
                            width: "160px",
                            height: "160px",
                            objectFit: "cover"
                        }} />
                        <h2 className="ms-4 fw-bolder fs-1 text-white">My Story</h2>
                    </div>
                    <h2 className="fs-2 fw-bold">a little bit about Ganesh</h2>
                    <small>
                    
As a React.js developer, I specialize in building dynamic and interactive user interfaces using the React.js library. my expertise includes a component-based development approach, managing state with redux, integrating with APIs, ensuring responsive design, and employing testing methodologies. I collaborate with diverse teams in an Agile or Scrum environment, stay updated on the latest React.js trends, and consistently strive for effective problem-solving in web development. My role contributes significantly to creating modern and maintainable web applications.
                    </small>
                    </div>
            </div>
        </div>
        <Information/>
        <Companies/>
        </Suspense>
        </>
    )
}
export { About }