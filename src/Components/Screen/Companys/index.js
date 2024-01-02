import React from "react";
import { Image } from "../../Component";
import { Icons, Img } from "../../../Asset";

function Companies() {
    return (
        <div className="container mt-5 d-flex justify-content-center flex-column align-items-center" style={{padding:'40px'}}>
            <h2 className="fs-1 fw-semibold">Companies I've had worked</h2>
            <div className="ml-3 d-flex justify-content-baseline mt-3  ">
                <div className="logo-hover">
              <Image src={Img.companyLogo} alt={'logo'} height={60} width={60}/>
              </div>
              <div className="ml-2" to="/presentation" id="tooltip6619950104" >
                <h2 className=" title" style={{ marginTop: '7px' }}> Leora <small>Infotech </small></h2>
                <p className="" style={{ fontSize: '12px', marginTop: '-15px', marginLeft: "2px" }}>BE THE LIGHT</p>
              </div>
              </div>
             
        </div>
    )
}
export { Companies }