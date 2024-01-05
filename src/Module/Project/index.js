import React from "react";
import { NavBar } from "../NavBar";
import { Image } from "../../Components";
import { Img } from "../../Asset";
function Project() {
    return (
        <>
            <NavBar activeLink={'Project'} />
            <div className="screen-project-container">
            </div>
            <div className="pb-5" style={{ backgroundColor: 'white', color: "black", marginBottom: "0px", marginTop: "40px" }}>
                <div className="container d-flex flex-wrap  pt-5" >
                    <div className="col-md-4 col-12 d-flex justify-content-center">

                    </div>
                    <div className="col-md-8 col-12  ps-md-3">
                        <div className="section-title-wrap d-flex justify-content-center bg-primary align-items-center rounded-4 p-2">
                            <Image src={Img.project} alt={'service'} style={{
                                borderRadius: "320px",
                                width: "160px",
                                height: "160px",
                                objectFit: "cover"
                            }} />
                            <h2 className="ms-4 fw-bolder fs-1 text-white">Projects</h2>
                        </div>
                    </div>

                    <div className="mt-5 col-md-12 d-flex flex-wrap">
                        <div className="col-md-6 col-12 p-md-5">
                            <div className="p-5 project-card">
                                <div>
                                    <small className="text-primary">AI RECRUITMENT</small>
                                    <h2>Intruv Space</h2>
                                </div>
                                <div className="mt-4">
                                   <a href="https://www.intrvu.space/" target="_blank"> <Image className={'project-image d-block '} src={Img.project1Img} height={'80%'} width={"100%"} /></a>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 col-12 p-md-5 mt-4 mt-md-0">
                            <div className="p-5  project-card">
                                <div>
                                    <small className="text-primary">LEARN WITHOUT LIMITS</small>
                                    <h2>QUANTA-EDAT</h2>
                                </div>
                                <div className="mt-4">
                                   <a href="https://www.quantaedat.com/" target="_blank"> <Image className={'project-image d-block '} src={Img.project2Img} height={'80%'} width={"100%"} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export { Project }