import React from "react";
import { Card, Image } from "../../Components";
import { Img } from "../../Asset/Img";
import { Icons } from "../../Asset";
import { Service } from "../Service";
import { NavBar } from "../NavBar";

function Home() {
    const websiteInformation =
        [{ id: 0, img: <Image src={Icons.laptop} alt={'latop'} style={{ objectFit: "contain", height: '90px' }} />, title: "Web Applications", style: { backgroundColor: "#c14000" }, text: "Designing and developing tailored solutions to meet specific business needs. Leveraging technologies like React, Angular, or Vue.js to create dynamic and interactive web applications." },
        { id: 1, img: <Image src={Icons.mobile} alt={'mobile'} style={{ objectFit: "contain", height: '90px' }} />, title: "Responsive",style: { backgroundColor: "#009988" }, text: "Your website will look fantastic on any device. I prioritize responsive design, ensuring a great experience for users on smartphones, tablets, and computers." },
        { id: 2, img: <Image src={Icons.support} alt={'support'} style={{ objectFit: "contain", height: '90px' }} />, title: "Quick Support",style: { backgroundColor: "#ffa500" }, text: "Providing ongoing support and maintenance services to ensure websites remain up-to-date, secure, and aligned with evolving business requirements." }]
    return (
        <>
        <NavBar activeLink={'Home'}/>
        <div id="home">
            <div className="screen-home-container  d-flex justify-content-end align-items-center">
                {/* <Image src={Img.welcome} alt={'welcome image'} width={"100%"} style={{ objectFit: "cover" }} /> */}
                <div className="screen-container-inner position-relative">
                    <h1 className="screen-text">Hello friend!</h1>
                    <h1 className="screen-text">I'm available for freelance work.</h1>
                </div>
                
            </div>
            <div className="screen-card container">
                    <div className="d-flex flex-wrap  " style={{ marginTop: '-40px' }}>
                        {
                            websiteInformation.map((item, index) => {
                                const { img, title, text, style } = item
                                return (
                                    //     <div className={`${index == 0 ? "each-duration" : "each-duration-space each-duration"}`}><Card img={img} title={title} text={text} color={index == 0 ? "#c14000" : index == 1 ? "#009988" : "#ffa500" }/>
                                    // </div>
                                    <div className={`${index == 0 ? "ms-0" : "ms-md-4 ms-0 mt-5 mt-md-0"} col-md col-12  each-duration` } style={style}>
                                        <div className="p-4" >
                                            <div className="text-center">
                                                {img}
                                            </div>
                                            <div className="mt-4 text-center">
                                                <h2>{title}</h2>
                                            </div>
                                            <div className="mt-4">
                                                <p>{text}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            <div className="mt-5">
            <Service />
            </div>
        </div>
        </>
    )
}
export { Home }