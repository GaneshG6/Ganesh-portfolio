import React from "react";
import { Icons, Img } from "../../Asset";
import { BoxCheckBox, Button, FloatingInput, Image, TextArea } from "../../Components";

function Footer() {
    return (
        <div className="screen-footer pb-5" style={{ backgroundColor: '#f9f9f9', color: "black" }}>
            <div className="container d-flex flex-wrap align-items-end  pt-5" >
                <div className="col-md-6 col-12">
                    <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5 rounded-4 p-2" style={{ backgroundColor: "#009988" }}>
                        <Image src={Img.sayHi} alt={'service'} style={{
                            borderRadius: "320px",
                            width: "160px",
                            height: "160px",
                            objectFit: "cover"
                        }} />
                        <h2 className="ms-4 fw-bolder fs-1 text-white">Say Hi</h2>
                    </div>
                    </div>
                    <div className="col-md-6 col-12"></div>
                    <div className="d-flex flex-wrap">
                        <div className="col-md-3 col-12 bg-white border-end rounded-start-4 p-4">

                            <h4 className="footer-heading mt-2">SERVICES</h4>
                            <div className="row-wrap">
                                <div className="border border-1 p-2 rounded-pill mt-2">
                                    <small className="m-0 ">Websites</small>
                                </div>
                                <div className="border border-1 rounded-pill p-2 mt-2">
                                    <small className="m-0">Ecommerce</small>
                                </div>
                                <div className="border border-1 rounded-pill p-2 mt-2">
                                    <small className="m-0 ">Maintenance</small>
                                </div>
                                <div className="border border-1 rounded-pill p-2 mt-2">
                                    <small className="m-0">Support</small>
                                </div>
                            </div>
                            <h4 className="footer-heading mt-5">STAY CONNECTED</h4>
                            <div className="d-flex justify-content-evenly align-items-center mt-4">
                                <Image src={Icons.linkedin} alt={'git'} height={24} width={24} style={{ objectFit: "contain" }} />
                                <Image src={Icons.git} alt={'git'} height={28} width={28} style={{ objectFit: "contain" }} />
                                <Image src={Icons.insta} alt={'git'} height={30} width={30} style={{ objectFit: "contain" }} />
                            </div>
                            <h4 className="footer-heading mt-5">START A PROJECT</h4>
                            <small className="text-secondary">
                                I’m available for freelance projects
                            </small>

                        </div>
                        <div className="col-md-3 col-12 bg-white rounded-end-4 mt-4 mt-md-0 p-4">
                            <h4 className="footer-heading mt-2">ABOUT</h4>
                            <small className="text-secondary">
                                I’m a professional web developer. Feel free to get in touch with me.
                            </small>
                            <h4 className="footer-heading mt-5">EMAIL</h4>
                            <small className="text-secondary ">
                                ganeshg1582000@gmail.com
                            </small>
                            <h4 className="footer-heading mt-5">CALL</h4>
                            <small className="text-secondary">
                                8098222874
                            </small>
                        </div>
                <div className="col-md-6 col-12 ps-md-4 mt-5 mt-md-0">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <FloatingInput id={'name'} name={'Name'} type={'text'} text={"Name"} placeholder={"Name"} />
                        </div>
                        <div className="col-12 col-md-6">
                            <FloatingInput id={'email'} name={'Email'} type={'email'} text={"Email address"} placeholder={"Email Address"} />
                        </div>
                        <div className="d-flex justify-content-between flex-wrap">
                
                            <BoxCheckBox id={'myCheckbox1'} img={<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472M3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                            </svg>} text={'Website'} />
                            
                            <BoxCheckBox id={"myCheckbox2"} img={<svg xmlns="http://www.w3.org/2000/svg" className="change-color" width="25" height="25" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                            </svg>} text={'Ecommerce'} />
                            <BoxCheckBox id={'myCheckbox3'} img={<svg xmlns="http://www.w3.org/2000/svg" className="change-color" width="25" height="25" fill="currentColor" class="bi bi-person-gear" viewBox="0 0 16 16">
                                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                            </svg>} text={'Maintenance'} />
                            <BoxCheckBox id={"myCheckbox4"} img={<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472M3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                            </svg>} text={'Website'} />
                        </div>
                        <div className="mt-4">
                            <TextArea id={'project'} name={'Tell me about the project'} placeholder={'Tell me about the project'}/>
                            {/* <textarea /> */}
                        </div>
                        <div className="mt-4">
                            <Button text={'Send'}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export { Footer }