import React from "react";

function Information() {
    return (
        <div style={{marginBottom: "100px" ,backgroundColor: "#f9f9f9" ,paddingTop: "100px", paddingBottom: "100px"}}>
        <div className="container d-flex flex-wrap" >
            <div className="col-md-6 col-12 mt-5 mt-md-0">
                    <table class="table table-hover table-bordered" style={{height: "300px"}}>
                        <thead>
                            <tr>
                                <th scope="col" colSpan={"4"}>Information</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="">
                                <th scope="row">Name</th>
                                <td>Ganesh</td>

                            </tr>
                            <tr>
                                <th scope="row">Age</th>
                                <td>24</td>
                            </tr>
                            <tr>
                                <th scope="row">Phone</th>
                                <td>8098222874</td>
                            </tr>
                            <tr>
                                <th scope="row">Email</th>
                                <td>ganeshg1582000@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                
            </div>
            <div className="col-md-6 col-12 ps-md-5 mt-5 mt-md-0">
                <div className="row">
                    <div className="col-6 border-end border-bottom m-0">
                        <h2 style={{ fontSize: "6em",fontWeight: "600" }}>
                            1+
                        </h2>
                        <h5 className="text-primary">Years of Experiences</h5>
                    </div>
                    <div className="col-6 border-bottom border-start m-0 ps-5">
                        <h2 style={{ fontSize: "6em",fontWeight: "600"  }}>
                            2
                        </h2>
                        <h5 className="text-primary">Project Finished</h5>
                    </div>
                    <div className="col-6 border-top border-end m-0 pt-4 d-flex flex-column justify-content-between">
                        <h2 style={{ fontSize: "1em",}}>
                            Java Script, HTML5, CSS, Bootstrap, SASS, Type script, React, Redux, Redux saga, React Router
                        </h2>
                        <h5 className="text-primary">Skills</h5>
                    </div>
                    <div className="col-6 border-start border-top m-0 ps-5 pt-4 d-flex flex-column justify-content-between">
                        <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank">Naukri</a>
                        <h5 className="text-primary">Online profile</h5>
                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}
export { Information }