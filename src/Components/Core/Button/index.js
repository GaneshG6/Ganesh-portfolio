import React from "react";
import { Button as RsButton } from 'reactstrap' 
function Button({ color, text}) {
    return(
        <div className="">
  <RsButton
    block
    style={{backgroundColor: "#009988"}}
  >
    {text}
  </RsButton>
</div>
    )
}
export { Button }