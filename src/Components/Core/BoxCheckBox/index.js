import React from "react";
import './index.css'

function BoxCheckBox( {img, text, id}) {
    return (
        <div >
        <input className="check-hover" type="checkbox" id={id} />
        <label className="label-ckeckBox" for={id}><div className="d-flex flex-column justify-content-center align-items-center">{img}<small className="mt-2">{text}</small></div></label>
        </div>
    )
}
export { BoxCheckBox }