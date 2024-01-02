import React from "react";
import {Card as RsCard, CardBody, CardSubtitle, CardTitle, CardText} from 'reactstrap'
import './index.css'
function Card({text, title,img, color}) {
    // const {text,title} = props.data
    return (
         <RsCard
  style={{
    backgroundColor: color
  }}
  body
  inverse = {true}
  className="text-center card-hover"
>
  {img}
  <CardBody>
    <CardTitle tag="h2" className="mt-2">
      {title}
    </CardTitle>
    <CardText className="mt-2">
        {text}
    </CardText>
  </CardBody>
</RsCard> 
  
    )
}
export { Card }