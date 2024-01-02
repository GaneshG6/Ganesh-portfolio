import React from "react";
import './index.css'
import { Form, FormGroup, Label, Input as RSInput, Button} from 'reactstrap' 
function FloatingInput({id, name, placeholder,type, text}) {
    return (
        <Form>
    <FormGroup floating>
      <RSInput
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        className="input-color"
      />
      <Label for="exampleEmail">
        {text}
      </Label>
    </FormGroup>
  </Form>
    )
}
export { FloatingInput }