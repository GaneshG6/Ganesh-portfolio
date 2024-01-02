import React from "react";
import { FormGroup, Label, Input as RSInput} from 'reactstrap'

function TextArea({id, name, placeholder}) {
    return (
       <div className="form-floating">
  <textarea className="form-control input-color" style={{height: "9em"}}  placeholder={placeholder} id={id}></textarea>
  <label for="floatingTextarea">{name}</label>
</div>
    )
}

export { TextArea }